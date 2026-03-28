<div align="center">
  <h1>🌸 元祖！BanG Dream Chan 角色出场统计站</h1>
  <p><em>追踪和可视化BanG Dream Chan系列角色出场数据</em></p>
</div>

## ✨ 功能特色

- 📊 **出场统计**: 实时跟踪所有BanG Dream角色的出场次数
- 🏆 **排行榜**: 按出场次数排序的角色排行榜
- 🎸 **乐队分组**: 按Poppin'Party、Afterglow、Roselia等乐队分类查看
- 📺 **分集详情**: 查看每一集的具体出场角色和看点
- 🖼️ **一键导出**: 生成美观的统计图表PNG图片
- 📱 **响应式设计**: 完美适配桌面和移动设备

## 🚀 快速开始

### 前提条件

- Node.js 18+
- pnpm 包管理器

### 本地运行

```bash
# 1. 安装依赖
pnpm install

# 2. 启动开发服务器
pnpm dev

# 3. 在浏览器中访问 http://localhost:3000
```

### 构建生产版本

```bash
# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 🛠️ 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite 8 (Rolldown引擎)
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **功能**: html-to-image (PNG导出)

## 📦 项目结构

```
src/
├── App.tsx           # 主应用组件
├── main.tsx          # 入口文件
├── data.ts           # 角色、乐队、集数数据
└── index.css         # 全局样式

dist/                 # 构建输出目录
public/              # 静态资源
```
