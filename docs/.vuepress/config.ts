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
        href: '/images/head.gif',
      },
    ],
  ],
  markdown: {
    code: {
      lineNumbers: false,
    },
    headers: {
      level: [1, 2, 3, 4, 5, 6],
    },
  },
  theme: defaultTheme({
    colorModeSwitch: true,
    logo: '/images/head.gif',
    repo: 'https://github.com/Eathyn',
    sidebarDepth: 6,
    editLink: false,
    lastUpdated: false,
    contributors: false,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Front End',
        children: [
          {
            text: 'HTML',
            children: [
              {
                text: 'Other',
                link: '/front_end/html/other/defer_vs_async/index.md',
              },
              {
                text: 'SVG',
                link: '/front_end/html/svg/mdn_tutorial/getting_started/index.md',
              },
            ],
          },
          {
            text: 'CSS',
            link: '/front_end/css/box_model/index.md',
          },
          {
            text: 'JavaScript',
            link: '/front_end/javascript/asynchronous/index.md',
          },
          {
            text: 'TypeScript',
            link: '/front_end/typescript/learning_typescript/chapter_01.md',
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
            link: '/front_end/vue_router/guide/getting_started/index.md',
          },
          {
            text: 'Vuex',
            link: '/front_end/vuex/what_is_vuex/index.md',
          },
          {
            text: 'React Core',
            link: '/front_end/react/core/docs/learn/installation/index.md',
          },
          {
            text: 'Mini Program',
            link: '/front_end/mini_program/skills/index.md',
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
          {
            text: 'Data Structures and Algorithms',
            link: '/cs/data_structures_and_algorithms/a_common-sense_guide_to_data_structures_and_algorithms/01_why_data_structures_matter/index.md',
          },
          {
            text: 'Network',
            link: '/cs/network/http/message/index.md',
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
      // {
      //   text: 'Project',
      //   children: [],
      // },
      // {
      //   text: 'Interview',
      //   children: [
      //     {
      //       text: 'CSS',
      //       link: '/',
      //     },
      //     {
      //       text: 'JavaScript',
      //       link: '/',
      //     },
      //     {
      //       text: 'Browser',
      //       link: '/',
      //     },
      //     {
      //       text: 'Vue',
      //       link: '/interview/vue/mvvm/index.md',
      //     },
      //     {
      //       text: 'Vue Router',
      //       link: '/interview/vue_router/how_to_redirect/index.md'
      //     },
      //     {
      //       text: 'Network',
      //       link: '/',
      //     },
      //     {
      //       text: 'Mini Program',
      //       link: '/',
      //     },
      //   ],
      // },
      {
        text: 'Other',
        children: [
          {
            text: 'Learning',
            link: '/other/learning/schedule/index.md',
          },
          {
            text: 'Work',
            link: '/other/work/soft_skills/chapter_02.md',
          },
          {
            text: 'Psychology',
            children: [
              {
                text: 'Introduction',
                link: '/other/psychology/introduction/心理学导论/12_人格.md',
              },
            ]
          },
        ],
      },
    ],
    sidebar: {
      '/front_end/html/other': [
        {
          text: 'Other',
          children: [
            '/front_end/html/other/defer_vs_async/index.md',
            '/front_end/html/other/preload_prefetch/index.md',
          ]
        }
      ],
      '/front_end/html/svg': [
        {
          text: 'SVG',
          children: [
            '/front_end/html/svg/mdn_tutorial/getting_started/index.md',
            '/front_end/html/svg/mdn_tutorial/positions/index.md',
            '/front_end/html/svg/mdn_tutorial/basic_shapes/index.md',
          ],
        },
      ],
      '/front_end/css': [
        {
          text: 'CSS',
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
          children: [
            '/front_end/javascript/data_types/index.md',
            '/front_end/javascript/type_checking/index.md',
            '/front_end/javascript/array_like_object/index.md',
            '/front_end/javascript/variable/index.md',
            '/front_end/javascript/shallow_and_deep_copy/index.md',
            '/front_end/javascript/asynchronous/index.md',
            '/front_end/javascript/prototype/index.md',
            '/front_end/javascript/class/index.md',
            '/front_end/javascript/scope/index.md',
            '/front_end/javascript/function/lexical_environment/index.md',
            '/front_end/javascript/for-in_vs_for-of_vs_for-await-of/index.md',
            '/front_end/javascript/function/call_apply_bind/index.md',
            '/front_end/javascript/function/arrow_function/index.md',
            '/front_end/javascript/function/this/index.md',
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
            '/front_end/javascript/proxy/index.md',
            '/front_end/javascript/tricks/index.md',
            '/front_end/javascript/apis/index.md',
          ],
        },
      ],
      '/front_end/browser': [
        {
          text: 'Browser',
          children: [
            '/front_end/browser/events/basics/index.md',
            '/front_end/browser/events/capture_and_bubble/index.md',
            '/front_end/browser/events/delegation/index.md',
            '/front_end/browser/load/index.md',
          ],
        }
      ],
      '/front_end/vue/guide': [
        {
          text: 'Vue Guide',
          children: [
            /* Essentials */
            '/front_end/vue/guide/introduction/index.md',
            '/front_end/vue/guide/create_application/index.md',
            '/front_end/vue/guide/template_syntax/index.md',
            '/front_end/vue/guide/reactivity_fundamentals/index.md',
            '/front_end/vue/guide/computed_properties/index.md',
            '/front_end/vue/guide/conditional_rendering/index.md',
            '/front_end/vue/guide/list_rendering/index.md',
            '/front_end/vue/guide/event_handling/index.md',
            '/front_end/vue/guide/form_input_bindings/index.md',

            /* TypeScript */
            '/front_end/vue/guide/typescript/overview/index.md',
            '/front_end/vue/guide/typescript/ts_with_composition_api/index.md',

            '/front_end/vue/guide/custom_directive/index.md',
            '/front_end/vue/mvvm/index.md',
            '/front_end/vue/spa_mpa/index.md',
            '/front_end/vue/two_way_binding/index.md',
            '/front_end/vue/next_tick/index.md',
            '/front_end/vue/data_option/index.md',
            '/front_end/vue/communication_methods/index.md',
            '/front_end/vue/dynamically_add_prop/index.md',
            '/front_end/vue/mixins/index.md',
            '/front_end/vue/observable/index.md',
            '/front_end/vue/keep-alive/index.md',
            '/front_end/vue/render_mechanism/index.md',
          ],
        },
        {
          text: 'Vue APIs',
          link: '/front_end/vue/api',
          children: [
            '/front_end/vue/apis/key/index.md',
            '/front_end/vue/apis/lifecycle_hooks/index.md',
          ],
        },
      ],
      '/front_end/vue_router': [
        {
          text: 'Vue Router',
          children: [
            '/front_end/vue_router/guide/getting_started/index.md',
            '/front_end/vue_router/guide/dynamic_route_matching/index.md',
            '/front_end/vue_router/guide/route\'s_matching_syntax/index.md',
            '/front_end/vue_router/guide/nested_routes/index.md',
            '/front_end/vue_router/guide/programmatic_navigation/index.md',
            '/front_end/vue_router/guide/named_routes/index.md',
            '/front_end/vue_router/guide/named_views/index.md',
            '/front_end/vue_router/guide/redirect_and_alias/index.md',
            '/front_end/vue_router/guide/passing_props_to_route_components/index.md',
            '/front_end/vue_router/guide/different_history_modes/index.md',
            '/front_end/vue_router/guide/navigation_guards/index.md',
            '/front_end/vue_router/guide/route_meta_fields/index.md',
            '/front_end/vue_router/guide/data_fetching/index.md',
            '/front_end/vue_router/guide/composition_api/index.md',
            '/front_end/vue_router/guide/scroll_behavior/index.md',
            '/front_end/vue_router/how_to_config_404_page/index.md',
            '/front_end/vue_router/how_to_redirect/index.md',
            '/front_end/vue_router/which_history_mode_does_router_have/index.md',
          ],
        },
      ],
      '/front_end/vuex': [
        {
          text: 'Vuex',
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
          children: [
            '/front_end/typescript/learning_typescript/chapter_01.md',
            '/front_end/typescript/learning_typescript/chapter_02.md',
            '/front_end/typescript/learning_typescript/chapter_03.md',
            '/front_end/typescript/learning_typescript/chapter_04.md',
            '/front_end/typescript/learning_typescript/chapter_05.md',
            '/front_end/typescript/learning_typescript/chapter_06.md',
            '/front_end/typescript/learning_typescript/chapter_07.md',
            '/front_end/typescript/learning_typescript/chapter_08.md',
            '/front_end/typescript/learning_typescript/chapter_09.md',
            '/front_end/typescript/learning_typescript/chapter_10.md',
            '/front_end/typescript/learning_typescript/chapter_11.md',
            '/front_end/typescript/learning_typescript/chapter_13.md',
          ],
        },
        {
          text: 'TypeScript Handbook',
          link: '/front_end/typescript/typescript_handbook',
          children: [

          ],
        },
        {
          text: 'TypeScript Mock 01',
          link: '/front_end/typescript/typescript_mock_01',
          children: [
            '/front_end/typescript/mock_01/69/index.md',
            '/front_end/typescript/mock_01/70/index.md',
            '/front_end/typescript/mock_01/71/index.md',
            '/front_end/typescript/mock_01/72/index.md',
            '/front_end/typescript/mock_01/73/index.md',
            '/front_end/typescript/mock_01/74/index.md',
            '/front_end/typescript/mock_01/75/index.md',
          ],
        }
      ],
      '/front_end/react/core/docs/learn': [
        {
          text: 'React Docs Learn',
          children: [
            '/front_end/react/core/docs/learn/installation/index.md',
            '/front_end/react/core/docs/learn/quick_start/index.md',
            {
              text: 'Describing the UI',
              children: [
                '/front_end/react/core/docs/learn/describing_the_ui/your_first_component.md',
                '/front_end/react/core/docs/learn/describing_the_ui/importing_and_exporting_components.md',
                '/front_end/react/core/docs/learn/describing_the_ui/writing_markup_with_jsx.md',
                '/front_end/react/core/docs/learn/describing_the_ui/javascript_in_jsx_with_curly_braces.md',
                '/front_end/react/core/docs/learn/describing_the_ui/passing_props_to_a_component.md',
              ]
            }
          ],
        }
      ],
      '/front_end/mini_program': [
        {
          text: 'Mini Program',
          children: [
            '/front_end/mini_program/skills/index.md',
            '/front_end/mini_program/navigation/index.md',
            '/front_end/mini_program/component_communication/index.md',
            '/front_end/mini_program/lifecycle_hooks/index.md',
            '/front_end/mini_program/observer/index.md',
            '/front_end/mini_program/event/dataset_vs_detail/index.md',
            '/front_end/mini_program/event/bind_handler/index.md',
            '/front_end/mini_program/event/mut_bind/index.md',
            '/front_end/mini_program/behaviors/index.md',
            '/front_end/mini_program/relations/index.md',
            '/front_end/mini_program/pure_data/index.md',
            '/front_end/mini_program/get_app_data/index.md',
            '/front_end/mini_program/apis/index.md',
            '/front_end/mini_program/wxs/index.md',
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
            '/front_end/attention/permission/index.md',
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
                '/language/english/illustration_of_grammar/12_一般过去时.md',
                '/language/english/illustration_of_grammar/13_过去进行时.md',
                '/language/english/illustration_of_grammar/打好基础，精益求精-3.md',
                '/language/english/illustration_of_grammar/14_一般将来时.md',
                '/language/english/illustration_of_grammar/15_助动词.md',
                '/language/english/illustration_of_grammar/16_have-to_must.md',
                '/language/english/illustration_of_grammar/17_不定式.md',
                '/language/english/illustration_of_grammar/18_动名词.md',
                '/language/english/illustration_of_grammar/19_连词.md',
                '/language/english/illustration_of_grammar/打好基础，精益求精-5.md',
                '/language/english/illustration_of_grammar/20_there_is.md',
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
      '/cs/data_structures_and_algorithms': [
        {
          text: 'A Common-Sense Guide to Data Structures and Algorithms',
          children: [
            '/cs/data_structures_and_algorithms/a_common-sense_guide_to_data_structures_and_algorithms/01_why_data_structures_matter/index.md',
            '/cs/data_structures_and_algorithms/a_common-sense_guide_to_data_structures_and_algorithms/02_why_algorithms_matter/index.md',
          ],
        }
      ],
      '/cs/network': [
        {
          text: 'Computer Networking',
          children: [
            {
              text: 'For Front-End',
              link: '/cs/network/http/message/index.md',
              children: [
                '/cs/network/http/message/index.md',
                '/cs/network/http/headers/index.md',
                '/cs/network/http/response_status_code/index.md',
                '/cs/network/http/cache/index.md',
                '/cs/network/http/origin/index.md',
                '/cs/network/http/cors/index.md',
                '/cs/network/https/index.md',
                '/cs/network/tcp/three_handshakes_four_waves/index.md',
                '/cs/network/authentication/cookie/index.md',
                '/cs/network/authentication/session/index.md',
                '/cs/network/authentication/jwt/index.md',
              ],
            },
          ],
        }
      ],
      '/other/work': [
        {
          text: 'Work',
          children: [
            {
              text: '软技能: 代码之外的生存指南',
              link: 'other/work/',
              children: [
                '/other/work/soft_skills/chapter_02.md',
              ],
            },
          ],
        },
      ],
      '/other/learning': [
        {
          text: 'Learning',
          children: [
            '/other/learning/schedule/index.md',
          ],
        },
      ],
      '/other/psychology/introduction': [
        {
          text: '心理学导论',
          children: [
            '/other/psychology/introduction/心理学导论/12_人格.md',
          ],
        },
      ],
    },
  }),
})
