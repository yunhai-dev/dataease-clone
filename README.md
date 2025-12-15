# DataEase 官网克隆

> 完整克隆 [DataEase](https://dataease.cn/) 官方网站，使用 Next.js 和 Tailwind CSS 实现

![DataEase Clone](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📸 预览

一个完整的 DataEase 官网克隆项目，包含所有主要功能区块。

## ✨ 功能特性

- ✅ **完整页面克隆** - 包含所有原站区块和内容
- ✅ **响应式设计** - 完美适配桌面端和移动端
- ✅ **现代技术栈** - Next.js 14 + TypeScript + Tailwind CSS
- ✅ **优化性能** - 使用 Next.js 的图片优化和代码分割
- ✅ **交互体验** - 弹窗、FAQ展开、悬停效果等

## 🎨 包含的区块

1. **顶部横幅** - FIT2CLOUD 品牌展示
2. **导航栏** - 完整菜单和 GitHub 星标显示
3. **Hero 区块** - 渐变背景大标题
4. **产品介绍** - DataEase 简介和演示图
5. **特性展示** - 四大核心特性
6. **数据源支持** - 20+ 数据库展示
7. **业务模板** - 12 个精美模板卡片
8. **FAQ 区块** - 常见问题解答
9. **客户案例** - 客户成功故事
10. **演示视频** - 产品演示区
11. **联系我们** - 完整联系信息
12. **页脚** - 版权和法律信息

## 🚀 快速开始

### 前置要求

- Node.js 18+ 或 Bun
- Git

### 安装和运行

```bash
# 克隆仓库
git clone https://github.com/yunhai-dev/dataease-clone.git
cd dataease-clone

# 安装依赖
bun install
# 或使用 npm
npm install

# 启动开发服务器
bun dev
# 或使用 npm
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
# 构建
bun run build

# 启动生产服务器
bun start
```

## 🛠️ 技术栈

- **框架**: [Next.js 14](https://nextjs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI组件**: [shadcn/ui](https://ui.shadcn.com/)
- **图标**: [Lucide React](https://lucide.dev/)
- **包管理器**: [Bun](https://bun.sh/)

## 📁 项目结构

```
dataease-clone/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 主页面
│   │   ├── layout.tsx        # 布局组件
│   │   └── globals.css       # 全局样式
│   └── lib/
│       └── utils.ts          # 工具函数
├── public/                   # 静态资源
├── components.json           # shadcn/ui 配置
├── tailwind.config.ts        # Tailwind 配置
└── next.config.js           # Next.js 配置
```

## 🎯 特色功能

### 响应式设计
所有组件都经过精心设计，在各种屏幕尺寸下都能完美显示。

### 交互动画
- Hover 悬停效果
- 平滑过渡动画
- FAQ 展开/收起
- 弹窗功能

### 性能优化
- 图片懒加载
- 代码分割
- 优化的构建输出

## 📝 开发说明

本项目使用 Bun 作为包管理器和运行时，也完全兼容 npm/yarn/pnpm。

### 可用脚本

- `bun dev` - 启动开发服务器
- `bun build` - 构建生产版本
- `bun start` - 运行生产服务器
- `bun lint` - 运行代码检查

## 🌟 致谢

- 原站: [DataEase](https://dataease.cn/)
- 所有图片和内容版权归 DataEase 所有
- 本项目仅用于学习和展示目的

## 📄 许可证

本项目仅用于学习和展示目的。所有 DataEase 相关的商标、内容和图片版权归其所有者所有。

## 🔗 相关链接

- [DataEase 官网](https://dataease.cn/)
- [DataEase GitHub](https://github.com/dataease/dataease)
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

---

**Created with ❤️ using [Same](https://same.new)**
