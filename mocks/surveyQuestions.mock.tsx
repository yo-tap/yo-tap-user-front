import { SurveyQuestionEntity } from '@/types/SurveyQuestion'

export const surveyQuestionsMock: SurveyQuestionEntity[] = [
  {
    uniqueKey: 'web3_interest_001',
    title: (
      <>
        Web3を活用した
        <br />
        アンケートアプリに
        <br />
        興味はありますか？
      </>
    ),
    bgImageUrl: '/assets/images/01.jpg',
    bgColor: 'rgba(0,0,0,0.6)',
    layout: '2col',
    ff: 'notoSansJP',
    fz: 28,
    answerLeft: {
      label: '⬅️興味ある',
      justify: 'center',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#00FF00', // 緑色のエフェクト
      fz: 18,
    },
    answerRight: {
      label: '興味ない➡️',
      justify: 'center',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#FF0000', // 赤色のエフェクト
      fz: 18,
    },
  },
  {
    uniqueKey: 'web3_interest_001',
    title: (
      <>
        Are you interested
        <br />
        in a survey app utilizing Web3?
      </>
    ),
    bgImageUrl: '/assets/images/02.jpg',
    bgColor: 'rgba(0,0,0,0.5)',
    layout: '2col',
    ff: 'shrikhand',
    answerLeft: {
      label: '興味ある',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#00FF00', // 緑色のエフェクト
    },
    answerRight: {
      label: '興味ない',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#FF0000', // 赤色のエフェクト
    },
  },
  {
    uniqueKey: 'web3_interest_001',
    title: (
      <>
        Are you interested
        <br />
        in a survey app utilizing Web3?
      </>
    ),
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: 'rgba(0,0,0,0.9)',
    layout: '2col',
    ff: 'shrikhand',
    answerLeft: {
      label: '興味ある',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#00FF00', // 緑色のエフェクト
    },
    answerRight: {
      label: '興味ない',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#FF0000', // 赤色のエフェクト
    },
  },

  {
    uniqueKey: 'token_reward_002',
    title:
      'アンケートに答えることでトークンを獲得する仕組みは魅力的だと思いますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#f0f0f0',
    layout: '2col',
    answerLeft: {
      label: 'とても魅力的',
      align: 'start',
      point: 5,
      pointUpEffectBgColor: '#FFD700', // ゴールドのエフェクト
    },
    answerRight: {
      label: 'あまり魅力を感じない',
      align: 'end',
      point: 5,
      pointUpEffectBgColor: '#808080', // グレーのエフェクト
    },
  },
  {
    uniqueKey: 'easy_ui_003',
    title:
      'YoTAPの簡単な操作（スワイプして答える）で報酬を得られる点をどの程度評価しますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#ffffff',
    layout: '1col',
    answerLeft: {
      label: '高く評価する',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#00FF7F', // 春の緑のエフェクト
    },
    answerRight: {
      label: 'あまり評価しない',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#FFA500', // オレンジ色のエフェクト
    },
  },
  {
    uniqueKey: 'realtime_participation_004',
    title:
      '他のユーザーと一緒にリアルタイムでアンケートに参加することに関心はありますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#e0e0e0',
    layout: '2col',
    answerLeft: {
      label: '関心がある',
      align: 'start',
      point: 5,
      pointUpEffectBgColor: '#32CD32', // ライムグリーンのエフェクト
    },
    answerRight: {
      label: '関心がない',
      align: 'end',
      point: 5,
      pointUpEffectBgColor: '#DC143C', // クリムゾンのエフェクト
    },
  },
  {
    uniqueKey: 'point_system_005',
    title:
      'アンケートを回答するためのポイントシステムがある場合、参加する意欲は高まりますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#ffffff',
    layout: '1col',
    answerLeft: {
      label: '高まる',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#1E90FF', // ドジャーブルーのエフェクト
    },
    answerRight: {
      label: 'あまり変わらない',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#696969', // ディムグレーのエフェクト
    },
  },
  {
    uniqueKey: 'knowledge_gain_006',
    title:
      'アンケートの内容に基づいて知識を得ることを目的に参加したいと思いますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#e6e6e6',
    layout: '2col',
    answerLeft: {
      label: 'はい、学びたい',
      align: 'start',
      point: 5,
      pointUpEffectBgColor: '#0000FF', // 青色のエフェクト
    },
    answerRight: {
      label: 'いいえ、特に必要ない',
      align: 'end',
      point: 5,
      pointUpEffectBgColor: '#8B0000', // ダークレッドのエフェクト
    },
  },
  {
    uniqueKey: 'instant_payment_007',
    title:
      'アンケートに関して、報酬の支払いが即時で行われることは重要だと思いますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#d9f2e6',
    layout: '1col',
    answerLeft: {
      label: '重要だと思う',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#00CED1', // ダークターコイズのエフェクト
    },
    answerRight: {
      label: '重要だと思わない',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#A9A9A9', // ダークグレーのエフェクト
    },
  },
  {
    uniqueKey: 'pwa_usage_008',
    title: 'スマートフォンで利用できるPWAとしてYoTAPを使いたいと思いますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#ffffff',
    layout: '2col',
    answerLeft: {
      label: '使いたい',
      align: 'start',
      point: 5,
      pointUpEffectBgColor: '#7FFF00', // チャートリューズのエフェクト
    },
    answerRight: {
      label: '使いたくない',
      align: 'end',
      point: 5,
      pointUpEffectBgColor: '#FF4500', // オレンジレッドのエフェクト
    },
  },
  {
    uniqueKey: 'sns_share_009',
    title:
      'SNSでアンケートをシェアし、他のユーザーの回答を見ることに興味はありますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#f5f5f5',
    layout: '1col',
    answerLeft: {
      label: '興味がある',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#40E0D0', // ターコイズのエフェクト
    },
    answerRight: {
      label: '興味がない',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#B22222', // ファイアブリックのエフェクト
    },
  },
  {
    uniqueKey: 'web3_vision_010',
    title:
      'YoTAPのビジョンである『Web3による民主化された金融と社会貢献』に共感しますか？',
    bgImageUrl: '/assets/images/_sample/q-v2/_sample_q-v2-03.png',
    bgColor: '#ffffff',
    layout: '2col',
    answerLeft: {
      label: '共感する',
      align: 'start',
      point: 5,
      pointUpEffectBgColor: '#ADFF2F', // グリーンイエローのエフェクト
    },
    answerRight: {
      label: 'あまり共感しない',
      align: 'end',
      point: 5,
      pointUpEffectBgColor: '#B0C4DE', // ライトスチールブルーのエフェクト
    },
  },
]
