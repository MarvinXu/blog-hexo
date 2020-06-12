---
title: git-style-guide
urlname: qlexig
date: 2020-06-11 20:06:39 +0800
tags: []
categories: []
---

## branch

- 分支名要求简洁、清楚描述分支的作用，使用短横线’-‘分隔
- 合并后删除远端分支

## commit

- 一个提交对应一个逻辑修改。不要将多个逻辑修改放在一次提交，也不要将一个逻辑修改拆分为多次提交。
- 确保每次提交改动的文件与此次修改相关。不要把 merge 过来的代码放到本次提交。
- 小步提交、尽早提交。只有提交过的代码才是可恢复的。

### commit message

```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- `<type>` 修改类型，**只允许使用下面列出的类型**
- `<scope>` 影响的范围，写项目中对应的目录名称，如 index、fastsell、deliveryman
- `<subject>` 简要说明修改的内容
- `<body>` 补充、详细说明 commit 内容
- `<footer>` 附上需求或 bug 的 iwork 链接

#### types

- feat: (feature) 新功能
- fix: 修复错误
- refactor: 代码重构，既不修复错误也不添加功能
- chore: 构建过程或辅助工具的变动
- docs: 文档
- style: 格式（缩进、空行等）

#### 示例

```bash
fix(order): 修复订单列表和详情商品图大小问题
旧商品图是后端拼接尺寸和裁剪参数，新商品不带这些参数，前端需要做下兼容
http://iwork3.58corp.com/bug/detail/ZZYP-2222
```

## 开发流程

1. 分支开发，每个新需求或 bug 修复从远端 master 创建新分支
1. 分支提测，每次提测前`rebase origin/master`
1. QA 测试完成后发起 MR，由管理员**手动**合并到 master（跟直接 accept mr 相比会少一个 merge commit）
1. 再次提测，QA 验证 master 代码无误后上线

## Tips:

1. 如果你想合并几个 commit，应该用 `git rebase -i HEAD~4`
1. 如果你刚提交完一个 commit，发现还有点东西忘了改，这时可以用 `git commit --amend`
1. …

## reference

1. [Pro Git，第二版，简体中文](https://bingohuang.gitbooks.io/progit2/)
1. [git style guide](https://github.com/agis/git-style-guide)
