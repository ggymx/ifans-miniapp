/**测试用的APi */
export class TestApi {
  public static topList = [
    {
      tId: 1,
      tName: '葛干',
      tavatar:'',
      tDate: '2019/1/30',
      title: '整蛊大作战',
      tLike: 63,
      context: '又到了一年一度的愚人节，聪明的捣蛋鬼蠢蠢欲动，笨蛋只能被捉弄，就问你方不方？',
      cmtList: [
        {
          cmtId: 1,
          cmtName: '游明星',
          cavatar:'',
          cmtContext: '我是直男我害怕，嘤嘤嘤嘤嘤嘤，恩恩，想来想去还是怕',
          cmtDate: '2019/03/20',
          like: '98'
        },
        {
          cmtId: 2,
          cmtName: '孙达',
          cavatar:'',
          cmtContext: '我今天感冒了，鼻子有点肿，被天气耍了，我比较害怕...',
          cmtDate: '2011/04/12',
          like: '105'
        },
        {
          cmtId: 3,
          cmtName: '李泽',
          cavatar:'',
          cmtContext: '听说游明星是直男，孙达感冒了，我觉得作为一个易耍体质，我比较害怕',
          cmtDate: '2022/12/3',
          like: '96'
        }
      ]
    },
    {
      tId: 2,
      tName: '桂哥',
      tavatar:'',
      tDate: '2019/2/01',
      title: '京都樱花节',
      tLike: 63,
      context: '京都樱花节，如诗如画，令人美不胜收，在这个花的海洋，是否有伊人在旁',
      cmtList: [
        {
          cmtId: 1,
          cmtName: '游明星',
          cavatar:'',
          cmtContext: '我没看见伊人在旁，李泽在旁倒是真的。。。。。。',
          cmtDate: '2019/03/20',
          like: '98'
        },
        {
          cmtId: 2,
          cmtName: '孙达',
          cavatar:'',
          cmtContext: '樱花？我今天发现米饭里面有樱花，伊人是不是被我吃了。。。',
          cmtDate: '2011/04/12',
          like: '105'
        },
        {
          cmtId: 3,
          cmtName: '李泽',
          cavatar:'',
          cmtContext: '樱花有白菜花一样好吃吗？',
          cmtDate: '2022/12/3',
          like: '56'
        }
      ]
    },
    {
      tId: 3,
      tName: '迪迦奥特曼',
      tavatar:'',
      tDate: '2019/12/11',
      title: '那些年的抗日英雄',
      tLike: 43,
      context: '以前的抗日英雄，花式的可爱怪兽，哪个最让人难忘!',
      cmtList: [
        {
          cmtId: 1,
          cmtName: '风',
          cavatar:'',
          cmtContext: '马戈马星人，曾经让雷欧和别的小伙伴打的死去活来',
          cmtDate: '2019/03/20',
          like: '32'
        },
        {
          cmtId: 2,
          cmtName: '巴拉克.奥马马',
          cavatar:'',
          cmtContext: '虽然我贵为总统，但是小时候也看过抗日神剧奥特曼，其中的怪兽们的事迹十分光辉',
          cmtDate: '2011/04/12',
          like: '63'
        }
      ]
    }
  ];
  /*返回话题列表 */
  public static getTopList(): any {
    return this.topList;
  }
  /* 返回话题*/
  public static getTopic(id:Number):any{
    for(let i=0;i<this.topList.length;i++){
      if(id===this.topList[i].tId){
        return this.topList[i];
      }
    }
  }
  /*返回话题关联的评论 */
  public static getComment(id:Number):any{
    let topList=this.topList;
    for(let i=0;i<topList.length;i++){
      for(let j=0;j<topList[i].cmtList.length;j++){
        if(id===topList[i].cmtList[j].cmtId){
          return topList[i].cmtList[j];
        }
      }
    }
  }
}