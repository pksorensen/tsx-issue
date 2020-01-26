import "vue-tsx-support/enable-check"
//@ts-ignore
const nodeExternals = require('webpack-node-externals')
//@ts-ignore
module.exports = {
    srcDir: 'src/',
    mode:"spa",
    generate: {
        
    },
    router: {
        mode: "hash",
    },
    transition: {
        css: false
    },
    env: {
        //@ts-ignore
        BaseURI: process.env.NODE_ENV !== 'production' ?  'https://io-board.eu.ngrok.io' : 'https://api.kjeldager.com'
    },
    head: {
        title: 'SocialLink',
         meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.5' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' },
        ]
    },
    manifest: {
        name: 'SocialLink',
        short_name: 'sociallink'
    },
    meta: {
        name: 'SocialLink',
        description: 'Ask clients for social access tokens safetly',
        themeColor: '#ffffff',
        msTileColor: '#f87f2e',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#344675',
        workboxPluginMode: 'GenerateSW',
    },
    plugins: [
        '~/plugins/vuetify'
    ],
    buildModules: [
        // Simple usage
        '@nuxtjs/vuetify',

        // With options
        // ['@nuxtjs/vuetify', { /* module options */ }]
        '@nuxt/typescript-build'
    ],
    vuetify: {
        /* module options */
        theme: {
           // dark: true,
        },
    },
    build: {

        parallel: true,
        transpile: [/^vuetify/],
        extend(config, { isDev, isClient }) {

            if (!isDev) {
                // relative links, please.
                config.output.publicPath = './_nuxt/'
            }
            //@ts-ignore
            if (process.server) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ]
            }
        }
    }

}