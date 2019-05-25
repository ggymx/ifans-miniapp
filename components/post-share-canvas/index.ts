import { IPost, EPostType } from '../../common/types/posts'
import { getImageInfo, drawImageCenterCrop } from '../../common/helper';
import { fillTextVerticalCenter } from './../../common/helper';

Component({
  properties: {
    post: {
      type: Object,
      value: {},
      observer() {
        (this as any).createShareImage();
      },
    },
  },
  onCanvasError(e) {
    console.log('in base canvas error', e)
  },
  data: {
    shareMessageInfo: {},
    picPath: ''
  },
  methods: {
    onCanvasError(e) {
      console.log('in methods canvas error', e)
    },
    // 生成分享图
    async createShareImage() {
      if(!this.data.post || !this.data.post.id) { return }
      console.log('createShareImage', this.data.post)
      // @ts-ignored
      const ctx: any = wx.createCanvasContext('myCanvas', this)
      //防止加载中canvas上下文没有生成
      if (!ctx) {
        return;
      }
      // 绘制主体
      await this.drawImageAndText(ctx)
      const that = this
      //canvas转图片
      ctx.draw(true, () => {
        console.log('draw output')
        setTimeout(() => {
          (wx as any).canvasToTempFilePath({
            quality: 90,
            canvasId: 'myCanvas',
            success: (res) => {
              console.log('picready', res.tempFilePath)
              that.triggerEvent('picready', { picPath: res.tempFilePath });
            }
          }, that);
        }, 300);
      });
    },
    //合并文字和图案
    async drawImageAndText(ctx: any) {
      const post: IPost = this.data.post
      const w = this.autoSize(420)
      const h = this.autoSize(336)
      if(post.thumbnails && post.thumbnails.length > 0) {
        let imgPath = post.thumbnails[0].image
        let imgInfo = await getImageInfo(imgPath)
        drawImageCenterCrop(ctx, imgInfo, 0, 0, w, h)
      }
      ctx.fillStyle = 'rgba(0,0,0,0.2)'
      ctx.fillRect(0, 0, w, h)

      ctx.setFillStyle('#fff');
      ctx.setFontSize(32);

      // 绘制中央大文字
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const text = post.title || (post.refPost && post.refPost.title) || post.text
      fillTextVerticalCenter(ctx, text, w / 2, h / 2, this.autoSize(300), 32, 3)
      // 绘制头像
        let aw = this.autoSize(51)
        let margin = this.autoSize(5)
      if(post.type === EPostType.TopicReply) {
        // 投稿类
        let imgInfo = await getImageInfo(post.user.avatar)
        drawImageCenterCrop(ctx, imgInfo, 0, h - aw, aw, aw)
        ctx.textAlign = 'left'
        ctx.setFontSize(20)
        ctx.fillText(post.user.nickname + ': ' + post.text, aw+margin, h - aw / 2,this.autoSize(300), 1)
        console.log('draw end')
      } else {
        let imgInfo = await getImageInfo(post.user.avatar)
        let aw = this.autoSize(51)
        drawImageCenterCrop(ctx, imgInfo, w - aw, h - aw, aw, aw)
        ctx.textAlign = 'right'
        ctx.setFontSize(20)
        ctx.fillText(post.user.nickname, w - aw-margin, h - aw / 2)
        console.log('draw end')
      }
      // draw center red point
      // ctx.fillStyle = '#f00'
      // ctx.fillRect(w/2-1, h/2-1, 2,2)
    },
    //图片尺寸兼容
    autoSize(num) {
      const scale = wx.getSystemInfoSync().windowWidth / 375;
      return num * scale
    }
  }
});
