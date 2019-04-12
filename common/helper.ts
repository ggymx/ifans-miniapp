export function isPostPage(page: string) {
  return page.indexOf('publisher/publisher') >= 0 || page.indexOf('topic-detail/topic-detail') >= 0
}

export function smartGotoPage(option: wx.NavigateToOption) {
  const pages = getCurrentPages()
  // 页面栈已满，或，上三页、目标页 都是话题或投稿类型
  if (pages.length === 10 || (pages.length >= 3 &&
    isPostPage(pages[pages.length - 1].route) &&
    isPostPage(pages[pages.length - 2].route) &&
    isPostPage(pages[pages.length - 3].route) &&
    isPostPage(option.url))) {
    wx.redirectTo(option)
  } else {
    wx.navigateTo(option)
  }
}
