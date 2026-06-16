---
title: "Hugo 博客搭建指南"
date: 2026-06-15
draft: false
tags: ["Hugo", "教程", "静态网站"]
categories: ["技术"]
summary: "从零开始用 Hugo 搭建一个技术博客，包括自定义主题、暗黑模式和 GitHub Pages 部署。"
---

## 什么是 Hugo

Hugo 是一个用 Go 语言编写的静态网站生成器，以**构建速度极快**著称。它可以在毫秒级别生成数千个页面。

### 为什么选择 Hugo

| 特性 | Hugo | Jekyll | Hexo |
|------|------|--------|------|
| 构建速度 | 极快 | 慢 | 中等 |
| 依赖 | 单二进制 | Ruby | Node.js |
| 模板语言 | Go Template | Liquid | EJS/Pug |
| 学习曲线 | 中等 | 低 | 低 |

## 快速开始

### 安装 Hugo

Windows 用户可以通过 winget 安装：

```bash
winget install Hugo.Hugo.Extended
```

### 创建新站点

```bash
hugo new site my-blog
cd my-blog
```

### 目录结构

```
my-blog/
├── archetypes/    # 内容模板
├── content/       # Markdown 文章
├── layouts/       # HTML 模板
├── static/        # 静态文件
├── themes/        # 主题
└── hugo.toml      # 配置文件
```

## 写作流程

### 创建文章

```bash
hugo new content posts/my-first-post.md
```

Hugo 会基于 `archetypes` 目录中的模板创建文件，自动填充 front matter。

### Front Matter

每篇文章开头的 YAML 区域定义了元数据：

```yaml
---
title: "文章标题"
date: 2026-06-15
draft: false
tags: ["标签1", "标签2"]
categories: ["分类"]
summary: "文章摘要"
---
```

## 部署到 GitHub Pages

使用 GitHub Actions 可以实现推送即部署：

1. 在仓库中创建 `.github/workflows/hugo.yml`
2. 配置 Hugo 构建步骤
3. 推送到 `main` 分支，Actions 自动构建并发布到 `gh-pages`

这样每次你 `git push` 后，博客就会自动更新。

## 小结

Hugo 是一个强大且灵活的静态网站生成器，非常适合搭建技术博客。配合 GitHub Pages，你可以拥有一个免费、快速、完全自主的博客平台。
