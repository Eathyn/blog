const frontEnd = {
  implement: [
    'call_apply/',
    'debounce/',
    'throttle/',
    'new_operator/',
    'random_integer/',
    'concurrency_control/',
    'deep_copy/',
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
    {
      text: 'Module',
      collapsible: true,
      prefix: 'module/',
      children: [
        'intro/',
        'export_import/',
        'dynamic_import/',
      ],
    },
    'prototype/',
    'variable/',
    'type_checking/',
    'shallow_and_deep_copy/',
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
    'staging_process/',
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
        'declaration-file',
        'module',
        'tsconfig',
      ],
    },
    'exclude_extract_vs_omit_pick.md',
    'resources',
    'index_signature',
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
    'rendering_engine/',
    'vendor_prefix/',
  ],
  vue: [
    'debounce_throttle_in_vue/',
    {
      text: '基础',
      collapsible: true,
      prefix: 'basic/',
      children: [
        // hard
        'communication_methods/',
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
        'two_way_binding/',
        'two_way_binding_in_component/',
        'props_and_emits/',
        'slot/',
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
    {
      text: 'Release',
      collapsible: true,
      prefix: 'release/',
      children: [
        '3.2/',
        '3.3/',
      ],
    },
  ],
  packageManager: [
    {
      text: 'npm',
      collapsible: true,
      prefix: 'npm/',
      children: [
        'semver/',
      ],
    }
  ],
  bundler: [
    {
      text: 'Webpack',
      collapsible: true,
      prefix: 'webpack/',
      children: [
        'init/',
        'mode/',
        'style/',
        'image/',
        'babel/',
        'access_less_variable/',
      ],
    },
    {
      text: 'Vite',
      collapsible: true,
      prefix: 'vite/',
      children: [
        'css/',
      ],
    }
  ],
  engineering: [
    'browserslist/',
    'bem/',
    'sass/',
    'postcss/',
    'stylelint/',
    'babel/',
    'eslint/',
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
    {
      text: '配置',
      collapsible: true,
      prefix: 'config/',
      children: [
        'app.json.md'
      ],
    },
    'subpackage/',
    {
      text: '性能优化',
      collapsible: true,
      prefix: 'performance/',
      children: [
        'start',
      ],
    },
    'template/',
  ],
  uniapp: [
    'note/',
    'problem/',
  ]
}

export default frontEnd
