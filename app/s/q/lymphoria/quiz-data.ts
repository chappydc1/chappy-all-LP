const HF = 'https://assets.prd.heyflow.com/flows/Vmrd8d5kQP6wAizRtqEY/www/assets'
const MC = 'https://files.manuscdn.com/user_upload_by_module/session_file/310419663030050146'

export type ImageOption = { label: string; imageUrl: string; value?: string }
export type EmojiOption = { label: string; emoji: string; value?: string }
export type LoadingItem = { label: string; iconUrl: string }

export type QuizStep =
  | {
      id: string
      type: 'image-single'
      progress: number
      question: string
      subtitle?: string
      options: ImageOption[]
    }
  | {
      id: string
      type: 'image-multi'
      progress: number
      question: string
      subtitle?: string
      options: ImageOption[]
      continueLabel: string
    }
  | {
      id: string
      type: 'emoji-single'
      progress: number
      question: string
      subtitle?: string
      options: EmojiOption[]
    }
  | {
      id: string
      type: 'interstitial'
      progress: number
      bodyTemplate: string
      continueLabel: string
    }
  | {
      id: string
      type: 'info'
      progress: number
      imageUrl?: string
      imageAlt?: string
      title?: string
      body: string
      continueLabel: string
    }
  | {
      id: string
      type: 'social-proof'
      progress: number
      heading: string
      imageUrl: string
      continueLabel: string
    }
  | {
      id: string
      type: 'loading'
      progress: number
      title: string
      items: LoadingItem[]
    }
  | {
      id: string
      type: 'results'
      progress: number
      congestionPercent: number
      areasAffected: string[]
      bodyDiagramUrl: string
      duration: string
      daysWithSupport: number
      ctaLabel: string
    }

export const genderStep: QuizStep = {
  id: 'gender',
  type: 'image-single',
  progress: 8,
  question: "What's your gender?",
  subtitle: 'Selecting an option will navigate to the next step.',
  options: [
    { label: 'Male', imageUrl: `${HF}/6e23cd10-2e85-4bd2-9b69-723398dd3c6a/original.png`, value: 'male' },
    { label: 'Female', imageUrl: `${HF}/7f760ce8-efe0-4f2b-9efa-7157ba0fb1a7/original.png`, value: 'female' },
  ],
}

