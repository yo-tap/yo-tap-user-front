import { Inter, Noto_Sans_JP, Shrikhand } from 'next/font/google'

export const fontShrikhand = Shrikhand({
  weight: ['400'],
  display: 'swap',
  subsets: ['latin'],
})

export const fontNotoSansJp = Noto_Sans_JP({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin'],
})

export const fontInterItalic = Inter({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  style: 'italic',
  subsets: ['latin'],
})

export const fontMap = {
  notoSansJP: fontNotoSansJp,
  shrikhand: fontShrikhand,
}

// stringからfontのクラス名を取得
export const getFontClass = (fontKey: string) => {
  return fontMap[fontKey]?.className || ''
}
