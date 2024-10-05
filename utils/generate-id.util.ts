import { randomBytes } from 'crypto'

// APIでの呼び出しID生成用のキーを生成する関数
export function generateHashId() {
  const buffer = randomBytes(16)

  // URLセーフなbase64エンコーディングにする
  return buffer
    .toString('base64')
    .replace(/\+/g, '-') // '+'を'-'に置き換え
    .replace(/\//g, '_') // '/'を'_'に置き換え
    .replace(/=+$/, '') // 末尾の'='を削除
}
