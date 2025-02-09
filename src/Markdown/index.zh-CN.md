---
nav: 组件
group: 基础组件
title: Markdown 文档展示
atomId: Markdown
description: Markdown是一个用于渲染Markdown文本的React组件。它支持各种Markdown语法，如标题、列表、链接、图片、代码块等。它通常用于文档、博客和其他文本密集型应用中。
---

## Default

ProEditor 内置了一个默认的 Markdown 渲染器，使用 React-Markdown，使用我们自己的 Highlight 和 Snippet 进行代码块的渲染

你也可以通过自己传入 components 等 React-Markdown 的 Props 来进行自定义，多余的会透传过去。

<code src="./demos/index.tsx" nopadding></code>

## APIs

| 属性名        | 类型            | 描述                           |
| ------------- | --------------- | ------------------------------ |
| children      | string          | 要渲染的 Markdown 内容。       |
| className     | string          | Markdown 组件的类名。          |
| onDoubleClick | () => void      | 双击事件处理函数。             |
| style         | CSSProperties   | Markdown 组件的样式。          |
| highlight     | Highlight Props | Highlight 的配置，会默认透传。 |
| snippet       | snippet Props   | Snippet 的配置，会默认透传     |
