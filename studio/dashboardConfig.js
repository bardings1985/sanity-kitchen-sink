export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6015dbf5a6b6200308008397',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-z7tjjgxm',
                  apiId: '708cbd60-967b-4ae7-8223-90ff537cefc2'
                },
                {
                  buildHookId: '6015dbf57e88123ec4967f4a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kejrp2qu',
                  apiId: '5c4113a3-6120-4c7e-80fa-f53a765d0177'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bardings1985/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kejrp2qu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
