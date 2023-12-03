# gcsim 队伍 DPS 模拟器

gcsim 是一个功能强大的原神组队模拟工具，由 Keqing Mains 社区的 srl 大佬开发，可以自定义队伍角色等级、技能、武器以及圣遗物属性以及最重要的角色动作 (攻击、技能释放) 序列等队伍配置，模拟器会给出队伍平均 DPS 以及输出时间轴、角色 DPS 占比、角色站场时间占比、元素反应次数、元素微粒统计等信息总结。

PaiGram 通过集成 gcsim 实现更快速的 PVP (确信)

## PYPI 安装

[gcsim-pypi](https://pypi.org/project/gcsim-pypi)

```bash
pip install gcsim-pypi
```

## 主框架

`plugins/genshin/gcsim/plugin.py` 存放了命令入口，你可以通过 `/gcsim` 命令呼出可以模拟的队伍伤害

`plugins/genshin/gcsim/gcsim/runner.py` 控制了 gcsim 程序的运行，返回程序的运行结果

`plugins/genshin/gcsim/renderer.py` 通过 gcsim 程序返回的结果进行渲染输出

`plugins/genshin/model` 中将 enka 数据源的数据类型转换为 gcsim 的数据类型

## 技术细节

### runner

在 runner 中，我们采用了 “PriorityQueue” 以及 “BoundedSemaphore” 分别实现任务排队和并发限制

队列限制的最大数量为 21，在程序中普通用户最大将只能推入 21 - 1 = 20 个任务，剩余 1 个任务是为了方便高权限用户的任务进行插队，加快调试速度

并发数量限制为 cpu 核心数，防止程序过高占用被 kill 掉

## 测试

所有云端脚本都通过编写 CI 进行了自动化测试，确保了脚本的可用性

## 问题和解决方案

### gcsim 内存溢出

在不正确的脚本运行时，可能会使 gcsim 程序发生死循环，快速消耗剩余内存

在 linux 下，我们使用了 `ulimit` 以及 `timeout` 限制程序可以使用的内存和程序的最长运行时间，防止程序出现异常
