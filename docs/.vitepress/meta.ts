import { version } from '../../package.json'

// base info
export const name = 'GramBot'
export const site = 'https://docs.paimon.vip/'
export const logo = '../public/icon.png'
export const keywords = 'docs,paimon,paigram,pomgram,telegram,bot'
export const description = 'Telegram robot, query the official game information'

// social link
export const github = 'https://github.com/PaiGramTeam/PaiGramDocs'

// docs version
export const docsVersion = version

/* PWA runtime caching urlPattern regular expressions */
/* eslint-disable prefer-regex-literals */
export const githubSourceContentRegex = new RegExp('^https://(((raw|user-images|camo).githubusercontent.com))/.*', 'i')
export const googleFontRegex = new RegExp('^https://fonts.googleapis.com/.*', 'i')
export const googleStaticFontRegex = new RegExp('^https://fonts.gstatic.com/.*', 'i')
export const jsdelivrCDNRegex = new RegExp('^https://cdn.jsdelivr.net/.*', 'i')
