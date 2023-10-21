---
contributors: ["cworld1"]
---

# Podman 快速部署

## 1. 安装 `podman` 和 `podman-compose`

```bash
sudo apt-get -y install podman
```

> 不同系统安装命令可能略有差异，详见：[Podman Installation](https://podman.io/getting-started/installation)

```bash
pip3 install podman-compose
```

> 如果你正在使用 Fedora (>=f31)，可以使用如下命令安装：
>
> ```bash
> sudo dnf install podman-compose
> ```

## 2. 克隆本项目

::: tip

此处以 PaiGram 为例，其余项目同理

:::

```bash
git clone https://github.com/PaiGramTeam/PaiGram.git
cd PaiGram
```

## 3. 修改配置文件

```bash
cp .env.example .env
cp docker-compose.gen.yml docker-compose.yml
```

```dotenv
# MySQL
DB_HOST=mysql
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD="root"
DB_DATABASE=paimon

# Redis
REDIS_HOST=redis
REDIS_PORT=6379
REDIS_DB=0
REDIS_PASSWORD=""
```

以及 bot token 等参数。详见 [Env Settings](../quick-start/env)

### 4. 运行

```bash
podman-compose -f docker-compose.yml up -d
```
