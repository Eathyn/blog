import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { localTheme } from './index'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Eathyn\'s Blog',
  description: 'Learning Vuepress',
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
  theme: localTheme({
    colorMode: 'dark',
    colorModeSwitch: true,
    // logo: '/images/cat-1.png',
    // logoDark: '/images/cat-2.png',
    repo: 'https://github.com/Eathyn',
    sidebarDepth: 3,
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
            link: '/front_end/css/',
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
            text: 'TypeScript',
            link: '/front_end/typescript/learning_typescript/chapter_01.md',
          },
          {
            text: 'Attention',
            link: '/front_end/attention/config_project/index.md',
          },
        ],
      },
      {
        text: 'Computer Science',
        children: [
          {
            text: 'C Language',
            link: '/cs/c_language/',
          },
        ],
      },
      {
        text: 'Language',
        children: [
          {
            text: 'English',
            link: '/',
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
      '/front_end/javascript': [
        {
          text: 'JavaScript',
          link: '/front_end/javascript',
          children: [
            '/front_end/javascript/asynchronous/index.md',
            '/front_end/javascript/class/index.md',
            '/front_end/javascript/apis/index.md',
            '/front_end/javascript/array_like_object/index.md',
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
          ],
        },
        {
          text: 'TypeScript Handbook',
          link: '/front_end/typescript/typescript_handbook',
          children: [

          ],
        },
      ],
      '/front_end/attention': [
        {
          text: 'Attention',
          children: [
            '/front_end/attention/config_project/index.md',
            '/front_end/attention/webstorm_file_template/index.md',
          ],
        }
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
    },
  }),
})
