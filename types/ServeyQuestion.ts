export type ServeyQuestion = {
  uniqueKey: string
  title: string
  bgImageUrl: string
  bgColor: string
  layout: '1col' | '2col'
  answerLeft: Answer
  answerRight: Answer
}

type Answer = {
  label: string
  align: 'left' | 'right' | 'center'
}

// - 質問タイトル
// - 画像
// - 背景色
// - 質問レイアウト
//   - 2段
// - 質問回答A
//   - 文字
// - 質問回答B
//   - 文字
