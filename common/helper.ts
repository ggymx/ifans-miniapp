export function isPostPage(page: string) {
  return page.indexOf('publisher/publisher') >= 0 || page.indexOf('topic-detail/topic-detail') >= 0
}

export function smartGotoPage(option: wx.NavigateToOption) {
  const pages = getCurrentPages();
  if (pages.length === 10) {
    wx.redirectTo(option)
  } else {
    wx.navigateTo(option)
  }
}
 export function smartDate(option: any){
  return option
 }

export function wxPromise<T>(fn: (opts: any)=>any, option: any): Promise<T> {
  return new Promise(function(resolve, reject){
    fn.call(wx, {
      ...option,
      success: resolve,
      fail: reject,
    })
  })
}
