---
contributors: ["karakoo"]
---

# SQLModel 和 Alembic 管理数据库

在我们的项目中，我们使用 Python 的 SQLModel 和 Alembic 来管理我们的数据库。

## SQLModel

SQLModel 是一个库，它允许我们以 Python 类的形式定义我们的数据库模型。这些类可以映射到数据库中的表，并且可以用于创建、查询和操作数据。

我们的数据模型保存在 `services/.../models.py` 文件中。

例如，一个简单的用户模型可能如下所示：

```python
from sqlmodel import SQLModel, Field

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str
    email: str
```

## Alembic

Alembic 是一个数据库迁移工具，它允许我们管理数据库的版本。通过 Alembic，我们可以跟踪数据库模型的更改，并将这些更改应用到我们的数据库中。

使用 Alembic，我们可以创建一个新的迁移，如下所示：

```bash
alembic revision -m "Add user table"
```

然后，我们可以编辑生成的迁移文件，以添加创建用户表的代码。

最后，我们可以使用以下命令应用迁移：

```bash
alembic upgrade head
```

通过这种方式，我们可以确保我们的数据库模型和数据库始终保持同步。
