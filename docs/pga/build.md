# python-genshin-artifact 伤害计算

PaiGram 通过调用 python-genshin-artifact （下文简称PGA） 模块实现角色伤害计算，该模块将 Rust 实现的 [genshin_artifact](https://github.com/wormtql/genshin_artifact) 库包装为 python 模块供 PaiGram 使用。


## 依赖

PGA 主要依赖 Rust 以及 PyO3 实现与 `genshin_artifact` 的对接：

- [Rust](https://www.rust-lang.org/)
- [PyO3](https://github.com/PyO3/pyo3)
- [Python 3.8+](https://www.python.org/)


## 编译/安装

1. 克隆项目

  ```
  $ git clone https://github.com/PaiGramTeam/python-genshin-artifact.git
  Cloning into 'python-genshin-artifact'...
  ...
  ```

2. 浏览至项目主目录下，用 `cargo` 编译 Rust 代码（可选步骤）

  ```
  $ cd python-genshin-artifact/
  $ cargo build --no-default-features
  ...
  Compiling python_genshin_artifact v1.0.0
   Finished dev [unoptimized + debuginfo] target(s) in 25.67s
  ```

3. 编译成功后用 `pyo3/maturin` 安装至当前 Python 虚拟环境 (`env`)

  ```
  (env) $ maturin develop
     Compiling python_genshin_artifact v1.0.0
      Finished dev [unoptimized + debuginfo] target(s) in 18.06s
  📦 Built wheel for CPython 3.10 to /tmp/.tmpE21JWW/python_genshin_artifact-1.0.0-cp310-cp310-linux_x86_64.whl
  🛠 Installed python_genshin_artifact-1.0.0
  ```

4. 至此，`python-genshin-artifact` 可被导入至项目中使用

  ```python
  from python_genshin_artifact import get_damage_analysis, CalculatorConfig

  calculator_config = CalculatorConfig(...)
  damage_analysis = get_damage_analysis(calculator_config)
  ```


## 编译 wheel

如果需要导出给其它项目测试或使用（例如 PaiGram），需要通过 `maturin` 将模块编译成 `.whl` 格式以便其它 Python 虚拟环境安装。

1. `maturin build`:

  ```
  $ maturin build --out dist
      Finished dev [unoptimized + debuginfo] target(s) in 0.12s
  📦 Built wheel for CPython 3.10 to dist/python_genshin_artifact-1.0.0-xxx.whl
  ```

2. 将上一步打包完成的 `.whl` 安装至另一个项目的虚拟环境中 (此处假定 PaiGram 用的虚拟环境名是 venv)

  ```
  (venv) $ pip install dist/python_genshin_artifact-1.0.0-xxx.whl
  ```

3. 至此，PaiGram 项目就能导入 `python_genshin_artifact` 模块调用其中的函数了，具体用法参考 [PaiGram/plugins/genshin/player_cards.py](https://github.com/PaiGramTeam/PaiGram/blob/44a01bffd15bdb4b05e66fcd265d1e924490b4ef/plugins/genshin/player_cards.py#L620-L637)
