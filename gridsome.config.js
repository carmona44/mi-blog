// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Daniel Carmona | Blog',
    description: 'Bienvenido al blog de Daniel Carmona. Ciclismo, programación y muchas otras historias.',
    plugins: [
        { use: 'gridsome-plugin-tailwindcss' },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './content/blog/**/*.md',
                typeName: 'Post'
            }
        }
    ],
    templates: {
        Post: '/blog/:year/:month/:day/:slug'
    }
}