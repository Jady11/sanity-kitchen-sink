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
                  buildHookId: '60b92dc5f446a227f9b49644',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-b3wx6q3f',
                  apiId: '7f46483e-4017-48b5-ae6f-5c5895ecb978'
                },
                {
                  buildHookId: '60b92dc5864a77236abab4d9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-saa46i1z',
                  apiId: 'e7fd09a3-efa5-4bcd-a6e3-1a217c6ebb84'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jady11/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-saa46i1z.netlify.app', category: 'apps'}
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
