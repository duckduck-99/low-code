# Low-Code Platform

基于 pnpm monorepo 架构的低代码平台。

## 项目结构

```
low-code/
├── packages/
│   ├── core/          # 核心功能包
│   ├── ui/            # UI 组件包
│   ├── renderer/      # 渲染器包
│   └── utils/         # 工具函数包
├── pnpm-workspace.yaml
└── package.json
```

## 包说明

### @low-code/core
核心功能模块，提供组件管理和基础架构。

### @low-code/ui
UI 组件库，提供可视化组件。

### @low-code/renderer
渲染器模块，负责将组件 schema 渲染为实际 UI。

### @low-code/utils
工具函数库，提供通用的辅助函数。

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

### 构建所有包

```bash
pnpm build
```

### 运行测试

```bash
pnpm test
```

## 添加新包

在 `packages/` 目录下创建新的包目录，并添加 `package.json` 文件。pnpm workspace 会自动识别。

## 包之间的依赖

使用 `workspace:*` 协议来引用 monorepo 中的其他包：

```json
{
  "dependencies": {
    "@low-code/core": "workspace:*"
  }
}
```
