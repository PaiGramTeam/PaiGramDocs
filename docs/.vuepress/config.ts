import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'PaimonDocs',
    description: 'Documentation of PaimonBot',
    head: [['link', { rel: 'icon', href: '/images/logo.jpg' }]],
    locales: {
        '/': {
            lang: 'zh',
        },
    },

    theme: defaultTheme({
        docsRepo: 'https://github.com/RTPaimon/PaimonDocs',
        docsBranch: 'main',
        docsDir: 'docs',
        editLinkPattern: ':repo/edit/:branch/:path',
        logo: '/images/logo.jpg',
        locales: {
            '/': {
                selectLanguageName: '简体中文',
            },
        },
    }),
})