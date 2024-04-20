const tool = {
  git: [
    'model/',
    'upstream/',
    'steps_to_participate_open_sources/',
    'tag/',
    'diff/',
    {
      text: 'Workflow',
      prefix: 'workflow/',
      collapsible: true,
      children: [
        'gitflow/',
      ],
    },
    'reset/',
    'merge/',
    'config/',
    'rebase/',
    'commit/',
    'log/',
    'remote/',
    'clone/',
    'pull/',
    'revert/',
    'switch/',
    'push/',
    'ignore/',
  ],
  debug: [
    {
      text: 'Chrome',
      prefix: 'chrome/',
      collapsible: true,
      children: [
        'emulate_focused/',
      ],
    },
  ],
  blog: [
    'create_blog/',
  ],
  common: [
    'tree_directory/',
  ],
}

export default tool
