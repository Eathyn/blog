/* ------------------- data structure and algorithm ------------------- */

const searchAlgorithm = {
  text: 'Search Algorithm',
  collapsible: true,
  prefix: 'search_algorithm/',
  children: [],
}

const sortingAlgorithm = {
  text: 'Sorting Algorithm',
  collapsible: true,
  prefix: 'sorting_algorithm/',
  children: [
    'bubble_sort/',
    'selection_sort/',
    'insertion_sort/',
    'quick_sort/',
    'shell_sort/',
  ],
}

const linearStructure = {
  text: 'Linear Structure',
  collapsible: true,
  prefix: 'linear_structure/',
  children: [
    {
      text: 'Linked List',
      collapsible: true,
      prefix: 'linked_list/',
      children: [
        'single_linked_list/',
      ],
    },
    {
      text: 'Stack',
      collapsible: true,
      prefix: 'stack/',
      children: [],
    },
    {
      text: 'Queue',
      collapsible: true,
      prefix: 'queue/',
      children: [],
    },
    {
      text: 'Hash Table',
      collapsible: true,
      prefix: 'hash_table/',
      children: [
        'index.md',
      ],
    },
    {
      text: 'String',
      collapsible: true,
      prefix: 'string/',
      children: [],
    },
  ]
}

const nonLinearStructure = {
  text: 'Non-Linear Structure',
  collapsible: true,
  prefix: 'non-linear_structure/',
  children: [
    {
      text: 'Tree',
      collapsible: true,
      prefix: 'tree/',
      children: [
        'tree/',
        'binary_tree/',
        'binary_search_tree/',
        'tire/',
        {
          text: 'Heap',
          collapsible: true,
          prefix: 'heap/',
          children: [
            'priority_queue/',
          ],
        },
      ],
    },
    {
      text: 'Graph',
      collapsible: true,
      prefix: 'graph/',
      children: [],
    },
  ],
}

const dsa = [
  'README.md',
  searchAlgorithm,
  sortingAlgorithm,
  linearStructure,
  nonLinearStructure,
]

/* ----------------------------- network ------------------------------ */

const network = [
  'authentication/cookie/',
  'authentication/session/',
  'authentication/jwt/',
  'http/headers/',
  'http/message/',
  'http/versions/',
  'http/response_status_code/',
  'http/origin/',
  'http/cache/',
  'https/',
  'tcp/three_handshakes_four_waves/',
]

/* ----------------------------- others ------------------------------- */

const others = [
  'compile-time_vs_runtime',
  'interpret_compile_assembly',
  'side_effect',
]

/* ------------------------- computer science ------------------------- */

const cs = {
  dsa,
  network,
  others,
}

export default cs
