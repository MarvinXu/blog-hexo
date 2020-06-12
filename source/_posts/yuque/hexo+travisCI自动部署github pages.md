---
title: hexo+travisCI自动部署github pages
urlname: gzlvqk
date: 2020-06-12 17:24:27 +0800
tags: []
categories: []
---

## 两种方式

利用 github pages 搭建个人博客一般有两种组织方式：

1. 建两个项目，一个项目 blog 用于存放博客源码，另一个项目 xxx.github.io 用于部署生成的静态文件
1. 只建一个项目 blog，master 分支存放博客源码，生成的静态文件部署到 gh-pages 分支

区别是第一种可以直接用[https://xxx.github.io](https://xxx.github.io)访问博客，而第二种要加项目名，即[https://xxx.github.io/blog](https://xxx.github.io/blog)，我选的是第一种。

## hexo 快速搭建

```bash
npm i -g hexo-cli
hexo init blog-hexo
cd blog-hexo
```

### 配置主题

[https://github.com/next-theme/hexo-theme-next](https://github.com/next-theme/hexo-theme-next)

### 手动部署

> Just for a reminder，本文重点是后面的 Travis CI 自动部署

```bash
npm i --save hexo-deployer-git
```

\_config.yml 添加配置

```bash
deploy:
  type: git
  repo: https://github.com/MarvinXu/marvinxu.github.io.git
  branch: master
```

## travisCI 自动部署

### 1. 登录 travisCI 并关联项目

[https://travis-ci.org/](https://travis-ci.org/) 使用 github 账号登录，关联 blog 项目

### 2. blog 项目添加.travis.yml

流程：构建生成静态页 -> 部署到 marvinxu.github.io
参考 [https://docs.travis-ci.com/user/deployment/pages/](https://docs.travis-ci.com/user/deployment/pages/)

```bash
language: node_js
node_js:
  - 8
script:
  - "npm run build"
cache:
  directories:
    - node_modules
deploy:
  provider: pages
  skip_cleanup: true
  # access token存储在环境变量中防止泄露，后面会说明如何添加
  github_token: $GITHUB_TOKEN
  keep_history: true
  # 指定部署的repo，默认为当前repo
  repo: MarvinXu/marvinxu.github.io
  # 指定branch，默认为gh-pages
  target_branch: master
  # 指定要部署的文件夹，hexo构建生成在public目录下
  local_dir: public
  on:
    branch: master
```

### 3. 获取 github token

路径：Settings -> Developer settings -> Personal access tokens -> generate new token
因为我们的 blog 项目是 public 的，只需选择 public_repo 权限，确定得到 token 串

> 问题记录：我第一次选的权限是整个 repo，结果触发构建时报错了，提示“gh-token is invalid”，后来改为只选择 public_repo 才正常
> [https://stackoverflow.com/questions/50227342/gh-token-is-invalid-github-pages-deployment-on-travis/62341297#62341297](https://stackoverflow.com/questions/50227342/gh-token-is-invalid-github-pages-deployment-on-travis/62341297#62341297) > [https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci](https://stackoverflow.com/questions/23277391/how-to-publish-to-github-pages-from-travis-ci)

### 4. 在 travisCI 项目中添加环境变量

在项目设置里，添加变量名为 GITHUB_TOKEN，值为刚才获取的 token
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1591956537089-d4ddced6-4ad7-4d98-9197-75f4fe42dc38.png#align=left&display=inline&height=185&margin=%5Bobject%20Object%5D&name=image.png&originHeight=369&originWidth=1512&size=50103&status=done&style=none&width=756)
至此已经完成自动部署的配置，当 blog 项目发生 push 操作时，自动部署就会触发啦~
