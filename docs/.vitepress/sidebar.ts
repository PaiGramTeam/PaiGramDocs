export default {
  '/': [
    {
      text: '🚀 快速上手',
      collapsed: true,
      items: [
        { text: '环境检查', link: '/quick-start/env' },
        { text: '安装项目', link: '/quick-start/install' },
        { text: '配置项目', link: '/quick-start/config' },
        { text: '启动项目', link: '/quick-start/run' },
      ],
    },
    {
      text: '👷 Docker 相关',
      collapsed: true,
      items: [
        { text: 'Docker 快速部署', link: '/docker/docker' },
        { text: 'Podman 快速部署', link: '/docker/podman' },
      ],
    },
    {
      text: '📦️ Core 介绍',
      collapsed: true,
      items: [
        { text: '关于 Service', link: '/advanced/service' },
        { text: '关于 sqlmodel', link: '/advanced/sqlmodel' },
      ],
    },
    {
      text: '🔧 Plugin 介绍',
      collapsed: true,
      items: [
        { text: '插件编写准备', link: '/plugin/start' },
        { text: '插件写法', link: '/plugin/create' },
        { text: '调用 Telegram 接口', link: '/plugin/bot' },
      ],
    },
    {
      text: '🪚 扩展介绍',
      collapsed: true,
      items: [
        { text: 'PGA 编译及安装', link: '/extra/pga' },
        { text: 'GCSIM 开发备忘', link: '/extra/gcsim' },
      ],
    },
  ],
}
