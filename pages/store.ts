//公共代码封装
import api from '../common/api';
import { isPostPage, smartGotoPage } from '../common/helper';

/**
 * 模拟全局状态管理
 */
class Store {
   //存储状态
   //是否查看过消息通知
  private browserNew: boolean=false;
  /**
   * 获取浏览消息通知的状态
   */
  public getBrowserNew(): boolean{
    return this.browserNew;
  }
  /**
   * 设置浏览消息通知的状态
   * @param status 设置状态
   */
  public setBrowserNew(status: boolean){
    this.browserNew=status;
  }
}
const store = new Store();
export default store
