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
  ],
}
