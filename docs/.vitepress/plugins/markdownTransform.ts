import type { Plugin } from 'vite'
import { replacer } from '../../../scripts/utils'
import { getReadingTime } from './../theme/utils'

export function MarkdownTransform(): Plugin {
  return {
    name: 'md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null

      const [_name, i] = id.split('/').slice(-2)

      // convert img
      const imgRegex = /!\[(.+?)\]\((.+?)\)/g
      let imgMatches = imgRegex.exec(code)
      while (imgMatches) {
        const [text, link] = imgMatches.slice(1)
        code = code.replace(imgMatches[0], `<img src="${link}" alt="${text || 'img'}" />`)
        imgMatches = imgRegex.exec(code)
      }

      if (_name === 'docs' && i === 'index.md')
        return code

      const { footer } = await getDocsMarkdown()
      code = replacer(code, footer, 'FOOTER', 'tail')
      const { readTime, words } = getReadingTime(code)

      code = code.replace(/(#\s\S.+)/, `$1\n\n<PageInfo readTime="${readTime}" words="${words}"/>\n`)

      code = code.replace(/::: info([\s\S.]+)?:::/g, '::: info 📝 备注$1:::\n')
      code = code.replace(/::: warning([\s\S.]+)?:::/g, '::: warning 🚨 警告$1:::\n')
      code = code.replace(/::: tip([\s\S.]+)?:::/g, '::: tip 💡 提醒$1:::\n')
      code = code.replace(/::: danger([\s\S.]+)?:::/g, '::: danger 🔥 危险$1:::\n')

      return code
    },
  }
}

export async function getDocsMarkdown() {
  const ContributorsSection = `## Contributors
  <Contributors/>`

  const footer = `${ContributorsSection}\n`

  return {
    footer,
  }
}
