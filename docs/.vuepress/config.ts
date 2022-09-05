import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
// import { localTheme } from './index'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Eathyn\'s Blog',
  description: 'Learning Vuepress',
  base: '/blog/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/images/avatar.jpg',
      },
    ],
  ],
  markdown: {
    code: {
      lineNumbers: false,
    }
  },
  theme: defaultTheme({
    colorMode: 'dark',
    colorModeSwitch: true,
    // logo: '/images/cat-1.png',
    // logoDark: '/images/cat-2.png',
    repo: 'https://github.com/Eathyn',
    sidebarDepth: 4,
    editLink: false,
    lastUpdated: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Front End',
        children: [
          {
            text: 'CSS',
            link: '/front_end/css/box_model/index.md',
          },
          {
            text: 'JavaScript',
            link: '/front_end/javascript/apis/index.md',
          },
          {
            text: 'Browser',
            link: '/front_end/browser/events/basics/index.md',
          },
          {
            text: 'Vue',
            link: '/front_end/vue/guide/introduction/index.md',
          },
          {
            text: 'Vue Router',
            link: '/front_end/vue_router/getting_started/index.md',
          },
          {
            text: 'Vuex',
            link: '/front_end/vuex/what_is_vuex/index.md',
          },
          {
            text: 'TypeScript',
            link: '/front_end/typescript/learning_typescript/chapter_01.md',
          },
          {
            text: 'Mini Program',
            link: '/front_end/mini_program/navigation/index.md',
          },
          {
            text: 'Attention',
            link: '/front_end/attention/config_project/index.md',
          },
        ],
      },
      {
        text: 'Back End',
        children: [
          {
            text: 'Node.js',
            link: '/back_end/node/npm/lock_node_version/index.md',
          },
        ]
      },
      {
        text: 'Computer Science',
        children: [
          {
            text: 'C Language',
            link: '/cs/c_language/a_modern_approach/10/index.md',
          },
        ],
      },
      {
        text: 'Language',
        children: [
          {
            text: 'English',
            link: '/language/english/illustration_of_grammar/01_主语和动词.md',
          },
        ]
      },
      {
        text: 'Project',
        children: [],
      },
      {
        text: 'Interview',
        children: [
          {
            text: 'CSS',
            link: '/',
          },
          {
            text: 'JavaScript',
            link: '/',
          },
          {
            text: 'Browser',
            link: '/',
          },
          {
            text: 'Vue',
            link: '/interview/vue/mvvm/index.md',
          },
          {
            text: 'Vue Router',
            link: '/interview/vue_router/how_to_redirect/index.md'
          },
          {
            text: 'Network',
            link: '/',
          },
          {
            text: 'Mini Program',
            link: '/',
          },
        ],
      },
    ],
    sidebar: {
      '/front_end/css': [
        {
          text: 'CSS',
          link: '/front_end/css',
          children: [
            '/front_end/css/box_model/index.md',
            '/front_end/css/box_types/index.md',
            '/front_end/css/margin/index.md',
            '/front_end/css/selectors/index.md',
            '/front_end/css/specificity/index.md',
            '/front_end/css/units/index.md',
            '/front_end/css/positioning/index.md',
            '/front_end/css/layout/common_layouts/index.md',
            '/front_end/css/layout/flexbox/index.md',
            '/front_end/css/centering/index.md',
            '/front_end/css/transition/index.md',
            '/front_end/css/transform/index.md',
            '/front_end/css/animation/index.md',
            '/front_end/css/bfc/index.md',
            '/front_end/css/repaint_reflow/index.md',
            '/front_end/css/decrease_font_size/index.md',
            '/front_end/css/hide_element/index.md',
            '/front_end/css/shape/index.md',
            '/front_end/css/text_overflow/index.md',
          ],
        },
      ],
      '/front_end/javascript': [
        {
          text: 'JavaScript',
          link: '/front_end/javascript',
          children: [
            '/front_end/javascript/asynchronous/index.md',
            '/front_end/javascript/class/index.md',
            '/front_end/javascript/apis/index.md',
            '/front_end/javascript/array_like_object/index.md',
            '/front_end/javascript/variable/store/index.md',
            '/front_end/javascript/scope/index.md',
            '/front_end/javascript/var_let_const/index.md',
            '/front_end/javascript/shallow_and_deep_copy/index.md',
            '/front_end/javascript/data_types/index.md',
            '/front_end/javascript/defer_vs_async/index.md',
            '/front_end/javascript/for-in_vs_for-of_vs_for-await-of/index.md',
            '/front_end/javascript/function/lexical_environment/index.md',
            '/front_end/javascript/function/this/index.md',
            '/front_end/javascript/function/call_apply_bind/index.md',
            '/front_end/javascript/function/arrow_function/index.md',
            '/front_end/javascript/function/implement_new/index.md',
            '/front_end/javascript/function/rest_parameters/index.md',
            '/front_end/javascript/function/spread_syntax/index.md',
            '/front_end/javascript/module/intro/index.md',
            '/front_end/javascript/module/export_import/index.md',
            '/front_end/javascript/module/dynamic_import/index.md',
            '/front_end/javascript/map_set/set_weakset/index.md',
            '/front_end/javascript/map_set/map_weakmap/index.md',
            '/front_end/javascript/axios/index.md',
            '/front_end/javascript/xml_http_request/index.md',
            '/front_end/javascript/not_a_number/index.md',
            '/front_end/javascript/preload_prefetch/index.md',
            '/front_end/javascript/prototype/index.md',
            '/front_end/javascript/proxy/index.md',
            '/front_end/javascript/tricks/index.md',
            '/front_end/javascript/type_checking/index.md',
          ],
        },
      ],
      '/front_end/browser': [
        {
          text: 'Browser',
          link: '/front_end/browser',
          children: [
            '/front_end/browser/events/basics/index.md',
            '/front_end/browser/events/capture_and_bubble/index.md',
            '/front_end/browser/events/delegation/index.md',
          ],
        }
      ],
      '/front_end/vue': [
        {
          text: 'Vue Guide',
          link: '/front_end/vue/guide',
          children: [
            '/front_end/vue/guide/introduction/index.md',
            '/front_end/vue/guide/create_application/index.md',
            '/front_end/vue/guide/template_syntax/index.md',
            '/front_end/vue/guide/reactivity_fundamentals/index.md',
          ],
        },
        {
          text: 'Vue API',
          link: '/front_end/vue/api',
          children: [],
        },
      ],
      '/front_end/vue_router': [
        {
          text: 'Vue Router',
          link: '/front_end/vue_router',
          children: [
            '/front_end/vue_router/getting_started/index.md',
            '/front_end/vue_router/dynamic_route_matching/index.md',
            '/front_end/vue_router/route\'s_matching_syntax/index.md',
            '/front_end/vue_router/nested_routes/index.md',
            '/front_end/vue_router/programmatic_navigation/index.md',
            '/front_end/vue_router/named_routes/index.md',
            '/front_end/vue_router/named_views/index.md',
            '/front_end/vue_router/redirect_and_alias/index.md',
            '/front_end/vue_router/passing_props_to_route_components/index.md',
            '/front_end/vue_router/different_history_modes/index.md',
            '/front_end/vue_router/navigation_guards/index.md',
            '/front_end/vue_router/route_meta_fields/index.md',
            '/front_end/vue_router/data_fetching/index.md',
            '/front_end/vue_router/composition_api/index.md',
            '/front_end/vue_router/scroll_behavior/index.md',
            '/front_end/vue_router/lazy_loading_routes/index.md',
            '/front_end/vue_router/dynamic_routing/index.md',
          ],
        },
      ],
      '/front_end/vuex': [
        {
          text: 'Vuex',
          link: '/front_end/vuex',
          children: [
            '/front_end/vuex/what_is_vuex/index.md',
            '/front_end/vuex/getting_started/index.md',
            '/front_end/vuex/modules/index.md',
          ],
        },
      ],
      '/front_end/typescript': [
        {
          text: 'Learning TypeScript',
          link: '/front_end/typescript/learning_typescript',
          children: [
            '/front_end/typescript/learning_typescript/chapter_01.md',
            '/front_end/typescript/learning_typescript/chapter_02.md',
            '/front_end/typescript/learning_typescript/chapter_03.md',
            '/front_end/typescript/learning_typescript/chapter_04.md',
            '/front_end/typescript/learning_typescript/chapter_05.md',
            '/front_end/typescript/learning_typescript/chapter_06.md',
            '/front_end/typescript/learning_typescript/chapter_07.md',
            '/front_end/typescript/learning_typescript/chapter_08.md',
          ],
        },
        {
          text: 'TypeScript Handbook',
          link: '/front_end/typescript/typescript_handbook',
          children: [

          ],
        },
      ],
      '/front_end/mini_program': [
        {
          text: 'Mini Program',
          children: [
            '/front_end/mini_program/navigation/index.md',
            '/front_end/mini_program/component_communication/index.md',
            '/front_end/mini_program/lifecycle_hooks/index.md',
            '/front_end/mini_program/event/bind_handler/index.md',
            '/front_end/mini_program/event/dataset_vs_detail/index.md',
            '/front_end/mini_program/event/mut_bind/index.md',
            '/front_end/mini_program/behaviors/index.md',
            '/front_end/mini_program/observer/index.md',
            '/front_end/mini_program/relations/index.md',
            '/front_end/mini_program/pure_data/index.md',
            '/front_end/mini_program/get_app_data/index.md',
            '/front_end/mini_program/apis/index.md',
          ],
        },
      ],
      '/front_end/attention': [
        {
          text: 'Attention',
          children: [
            '/front_end/attention/config_project/index.md',
            '/front_end/attention/webstorm_file_template/index.md',
            '/front_end/attention/login/index.md',
            '/front_end/attention/logout/index.md',
            '/front_end/attention/cross_origin/index.md',
            '/front_end/attention/generate_routes/index.md',
          ],
        }
      ],
      '/back_end/node': [
        {
          text: 'Node.js',
          children: [
            '/back_end/node/npm/lock_node_version/index.md',
            '/back_end/node/npm/lock_package_manager/index.md',
          ],
        },
      ],
      '/interview/javascript': [
        {
          text: 'JavaScript Interview',
          link: '/interview/javascript',
          children: [
            '/interview/javascript/var_let-const/index.md',  
          ],
        },
      ],
      '/interview/vue': [
        {
          text: 'Vue Interview',
          link: '/interview/vue',
          children: [
            '/interview/vue/mvvm/index.md',
            '/interview/vue/spa_mpa/index.md',
            '/interview/vue/v-if_vs_v-show/index.md',
            '/interview/vue/v-if_vs_v-for/index.md',
            '/interview/vue/two_way_binding/index.md',
            '/interview/vue/next_tick/index.md',
            '/interview/vue/data_option/index.md',
            '/interview/vue/lifecycle_hooks/index.md',
            '/interview/vue/communication_methods/index.md',
            '/interview/vue/dynamically_add_prop/index.md',
            '/interview/vue/mixins/index.md',
            '/interview/vue/observable/index.md',
            '/interview/vue/key/index.md',
            '/interview/vue/keep-alive/index.md',
            '/interview/vue/render_mechanism/index.md',
          ],
        },
      ],
      '/interview/vue_router': [
        {
          text: 'Vue Router Interview',
          link: '/interview/vue_router',
          children: [
            '/interview/vue_router/how_to_redirect/index.md',
            '/interview/vue_router/how_to_config_404_page/index.md',
            '/interview/vue_router/which_history_mode_does_router_have/index.md',
          ], 
        },
      ],
      '/language/english': [
        {
          text: 'English',
          children: [
            {
              text: '图解零基础英语语法',
              link: '/language/english/illustration_of_grammar',
              children: [
                '/language/english/illustration_of_grammar/01_主语和动词.md',
                '/language/english/illustration_of_grammar/02_be动词.md',
                '/language/english/illustration_of_grammar/03_一般动词.md',
                '/language/english/illustration_of_grammar/04_代词的基础.md',
                '/language/english/illustration_of_grammar/05_否定句的基础.md',
                '/language/english/illustration_of_grammar/06_疑问句的基础.md',
                '/language/english/illustration_of_grammar/07_疑问句.md',
                '/language/english/illustration_of_grammar/08_复数形式.md',
                '/language/english/illustration_of_grammar/09_祈使句.md',
                '/language/english/illustration_of_grammar/10_代词.md',
                '/language/english/illustration_of_grammar/11_现在进行时.md',
              ]
            },
          ],
        },
      ],
      '/cs/c_language': [
        {
          text: 'C Language',
          children: [
            {
              text: 'C语言程序设计-现代方法',
              link: '/cs/c_language/a_modern_approach/10/index.md',
              children: [
                '/cs/c_language/a_modern_approach/10/index.md',
                '/cs/c_language/a_modern_approach/11/index.md',
                '/cs/c_language/a_modern_approach/12/index.md',
                '/cs/c_language/a_modern_approach/13/index.md',
                '/cs/c_language/a_modern_approach/14/index.md',
              ],
            }
          ]
        }
      ],
    },
  }),
})