export const maleSteps: QuizStep[] = [
  {
    id: 'age',
    type: 'image-single',
    progress: 17,
    question: 'HOW OLD ARE YOU?',
    options: [
      { label: 'Age 20-39', imageUrl: `${HF}/d507817c-3ba6-4511-bda4-5055c149d8ab/original.png` },
      { label: 'Age 40-49', imageUrl: `${HF}/af99a97e-7aec-4619-9ac8-b773acb304b7/original.png` },
      { label: 'Age 50-59', imageUrl: `${HF}/f4bba079-da7b-4596-a180-9ed31664ec14/original.png` },
      { label: 'Age 60+', imageUrl: `${HF}/b7c374cc-9cc7-4634-8aa6-5cc050041aad/original.png` },
    ],
  },
  {
    id: 'struggle',
    type: 'emoji-single',
    progress: 25,
    question: 'Which of these do you struggle with most?',
    options: [
      { label: 'Brain fog', emoji: '🧠' },
      { label: 'Constant fatigue', emoji: '😵‍💫' },
      { label: 'Heavy, sluggish body', emoji: '🐌' },
      { label: 'Low energy', emoji: '🪫' },
    ],
  },
  {
    id: 'interstitial',
    type: 'interstitial',
    progress: 33,
    bodyTemplate:
      "The {struggle} you're experiencing isn't just stress or getting older\n\nit's often a signal that a deeper problem in your body's drainage system needs attention.",
    continueLabel: 'Continue',
  },
  {
    id: 'body-changes',
    type: 'image-multi',
    progress: 42,
    question: 'Did you notice any of these changes in your body recently?',
    options: [
      { label: 'Chest getting softer', imageUrl: `${HF}/0efd1c78-eaca-45cc-b8e6-31a14dfa2840/original.png` },
      { label: "Gut that won't flatten", imageUrl: `${HF}/92f64548-ca79-4836-b348-401302ce65de/original.png` },
      { label: 'Double chin / lost jawline', imageUrl: `${HF}/39f4e550-95c8-4fef-9c82-e199aaf6ef8a/original.png` },
      { label: 'Puffy or round face', imageUrl: `${HF}/2fc26a42-21c7-45b1-9ba5-74ee406b38fe/original.png` },
      { label: "Love handles that don't respond to exercise", imageUrl: `${HF}/1c2ca1cf-7a2f-45f8-839d-6364815e13df/original.png` },
      { label: 'Swollen lower legs or ankles', imageUrl: `${HF}/c883c165-1894-47be-94cf-f2fc96c9ec83/original.png` },
    ],
    continueLabel: 'Continue',
  },
  {
    id: 'healthy-weight',
    type: 'image-multi',
    progress: 50,
    question: 'Do you notice any of these even at a healthy weight',
    options: [
      { label: 'Puffy chest', imageUrl: `${HF}/388123dd-3055-40bc-a69a-e9f046e5448a/original.png` },
      { label: 'Stubborn double chin', imageUrl: `${HF}/12f7993e-b745-4f6f-8b60-8b6f782d4df4/original.png` },
      { label: 'Stubborn gut', imageUrl: `${HF}/63d6d5be-783a-4505-8325-d9d8ef5c06e6/original.png` },
      { label: 'Love handles', imageUrl: `${HF}/dc82ac38-6f07-48b0-981d-9a0f08812448/original.png` },
      { label: 'Round, swollen face', imageUrl: `${HF}/fc1e4504-8235-4536-8473-61ac3fdae82d/original.png` },
    ],
    continueLabel: 'Continue',
  },
  {
    id: 'did-you-know',
    type: 'info',
    progress: 58,
    imageUrl: `${MC}/cXjfEOfGRCRnFUBf.png`,
    imageAlt: 'Man experiencing fatigue',
    title: 'Did you know?',
    body: "These symptoms persist even at a healthy weight because they're not caused by body fat.\n\nWhat you're seeing is actually **fluid that's been building up in your tissue.** And it won't respond to dieting or exercise.",
    continueLabel: 'Continue',
  },
  {
    id: 'social-proof',
    type: 'social-proof',
    progress: 67,
    heading: 'Join over 100,000+ men who have finally found answers',
    imageUrl: `${HF}/29b20abd-4010-46f2-a4f9-a9bada00b044/original.png`,
    continueLabel: 'Continue',
  },
  {
    id: 'lymphatic-question',
    type: 'emoji-single',
    progress: 75,
    question: 'Have you ever heard of the lymphatic system?',
    options: [
      { label: 'Yes', emoji: '✅' },
      { label: 'No', emoji: '❌' },
    ],
  },
  {
    id: 'lymphatic-education',
    type: 'info',
    progress: 83,
    imageUrl: `${MC}/xLnoONrGafEctrKk.png`,
    imageAlt: 'Human lymphatic drainage system infographic',
    title: "Most people haven't. Here's what you need to know.",
    body: "Your body has a **drainage system** that runs through your entire body — your face, neck, belly, legs, arms. Its job is to **flush out waste and excess fluid.**\n\nBut unlike your heart, **it has no pump.** It depends on movement and hydration to keep flowing.\n\nWhen it slows down, waste and fluid build up in your tissue. That's what causes **the puffiness, the bloating, the heaviness, and the fog.**",
    continueLabel: 'See your path to clear',
  },
  {
    id: 'timeline',
    type: 'info',
    progress: 92,
    title: "Here's what to expect as your drainage system clears:",
    body: "**Week 1**\nThe brain fog clears and your energy comes back fast. That constant sluggish, drained feeling starts to lift. You wake up sharper and lighter than you have in years.\n\n**Month 1–2**\nYour chest starts flattening out. The gut pulls in. Your face looks leaner and more defined. You start looking like the guy you remember.\n\n**Month 2–3**\nThe full transformation settles in. Body composition tightens up. Energy stays consistent. You look in the mirror and actually recognize yourself again.",
    continueLabel: 'Continue',
  },
  {
    id: 'analysis',
    type: 'loading',
    progress: 96,
    title: 'ANALYSIS',
    items: [
      { label: 'Reviewing your symptoms...', iconUrl: `${HF}/7bd9b78f-ac65-4fe6-a3aa-8e30f933ce10.svg` },
      { label: 'Measuring congestion indicators...', iconUrl: `${HF}/7a9b623a-ffd3-4886-9784-1c345422fb44.svg` },
      { label: 'Building your personal report...', iconUrl: `${HF}/5340b3fc-16a9-4c31-8d70-c052b2ead1ee.svg` },
    ],
  },
  {
    id: 'results',
    type: 'results',
    progress: 100,
    congestionPercent: 78,
    areasAffected: ['Face', 'Arms', 'Belly', 'Legs'],
    bodyDiagramUrl: `${MC}/cYeebafcOmYbkOcQ.png`,
    duration: '3+ years of buildup',
    daysWithSupport: 21,
    ctaLabel: 'See my recommendation',
  },
]

