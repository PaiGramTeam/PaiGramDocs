---
contributors: ["karakoo"]
---

# 关于 Service

## 创建 `Service`

服务 `Service` 需定义在 `services` 文件夹下, 并继承 `gram_core.base_service.BaseService`

每个 `Service` 都应包含 `initialize` 和 `shutdown` 方法, 且这两个方法都为异步方法

```python
from gram_core.base_service import BaseService


class TestService(BaseService):
    def __init__(self):
        """do something"""

    async def initialize(self, *args, **kwargs):
        """do something"""

    async def shutdown(self, *args, **kwargs):
        """do something"""
```

## 分类

v4 的服务有三类 `Dependence(基础服务)` 、 `Component(组件)` 、 `Service(普通服务)`

### 第一类：基础服务

基础服务是不需要依赖于其他任何服务和组件的服务，它会被最先初始化和运行

拥有异步方法 initialize 和 shutdown 来管理它的生命周期（后续可能会加入 heartbeat 方法来保持基础服务的一些功能）

存放于 `core/dependence` 目录下

### 第二类：组件

组件可以依赖于基础服务初始化，相比于基础服务，它没有 shutdown 方法

在所有基础服务初始化并启动完毕之后才会初始化组件

和普通服务一起存放于 `core/services` 目录下

### 第三类：普通服务

普通服务可以依赖于基础服务和组件来初始化，拥有和基础服务相同的管理生命周期的异步方法

在所有组件初始化完成后才会初始化并启动普通服务

和普通服务一起存放于 `core/services` 目录下
