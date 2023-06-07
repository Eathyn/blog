const english = {
  speaking: [
    {
      text: '音标',
      collapsible: true,
      children: [
        '音标-英语兔/',
      ],
    },
    {
      text: '语音语调',
      collapsible: true,
      children: [
        '语音-英语兔/',
        '节奏和语调-Lisa/',
        '美国人如何发音-Lisa/',
      ],
    },
  ],
  reading: [
    {
      text: '语法',
      prefix: 'grammar/',
      collapsible: true,
      children: [
        'basic-sentence-patterns',
        'sentence-components',
        'parts-of-speech',
        {
          text: '时态',
          prefix: 'tense-and-aspect/',
          collapsible: true,
          children: [
            'intro',
            'simple-present-tense',
            'simple-past-tense',
            'simple-future-tense',
            'present-continuous-tense',
          ],
        },
      ],
    },
  ],
}

export default english