export const femaleSteps: QuizStep[] = [
  {
    id: 'age',
    type: 'image-single',
    progress: 17,
    question: 'HOW OLD ARE YOU?',
    options: [
      { label: 'Age 20-39', imageUrl: `${HF}/af6aec74-962a-4155-aedc-a8de35432fc9/original.png` },
      { label: 'Age 40-49', imageUrl: `${HF}/474d4be8-b0a0-47d3-9544-de0b267b062a/original.png` },
      { label: 'Age 50-59', imageUrl: `${HF}/9b4cf83d-143c-4ecb-8778-7c7cb64583cc/original.png` },
      { label: 'Age 60+', imageUrl: `${HF}/b079a8e3-cad8-4c0f-970f-47067a0fbd59/original.png` },
    ],
  },
  {
    id: 'struggle',
    type: 'emoji-single',
    progress: 25,
    question: 'Which of these do you struggle with most?',
    options: [
      { label: 'Brain fog', emoji: '🧠' },
      { label: 'Constant fatigue', emoji: '😵‍💫' },
      { label: 'Heavy, sluggish body', emoji: '🐌' },
      { label: 'Low energy', emoji: '🪫' },
    ],
  },
  {
    id: 'interstitial',
    type: 'interstitial',
    progress: 33,
    bodyTemplate:
      "The {struggle} you're experiencing isn't just stress or getting older\n\nit's often a signal that a deeper problem in your body's drainage system needs attention.",
    continueLabel: 'Continue',
  },
  {
    id: 'body-changes',
    type: 'image-multi',
    progress: 42,
    question: 'Did you notice any of these changes in your body recently?',
    options: [
      { label: 'Puffy face or under-eye bags', imageUrl: `${HF}/67c3abb2-3109-416b-b5dc-f42856817fea/original.png` },
      { label: "Belly bloat that won't go away", imageUrl: `${HF}/a796e7ab-a762-4a54-93e1-4a8ae570375b/original.png` },
      { label: 'Swollen or heavy legs', imageUrl: `${HF}/81fea3b8-387b-42a8-9860-c60019d7cceb/original.png` },
      { label: 'dimpled thighs', imageUrl: `${HF}/04e0975d-8981-41ba-a45c-f3a673848edf/original.png` },
      { label: 'Puffy armpits', imageUrl: `${HF}/21043f3f-7397-46de-94aa-36448240659f/original.png` },
    ],
    continueLabel: 'Continue',
  },
  {
    id: 'healthy-weight',
    type: 'image-multi',
    progress: 50,
    question: 'Do you notice any of these even at a healthy weight',
    options: [
      { label: 'Stubborn double chin', imageUrl: `${HF}/57a9cbec-4d90-46e1-bd3d-499e3b5b541a/original.png` },
      { label: 'Thick or puffy arms', imageUrl: `${HF}/5e26cf43-1c75-40f5-9347-67e5770a8d4a/original.png` },
      { label: 'Heavy legs', imageUrl: `${HF}/7660d252-7b1c-4313-a1b0-131001189e77/original.png` },
      { label: 'Thigh & butt Dimples', imageUrl: `${HF}/bda0e83e-4fa2-4a80-a9a2-ffc497893374/original.png` },
      { label: 'Lower belly pooch', imageUrl: `${HF}/fa00a7c6-4c84-4073-aa68-b4f6918788c6/original.png` },
      { label: 'Puffy armpits', imageUrl: `${HF}/82d4d560-2b90-4158-ac88-b05c4ff8a4e7/original.png` },
    ],
    continueLabel: 'Continue',
  },
  {
    id: 'did-you-know',
    type: 'info',
    progress: 58,
    imageUrl: `${MC}/zLbFZxPujYgfLVIn.png`,
    imageAlt: 'Woman experiencing fatigue',
    title: 'Did you know?',
    body: "These symptoms persist even at a healthy weight because they're not caused by body fat.\n\nWhat you're seeing is actually **fluid that's been building up in your tissue.** And it won't respond to dieting or exercise.",
    continueLabel: 'Continue',
  },
  {
    id: 'social-proof',
    type: 'social-proof',
    progress: 67,
    heading: 'Join over 100,000+ women who have finally found answers',
    imageUrl: `${HF}/88e55598-29e3-405f-a337-034b0c4d9156/original.png`,
    continueLabel: 'Continue',
  },
  {
    id: 'lymphatic-question',
    type: 'emoji-single',
    progress: 75,
    question: 'Have you ever heard of the lymphatic system?',
    options: [
      { label: 'Yes', emoji: '✅' },
      { label: 'No', emoji: '❌' },
    ],
  },
  {
    id: 'lymphatic-education',
    type: 'info',
    progress: 83,
    imageUrl: `${MC}/xLnoONrGafEctrKk.png`,
    imageAlt: 'Human lymphatic drainage system infographic',
    title: "Most people haven't. Here's what you need to know.",
    body: "Your body has a **drainage system** that runs through your entire body — your face, neck, belly, legs, arms. Its job is to **flush out waste and excess fluid.**\n\nBut unlike your heart, **it has no pump.** It depends on movement and hydration to keep flowing.\n\nWhen it slows down, waste and fluid build up in your tissue. That's what causes **the puffiness, the bloating, the heaviness, and the fog.**",
    continueLabel: 'See your path to clear',
  },
  {
    id: 'timeline',
    type: 'info',
    progress: 92,
    title: "Here's what to expect as your drainage system clears:",
    body: "**Week 1**\nThe brain fog lifts and your energy comes back. That heavy, sluggish feeling starts fading. You wake up and your face actually looks like your face again.\n\n**Month 1–2**\nYour jawline sharpens and the belly bloat eases. Legs feel lighter, ankles look slimmer. You start reaching for clothes you haven't worn in months.\n\n**Month 2–3**\nThe stubborn areas — thighs, arms, chin — keep clearing. You stop avoiding mirrors. You feel like yourself again. She's back.",
    continueLabel: 'Continue',
  },
  {
    id: 'analysis',
    type: 'loading',
    progress: 96,
    title: 'ANALYSIS',
    items: [
      { label: 'Reviewing your symptoms...', iconUrl: `${HF}/7bd9b78f-ac65-4fe6-a3aa-8e30f933ce10.svg` },
      { label: 'Measuring congestion indicators...', iconUrl: `${HF}/7a9b623a-ffd3-4886-9784-1c345422fb44.svg` },
      { label: 'Building your personal report...', iconUrl: `${HF}/5340b3fc-16a9-4c31-8d70-c052b2ead1ee.svg` },
    ],
  },
  {
    id: 'results',
    type: 'results',
    progress: 100,
    congestionPercent: 78,
    areasAffected: ['Face', 'Arms', 'Belly', 'Legs'],
    bodyDiagramUrl: `${MC}/VjiXzFcnSoCagCzO.png`,
    duration: '3+ years of buildup',
    daysWithSupport: 21,
    ctaLabel: 'See my recommendation',
  },
]
