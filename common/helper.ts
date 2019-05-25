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

export function getImageInfo(src: string): Promise < wx.GetImageInfoSuccessCallbackResult > {
  return new Promise<any>((success, fail) =>
    wx.getImageInfo({ src, success, fail }));
}

/**
 *
 * @param ctx canvas 的ctx
 * @param imgInfo 图像信息，通过 getImageInfo 获取
 * @param dx
 * @param dy
 * @param dw
 * @param dh
 */
export function drawImageCenterCrop(ctx: wx.CanvasContext, imgInfo: wx.GetImageInfoSuccessCallbackResult,
  dx: number, dy: number, dw: number, dh: number) {
    // biger is wider
    const srcRatio = imgInfo.width/imgInfo.height
    const dstRatio = dw/dh
    let sx=0
    let sy=0
    let sw=imgInfo.width
    let sh=imgInfo.height
    if(srcRatio > dstRatio) {
      // source is wider
      sw = sh * dstRatio
      sx = (imgInfo.width - sw)/2
    } else {
      sh = sw / dstRatio
      sy = (imgInfo.height - sh)/2
    }
    (ctx as any).drawImage(imgInfo.path, sx, sy, sw, sh, dx, dy, dw, dh)
}

export function fillTextVerticalCenter(context, text, x, y, maxWidth, lineHeight) {
  // text to words
  const words = []
  let lastWord = ''
  for(let c of text){
    let code = c.charCodeAt(0)
    if(code >127) {
      // 大于 127 的，算中文
      if(lastWord) {
        words.push(lastWord)
      }
      words.push(c)
      lastWord = ''
    } else if(c=== '\t' || c===' ' || c==='\r' || c=== '\n') {
      // 空格/换行，词结束
      if(lastWord) {
        words.push(lastWord)
      }
      lastWord = c
    } else {
      // ascii码，算英文，整个单词一个词
      lastWord += c
    }
  }
  if (lastWord) {
    words.push(lastWord)
  }

  // words to lines
  const lines = []
  let line = ''
  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n];
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      lines.push(line)
      line = words[n];
    } else {
      line = testLine;
    }
  }
  lines.push(line)
  // draw lines
  let lineY = y - (lines.length-1)*lineHeight/2
  for (const line of lines) {
    context.fillText(line, x, lineY, maxWidth);
    lineY+= lineHeight
  }
}

 export function smartDate(option: any){
  return option
 }
