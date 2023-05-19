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
  ],
  node: [
    'lock_node_version/',
    'lock_package_manager/',
  ],
}

export default tool
