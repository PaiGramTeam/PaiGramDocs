---
contributors: ["cworld1"]
---

# 配置项目

## 复制配置模板

```bash
cp .env.example .env
```

## 修改配置

### 基础设置

#### Debug 功能

提供更多日志反馈和网页模板测试功能。可选参数：`true` / `false`

```dotenv
DEBUG=false
```

#### MySQL 数据库

必填。如果使用容器构建，请查阅侧栏的容器构建部分。

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USERNAME=user
DB_PASSWORD="password"
DB_DATABASE=paimon
```

#### Redis 数据库

可选。用于缓存生成图片的不必要数据。

```dotenv
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_DB=0
REDIS_PASSWORD=""
```

#### Telegram Bot Token

必填。联系 [Telegram@BotFather](https://t.me/BotFather) 使用 /newbot 命令创建机器人并获取 token。

```dotenv
BOT_TOKEN="xxxxxxx"
```

#### Bot 管理员

可选。`username` 来自 Telegram 用户信息界面；`user_id` 可通过 [Telegram@IDBot](https://t.me/username_to_id_bot) 获取。

```dotenv
OWNER=777000
```

### 其他功能

#### 自动记录错误并发送消息通知开发人员

可选。

```dotenv
ERROR_NOTIFICATION_CHAT_ID=chat_id
```

#### 文章推送群组 (可选配置项)

可选。

```dotenv
CHANNELS=[-100xxx]
```

#### 允许机器人邀请到其他群

可选。默认不允许；如果允许，可以允许全部人或有认证选项。

```dotenv
JOIN_GROUPS = "NO_ALLOW"
```

#### 群验证功能

可选。

```dotenv
VERIFY_GROUPS=[]
```

#### Loger 日志输出

可选。

```dotenv
LOGGER_NAME="TGPaimon"
# 打印时的宽度
LOGGER_WIDTH=180
# log 文件存放目录
LOGGER_LOG_PATH="logs"
# log 时间格式，参考 datetime.strftime
LOGGER_TIME_FORMAT="[%Y-%m-%d %X]"
# log 高亮关键词
LOGGER_RENDER_KEYWORDS=["BOT"]
# traceback 相关配置
LOGGER_TRACEBACK_MAX_FRAMES=20
LOGGER_LOCALS_MAX_DEPTH=0
LOGGER_LOCALS_MAX_LENGTH=10
LOGGER_LOCALS_MAX_STRING=80
# 可被 logger 打印的 record 的名称（默认包含了 LOGGER_NAME ）
LOGGER_FILTERED_NAMES=["uvicorn","ErrorPush","ApiHelper"]
```

#### 超时配置

可选。

```dotenv
TIMEOUT = 10
READ_TIMEOUT = 2
WRITE_TIMEOUT = 10
CONNECT_TIMEOUT = 10
POOL_TIMEOUT = 10
```

#### mtp 客户端

可选。

```dotenv
API_ID=12345
API_HASH="abcdefg"
```

#### Enka API 配置

可选。默认无，可能会影响 `/player_card` 指令。

```dotenv
ENKA_NETWORK_API_AGENT="TGPaimonBot/3.0"
```

#### Web Server

可选。目前只用于预览模板，仅开发环境启动。

```dotenv
WEB_URL=http://localhost:8080/
WEB_HOST=localhost
WEB_PORT=8080
```

#### 错误信息 Log

可选。

```dotenv
ERROR_PB_URL=https://fars.ee
ERROR_PB_SUNSET=43200
ERROR_PB_MAX_LINES=1000
ERROR_SENTRY_DSN=
```

#### Notice

可选。会作用于 Telegram 中权限不足时的提示。

```dotenv
NOTICE_USER_MISMATCH="再乱点我叫西风骑士团、千岩军、天领奉行、三十人团和风纪官了！"
```

## 初始化数据库

```bash
alembic upgrade head
```
