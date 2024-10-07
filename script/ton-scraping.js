// 名前をXPathで取得する
const nameXPath =
  "//div[contains(@class, 'title') and contains(@class, 'text-h3-semibold')]/text()"
const nameSnapshot = document.evaluate(
  nameXPath,
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
)

// 名前が見つかったら処理する
let fileNameBase = 'default_name'
if (nameSnapshot.snapshotLength > 0) {
  const nameNode = nameSnapshot.snapshotItem(0)
  if (nameNode) {
    const name = nameNode.textContent.trim()
    // 名前を小文字でアンダーバーで連結した形式にする
    fileNameBase = name.toLowerCase().replace(/\s+/g, '_')
  }
}

console.log(fileNameBase) // 例: rocky_rabbit

// XPathを使って画像要素を選択
const xpath = "//div[contains(@class, 'swiper-slide')]//img"
const snapshot = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null
)

// 画像URLをリストに追加
const imageUrls = []
for (let i = 0; i < snapshot.snapshotLength; i++) {
  const imgElement = snapshot.snapshotItem(i)
  if (imgElement && imgElement.src) {
    imageUrls.push(imgElement.src)
  }
}

// 画像URLをコンソールに表示
console.log(imageUrls)

// 画像をダウンロードする
imageUrls.forEach((url, index) => {
  const link = document.createElement('a')
  link.href = url
  link.download = `_sample_picture_${fileNameBase}_image_${index + 1}.png` // 取得した名前を使ってファイル名を作成
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
})
