// 打开新页面
function openWindow(url: string): void {
  const w: Window | null = window.open("about:blank");
  if (w) {
    w.opener = null;
    w.location.href = url;
  }
  return;
}

// 移动端检测
function isMobile(): boolean {
  const userAgent: string = navigator.userAgent.toUpperCase();
  if (/IPHONE|IPOD/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return true;
  } else if (/ANDROID/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return true;
  } else if (/IPAD/.test(userAgent) && /MOBILE/.test(userAgent)) {
    return false;
  } else {
    return false;
  }
}

// 从 url 获取 domain
function getDomain(url: string): string {
  return (new URL(url)).hostname;
}

// 复制文本
async function setClipBoardText(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}


export {openWindow, isMobile, setClipBoardText, getDomain};
