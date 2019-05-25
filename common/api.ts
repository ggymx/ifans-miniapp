// tslint:disable max-line-length
import { ICreateCommentParams, IDisLikeParams, IDisLikeResponse, IEmptyParams, IGetAnswerListParams, IGetAnswerListResponse, IGetCommetListParams, IGetCommetListResponse, IGetPostIdByPostIdParams, IGetUserFootPrintParams, IGetUserFootPrintResponse, IHomeTopicListParams, IHomeTopicListResponse, ILikeParams, ILikeResponse, INoticeListParams, INoticeListResponse, IPostDetailParams, IPostsDetailResponse, IRemoveCommentParams, IRemoveCommentResponse, IRemovePostParams, IReportFormIdParams, IReportFormIdResponse, IUploadParams, IUploadResponse, IUserPageParams, IUserPageResponse, IUserResponse } from './types/http_msg'
import { IRemovePostResponse } from './types/http_msg';
import { ICreateCommentResponese } from './types/http_msg';
import { IUser } from './types/user';

class Api {

  createComment = this.makeApi<ICreateCommentParams, ICreateCommentResponese>('POST', '/v1/comment/create')

  /**
   * 获取首页话题列表
   */
  getHomeTopicList = this.makeApi<IHomeTopicListParams, IHomeTopicListResponse>('GET', '/v1/post/home-list')

  /**
   * 根据参与id获取参与的列表
   */
  getRefPostList = this.makeApi<IGetAnswerListParams, IGetAnswerListResponse>('GET', '/v1/post/answer-list')

  /**
   * 获取投稿详情
   */
  getPost = this.makeApi<IPostDetailParams, IPostsDetailResponse>('GET', '/v1/post/detail')

  /**
   * 获取用户信息
   */
  getUser = this.makeApi<IUserPageParams, IUserPageResponse>('GET', '/v1/user/detail')

  /**
   * 获取个人信息
   */
  getUserProfile = this.makeApi<IEmptyParams, IUserResponse>('GET', '/v1/user/profile')

  /**
   * 参与话题点赞
   */
  giveLike = this.makeApi<ILikeParams, ILikeResponse>('POST', '/v1/post/like')

  /**
   * 参与话题取消点赞
   */
  disLike = this.makeApi<IDisLikeParams, IDisLikeResponse>('POST', '/v1/post/dislike')

  /**
   * 评论点赞
   */
  giveCommentLike = this.makeApi<ILikeParams, ILikeResponse>('POST', '/v1/comment/like')

  /**
   * 评论取消点赞
   */
  disCommentLike = this.makeApi<IDisLikeParams, IDisLikeResponse>('POST', '/v1/comment/dislike')

  getCommentList = this.makeApi<IGetCommetListParams, IGetCommetListResponse>('GET', '/v1/comment/list')

  /**
   * 用户足迹
   */
  getFootPrint = this.makeApi<IGetUserFootPrintParams, IGetUserFootPrintResponse>('GET', '/v1/user/footprint')

  /**
   * 用户上传图片
   */
  getUploadToken = this.makeApi<IUploadParams, IUploadResponse>('POST', '/v1/upload/token')

  /**
   * 用户通知
   */
  getUserNotice = this.makeApi<INoticeListParams, INoticeListResponse>('GET', '/v1/notice/list')

  /**
   * 删除话题/投稿
   */
  removePost = this.makeApi<IRemovePostParams, IRemovePostResponse>('POST', '/v1/post/remove')

  /**
   * 用户删除评论
   */
  removeComment = this.makeApi<IRemoveCommentParams, IRemoveCommentResponse>('POST', '/v1/comment/remove')

  /**
   * 存储用户的formid
   */
  reportUserFormId = this.makeApi<IReportFormIdParams, IReportFormIdResponse>('POST', '/v1/user/report-form-id')

  user: IUser

  private host: string
  private token: string

  constructor(host: string) {
    this.host = host
    this.token = wx.getStorageSync('token');
  }

  init(host: string) {
    this.host = host
    this.token = wx.getStorageSync('token');
  }

  setToken(token: string) {
    wx.setStorageSync('token', token)
    this.token = token
  }

  /**
   * 为了方便的迁移 wx.requset，修改位 api.request
   */
  request(option: wx.RequestOption): wx.RequestTask {
    if (option.url[0] !== '/') {
      throw new Error('api.request: url 需要以 "/" 开头')
    }
    option.url = this.host + option.url
    option.header = option.header || {}
    const header = this.getHeader()
    for (const h in header) {
      option.header[h] = header[h]
    }
    return wx.request(option)
  }

  requestPromise(method: 'GET' | 'POST', path: string, data: object) {
    return new Promise<wx.RequestSuccessCallbackResult>((resolve, reject) => {
      wx.request({
        method,
        url: this.host + path,
        data,
        header: this.getHeader(),
        success: (res) => {
          resolve(res)
        },
        fail: (res) => {
          reject(res)
        }
      })
    })
  }

  httpGet(path: string, data: object = {}) {
    return this.requestPromise('GET', path, data)
  }

  httpPost(path: string, data: object = {}) {
    return this.requestPromise('POST', path, data)
  }

  async getUserInfo(reload:boolean=false) {
    if(reload || !this.user) {
      const {user} = await this.getUserProfile()
      this.user = user
    }
    return this.user
  }

  private makeApi<Q extends object, R>(method: 'GET' | 'POST', path: string): (params?: Q) => Promise<R> {
    return (params?: Q): Promise<R> => {
      return this.requestPromise(method, path, params).then(res => res.data as R)
    }
  }

  private getHeader(): any {
    if (this.token) {
      return { Authorization: this.token }
    }
    return {}
  }

}
const api = new Api('')

export default api
