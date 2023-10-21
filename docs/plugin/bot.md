# 调用 Telegram 接口

在 GramBot 中，我们可以通过 Bot 对象来调用 Telegram 支持的平台 API，来完成更多的功能。

## 获取 Bot 对象

```python
async def start(self, update: Update, context: CallbackContext):
    bot = context.bot
```

## 调用 API​

```python
# 向账号发送 你好
await bot.send_message(777000, "你好")
```

```python
@handler.command(command='start', block=False)
async def start(self, update: Update, context: CallbackContext):
    await update.effective_chat.send_message('hello world!')
    await bot.send_message(update.effective_user.id, "你好")
```

<ChatPanel title="Telegram">
<ChatMessage nickname="User">/start</ChatMessage>
<ChatMessage nickname="GrambBot">hello world!</ChatMessage>
<ChatMessage nickname="GrambBot">你好</ChatMessage>
</ChatPanel>

## API 文档

https://docs.python-telegram-bot.org/en/v20.6/telegram.bot.html
