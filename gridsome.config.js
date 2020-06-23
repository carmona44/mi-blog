// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

    siteName: 'Daniel Carmona | Blog',
    siteDescription: 'Bienvenido al blog de Daniel Carmona. Ciclismo, programación y muchas otras historias.',

    templates: {
        Post: '/:title',
        Tag: '/tag/:id'
    },

    plugins: [{
            use: 'gridsome-plugin-tailwindcss',
            options: {
                config: './tailwind.config.js'
            }
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: 'content/blog/**/*.md',
                typeName: 'Post',
                refs: {
                    tags: {
                        typeName: "Tag",
                        create: true
                    }
                }
            }
        }
    ]
}