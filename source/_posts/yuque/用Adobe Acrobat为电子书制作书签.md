---
title: 用Adobe Acrobat为电子书制作书签
urlname: za5g8e
date: 2020-04-19 18:42:16 +0800
tags: []
categories: []
---

最近在翻看《JavaScript 高级程序设计 第 3 版》这本书，发现有些内容过时了，找了找发现第 4 版英文原版已经有了，但是网上找的免费的 PDF 都没有书签，看得很费劲，闲的自己做了个书签。

## 1. 印刷版和页码相关知识

因为下载的这个 PDF 是印刷版，而且它除了没有书签，连**页码也不连续**，导致我一开始做书签的时候非常懵逼。通过查资料和跟其他制作好的电子书对比，让我逐渐对这个东西有了一些了解。

印刷版 PDF 有两个特点：

1. 左右页边距大小不一，且相邻页的页边距也不一致（因为要装订且分正反页）
1. 有空白页（因为分正反页有的地方需要空一页，比如封面、章结尾）

页码：很多书籍都会用**分段页码**，比如正文之前用小写罗马数字（i、ii、ixii...），正文部分用阿拉伯数字，这导致了正文部分的页码跟 PDF 的页码数不一致

> 因为懒的再去找 Reference，上面都是基于我的理解写出来的，所以可能有不对

## 2. 制作步骤

软件准备：Adobe Acrobat DC 2020 + AutoBookmark 插件
插件链接  [https://www.evermap.com/autobookmark.asp#SystemReq](https://www.evermap.com/autobookmark.asp#SystemReq)

#### 1. 通过页面标签设置分段页码

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1587296148943-24b1019d-3096-4193-974e-f86ae9e7a2e0.png#align=left&display=inline&height=432&margin=%5Bobject%20Object%5D&name=image.png&originHeight=863&originWidth=443&size=70368&status=done&style=none&width=222)![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1587296234660-9d5d1b0c-6b21-432f-865f-5aa2bf23e0e7.png#align=left&display=inline&height=309&margin=%5Bobject%20Object%5D&name=image.png&originHeight=618&originWidth=567&size=60376&status=done&style=none&width=283.5)
正文前部分用小写罗马数字，正文用阿拉伯数字
设置完之后，正文部分的页码就对上了：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1587296771074-39201b8d-6062-4701-929c-873174d03d0b.png#align=left&display=inline&height=478&margin=%5Bobject%20Object%5D&name=image.png&originHeight=955&originWidth=1130&size=231274&status=done&style=none&width=565)

#### 2. 补充空白页，使页码连续

![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1587297407455-7f5d245a-0c8d-4080-9892-12e2998dd7ad.png#align=left&display=inline&height=394&margin=%5Bobject%20Object%5D&name=image.png&originHeight=787&originWidth=1093&size=239768&status=done&style=none&width=546.5)
检查章节末尾，如果页码不连续就补空白页

#### 3. 开始添加书签

光标选中章节标题，菜单栏点击增效工具->bookmarks->Generate from Text Styles，发现会自动获取章节标题的样式
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1587297901083-2dafafb5-f761-4be5-b742-2b15f549169a.png#align=left&display=inline&height=367&margin=%5Bobject%20Object%5D&name=image.png&originHeight=734&originWidth=653&size=77224&status=done&style=none&width=326.5)
然后选中二级标题，点击 Add 按钮，加入二级标题的样式，以此类推，把各级标题都添加进去。
为了识别准确率，限定页码范围在正文部分。
点 OK，就会自动生成书签了~

#### 4. 修改已生成的书签

如果需要批量编辑已生成的书签，比如加上序号、前缀等，可以从   增效工具->bookmarks->Modify Bookmarks 中选择需要的操作。
比如现在我想给每个章节书签前加上“Chapter {number}: ”，选择 Add Prefix / Suffix To Bookmarks
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1587298412772-e1c5f564-5ef1-4b91-ba59-9fddc7bf3b07.png#align=left&display=inline&height=329&margin=%5Bobject%20Object%5D&name=image.png&originHeight=657&originWidth=563&size=65232&status=done&style=none&width=281.5)
看下最终生成的效果：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/1310147/1587298474308-4d4f03d6-52ac-4090-996f-bca9a0a4a711.png#align=left&display=inline&height=439&margin=%5Bobject%20Object%5D&name=image.png&originHeight=877&originWidth=405&size=46644&status=done&style=none&width=202.5)
总共 1000 多个书签，如果手动添加那可真是浪费时间呢！

最后分享一下带书签版本的《Professional JavaScript for Web Developers 4th Edition》
[Professional.JavaScript.for.Web.Developers.4th.Edition.Bookmark.v2.pdf](https://www.yuque.com/attachments/yuque/0/2020/pdf/1310147/1587298816551-c5da2293-d382-488c-9fbd-9a0ba8898ccb.pdf?_lake_card=%7B%22uid%22%3A%221587298814004-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2020%2Fpdf%2F1310147%2F1587298816551-c5da2293-d382-488c-9fbd-9a0ba8898ccb.pdf%22%2C%22name%22%3A%22Professional.JavaScript.for.Web.Developers.4th.Edition.Bookmark.v2.pdf%22%2C%22size%22%3A5740868%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22rrmfx%22%2C%22card%22%3A%22file%22%7D)
