export type SurveyQuestionEntity = {
  uniqueKey: string // Answerと照合させるためのキー
  title: string // 質問タイトル
  bgImageUrl?: string // 画像
  bgColor: string // 背景色 画像の上に被せる
  layout: '1col' | '2col' // 質問のYES NOの配置
  answerLeft: AnswerLabel // YESのラベルの中身
  answerRight: AnswerLabel // NOのラベルの中身
}

type AnswerLabel = {
  label: string
  align: 'left' | 'right' | 'center'
  point: number
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
