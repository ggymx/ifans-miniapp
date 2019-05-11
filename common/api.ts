// tslint:disable max-line-length
import { IDisLikeParams, IGetAnswerListParams, IGetAnswerListResponse, IHomeTopicListParams, IHomeTopicListResponse, ILikeParams, ILikeResponse, IPostDetailParams, IPostsDetailResponse, IUserPageParams, IUserPageResponse, IGetCommetListParams, IGetCommetListResponse, IDisLikeResponse, IGetPostIdByPostIdParams, IGetUserFootPrintResponese, IGetUserFootPrintParams, IUploadParams, IUploadResponese } from "./types/http_msg";

class Api {
  /**
   * 获取首页话题列表
   */
  getHomeTopicList = this.makeApi<IHomeTopicListParams, IHomeTopicListResponse>('GET', '/v1/post/home-list')


  /**
   * 
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
  getFootPrint = this.makeApi<IGetUserFootPrintParams, IGetUserFootPrintResponese>('GET', '/v1/user/footprint')

  /**
   * 用户上传图片
   */
  getUploadToken = this.makeApi<IUploadParams, IUploadResponese>('POST', '/v1/upload/token')

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

  async httpRequest(method: 'GET' | 'POST', path: string, data: object) {
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
    return this.httpRequest('GET', path, data)
  }

  httpPost(path: string, data: object = {}) {
    return this.httpRequest('POST', path, data)
  }

  private makeApi<Q extends object, R>(method: 'GET' | 'POST', path: string): (params: Q) => Promise<R> {
    return (params: Q): Promise<R> => {
      return this.httpRequest(method, path, params).then(res => res.data as R)
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