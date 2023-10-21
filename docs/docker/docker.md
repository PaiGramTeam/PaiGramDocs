---
contributors: ["cworld1"]
---

# Docker 快速部署

## 1. 安装 `docker` 和 `docker-compose`

```bash
curl -fsSL https://get.docker.com | bash -s docker
```

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/v2.16.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
docker-compose version
```

> 不同系统安装命令可能略有差异，详见：[Docker Documentation](https://docs.docker.com/compose/install/)
>

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
docker-compose up -d
```
