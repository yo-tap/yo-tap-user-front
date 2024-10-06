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
    align: 'center',
    ta: 'center',
    answerLeft: {
      label: '⬅️興味ある',
      justify: 'center',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#00FF00',
      fz: 18,
      ff: 'notoSansJP',
      fw: 400,
    },
    answerRight: {
      label: '興味ない➡️',
      justify: 'center',
      align: 'center',
      point: 5,
      pointUpEffectBgColor: '#FF0000',
      fz: 18,
      ff: 'notoSansJP',
      fw: 400,
    },
  },
  // {
  //   uniqueKey: 'web3_interest_002',
  //   title: (
  //     <>
  //       Are you interested
  //       <br />
  //       in a survey app utilizing Web3?
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/02.jpg',
  //   bgColor: 'rgba(0,0,0,0.5)',
  //   layout: '2col',
  //   ff: 'shrikhand',
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '興味ある',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_001',
  //   title: (
  //     <>
  //       Web3を活用した
  //       <br />
  //       アンケートアプリに
  //       <br />
  //       興味はありますか？
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/03.jpg',
  //   bgColor: 'rgba(0,0,0,0.6)',
  //   layout: '2col',
  //   ff: 'notoSansJP',
  //   fz: 28,
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '⬅️興味ある',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない➡️',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_002',
  //   title: (
  //     <>
  //       Are you interested
  //       <br />
  //       in a survey app utilizing Web3?
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/04.jpg',
  //   bgColor: 'rgba(0,0,0,0.5)',
  //   layout: '2col',
  //   ff: 'shrikhand',
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '興味ある',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_001',
  //   title: (
  //     <>
  //       Web3を活用した
  //       <br />
  //       アンケートアプリに
  //       <br />
  //       興味はありますか？
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/05.jpg',
  //   bgColor: 'rgba(0,0,0,0.6)',
  //   layout: '2col',
  //   ff: 'notoSansJP',
  //   fz: 28,
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '⬅️興味ある',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない➡️',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_002',
  //   title: (
  //     <>
  //       Are you interested
  //       <br />
  //       in a survey app utilizing Web3?
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/02.jpg',
  //   bgColor: 'rgba(0,0,0,0.5)',
  //   layout: '2col',
  //   ff: 'shrikhand',
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '興味ある',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_001',
  //   title: (
  //     <>
  //       Web3を活用した
  //       <br />
  //       アンケートアプリに
  //       <br />
  //       興味はありますか？
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/01.jpg',
  //   bgColor: 'rgba(0,0,0,0.6)',
  //   layout: '2col',
  //   ff: 'notoSansJP',
  //   fz: 28,
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '⬅️興味ある',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない➡️',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_002',
  //   title: (
  //     <>
  //       Are you interested
  //       <br />
  //       in a survey app utilizing Web3?
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/02.jpg',
  //   bgColor: 'rgba(0,0,0,0.5)',
  //   layout: '2col',
  //   ff: 'shrikhand',
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '興味ある',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_001',
  //   title: (
  //     <>
  //       Web3を活用した
  //       <br />
  //       アンケートアプリに
  //       <br />
  //       興味はありますか？
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/01.jpg',
  //   bgColor: 'rgba(0,0,0,0.6)',
  //   layout: '2col',
  //   ff: 'notoSansJP',
  //   fz: 28,
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '⬅️興味ある',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない➡️',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_002',
  //   title: (
  //     <>
  //       Are you interested
  //       <br />
  //       in a survey app utilizing Web3?
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/02.jpg',
  //   bgColor: 'rgba(0,0,0,0.5)',
  //   layout: '2col',
  //   ff: 'shrikhand',
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '興味ある',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_001',
  //   title: (
  //     <>
  //       Web3を活用した
  //       <br />
  //       アンケートアプリに
  //       <br />
  //       興味はありますか？
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/01.jpg',
  //   bgColor: 'rgba(0,0,0,0.6)',
  //   layout: '2col',
  //   ff: 'notoSansJP',
  //   fz: 28,
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '⬅️興味ある',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない➡️',
  //     justify: 'center',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     fz: 18,
  //     ff: 'notoSansJP',
  //     fw: 400,
  //   },
  // },
  // {
  //   uniqueKey: 'web3_interest_002',
  //   title: (
  //     <>
  //       Are you interested
  //       <br />
  //       in a survey app utilizing Web3?
  //     </>
  //   ),
  //   bgImageUrl: '/assets/images/02.jpg',
  //   bgColor: 'rgba(0,0,0,0.5)',
  //   layout: '2col',
  //   ff: 'shrikhand',
  //   align: 'center',
  //   ta: 'center',
  //   answerLeft: {
  //     label: '興味ある',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#00FF00',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  //   answerRight: {
  //     label: '興味ない',
  //     align: 'center',
  //     point: 5,
  //     pointUpEffectBgColor: '#FF0000',
  //     ff: 'shrikhand',
  //     fw: 400,
  //   },
  // },
]
