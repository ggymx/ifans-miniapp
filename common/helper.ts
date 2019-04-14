export function isPostPage(page: string) {
  return page.indexOf('publisher/publisher') >= 0 || page.indexOf('topic-detail/topic-detail') >= 0
}

export function smartGotoPage(option: wx.NavigateToOption) {
  const pages = getCurrentPages()
  if (pages.length === 10) {
    wx.redirectTo(option)
  } else {
    wx.navigateTo(option)
  }
}
