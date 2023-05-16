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
  ],
  node: [
    'lock_node_version/',
    'lock_package_manager/',
  ],
}

export default tool
