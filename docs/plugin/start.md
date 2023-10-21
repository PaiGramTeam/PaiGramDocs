# 插件编写准备

在正式编写插件之前，我们需要先了解一下插件的概念。

## 插件文件

一个普通的 `.py` 文件即为一个插件，例如创建一个 `abc.py` 文件：

```
📂 plugins
└── 📜 abc.py
```

这个时候模块 abc 已经可以被称为一个插件了，尽管它还什么都没做。

## 插件说明

插件仅限处理交互层和业务层数据交换的任务

如有任何核心接口，请转到 core 目录添加

如有任何API请求接口，请转到 models 目录添加