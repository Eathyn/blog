const frontEnd = {
  implement: [
    'call_apply/',
    'debounce/',
    'throttle/',
    'new_operator/',
    'random_integer/',
    'concurrency_control/',
  ],
  javascript: [
    'function/closure/',
    'function/this_keyword/',
    'function/arrow_function/',
    'function/losing_this/',
    'function/lexical_environment/',
    'function/rest_parameters_and_spread_syntax/',
    'for_loop_comparison/',
    'set_weakset/',
    'map_weakmap/',
  ],
  css: [
    'selectors/',
    'specificity/',
    'units/',
    'box_model/',
    'box_types/',
    'centering/',
    'layout/multi_col_layout/',
    'layout/positioning/',
    'layout/flexbox/',
    'margin/',
    'bfc/',
    'decrease_font_size/',
    'text_overflow/',
    'hide_element/',
    'shape/',
    'repaint_reflow/',
    'transform/',
    'transition/',
    'animation/',
  ],
  html: [
    'defer_vs_async/',
    'preload_prefetch/',
    'form/submit_event.md',
  ],
  typescript: [
    {
      text: 'Syntax',
      collapsible: true,
      prefix: 'syntax/',
      children: [
        'init',
        'operator',
        'types',
        'type-assertion',
        'type-inference',
        'type-compatibility',
        'type-alias',
        'combining-types',
        'narrowing',
        'function',
        'interface',
        'class',
        'generics',
        'utility-types',
        'advanced-types',
      ],
    },
    'exclude_extract_vs_omit_pick.md',
    {
      text: 'Book: Learning TypeScript',
      collapsible: true,
      prefix: 'book-learning_typescript/',
      children: [
        'README.md',
        'chapter_01.md',
        'chapter_02.md',
        'chapter_03.md',
        'chapter_04.md',
        'chapter_05.md',
        'chapter_06.md',
        'chapter_07.md',
        'chapter_08.md',
        'chapter_09.md',
        'chapter_10.md',
        'chapter_11.md',
        'chapter_13.md',
      ],
    },
    {
      text: 'Course: TypeScript Basic',
      collapsible: true,
      prefix: 'course-ts_basic/',
      children: [
        'README.md',
        '69/',
        '70/',
        '71/',
        '72/',
        '73/',
        '74/',
        '75/',
      ],
    },
  ],
  browser: [
    'event_loop/',
    'set-interval_problem/',
    'load/',
    {
      text: 'Event',
      collapsible: true,
      prefix: 'event/',
      children: [
        'basic/',
        'capture_and_bubble/',
        'delegation/',
      ],
    },
    {
      text: 'Scroll',
      collapsible: true,
      prefix: 'scroll/',
      children: [
        'basic',
        'detect_reach_bottom',
        'skills',
      ],
    },
    'storage/',
  ],
  vue: [
    {
      text: '基础',
      collapsible: true,
      prefix: 'basic/',
      children: [
        // hard
        'communication_methods/',
        'debounce_throttle_in_vue/',
        'lifecycle_hooks/',
        'custom_directive/',
        'plugin/',
        'composables/',
        'key/',
        'next_tick/',
        'dynamically_add_prop/',
        'mixins/',
        'mvvm/',
        'observable/',
        'reactivity_fundamentals/',
        'spa_mpa/',
        'two_way_binding/',

        // easy
        'directive_composition/',
        'typescript/overview/',
        'typescript/ts_with_composition_api/',
        'watchers/',
        'list_rendering/',
        'computed_properties/',
        'provide_inject/',
        'conditional_rendering/',
        'data_option/',
        'event_handling/',
        'keep-alive/',
        'form_input_bindings/',
      ],
    },
    {
      text: '原理',
      collapsible: true,
      prefix: 'principle/',
      children: [
        'render_mechanism/',
        'vue.js设计与实现/01-权衡的艺术.md',
        'vue.js设计与实现/02-框架设计的核心要素.md',
        'vue.js设计与实现/03-Vue.js3的设计思路.md',
        'vue.js设计与实现/04-响应系统的作用与实现.md',
      ],
    },
  ],
  miniProgram: [
    'navigation/',
    'component_communication/',
    'lifecycle_hooks/',
    'wxs/',
    {
      text: 'Event',
      collapsible: true,
      prefix: 'event/',
      children: [
        'dataset_and_detail',
        'bind_handler',
        'prevent_bubble',
        'mut_bind',
      ],
    },
    'observer/',
    'skills/',
    'pure_data/',
    'behaviors/',
    'subpackage/',
    {
      text: '配置',
      collapsible: true,
      prefix: 'config/',
      children: [
        'app.json.md'
      ],
    },
  ],
  uniapp: [
    'note/',
    'problem/',
  ]
}

export default frontEnd
