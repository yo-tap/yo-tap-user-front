import { ReactNode } from 'react'

export type SurveyQuestionEntity = {
  uniqueKey: string // Answerと照合させるためのキー
  title: ReactNode // 質問タイトル
  bgImageUrl?: string // 画像
  bgColor: string // 背景色 画像の上に被せる
  c?: string // 質問タイトルの色
  layout: '1col' | '2col' // 質問のYES NOの配置
  answerLeft: AnswerLabel // YESのラベルの中身
  answerRight: AnswerLabel // NOのラベルの中身
  ff?: string // フォント
  fz?: number // フォントサイズ
  fw?: number // フォントウェイト
  lh?: number // 行の高さ
  lts?: number // 文字間
  align?: 'start' | 'end' | 'center' // 質問タイトルの配置
  justify?: 'start' | 'end' | 'center' // 質問タイトルの配置
  ta?: 'left' | 'right' | 'center' // 質問タイトルの配置
}

export type AnswerLabel = {
  label: ReactNode // YES NOのラベル
  point: number // ポイント
  pointUpEffectBgColor?: string // ポイントアップ時のエフェクト
  ff?: string // フォント
  fw?: number // フォントウェイト
  fz?: number // フォントサイズ
  bgColor?: string // 背景色
  c?: string // フォントカラー
  align?: 'start' | 'end' | 'center' // YES NOの配置
  justify?: 'start' | 'end' | 'center' // YES NOの配置
  borderRadius?: number // YES NOの角丸
}
