function getAssetUrl(url) {
  // 参数一： 相对路径； 参数二：当前文件的路径
  return new URL(url, import.meta.url).href
}

export default getAssetUrl