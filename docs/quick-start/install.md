# 安装项目

::: tip

此处以 PaiGram 为例，其余项目同理

:::

## 克隆项目

```bash
git clone https://github.com/PaiGramTeam/PaiGram.git
cd PaiGram
git submodule update --init --recursive
```

## 创建虚拟环境

```bash
python -m venv venv
```

## 激活虚拟环境

### linux

```bash
source venv/bin/activate
```

### windows

```cmd
venv\Scripts\activate.bat
```

### windows powershell

```powershell
.\venv\Scripts\Activate.ps1
```

## 安装项目依赖

### 使用 poetry

```bash
poetry install --extras all
```

### 使用 pip

```bash
pip install -r requirements.txt
```
