# ChatGPT 微信小程序

ChatGPT 是一个基于大型语言模型的自然语言处理平台，提供了强大的自然语言处理和自然语言生成功能。本微信小程序实现了 ChatGPT 官网移动版本的对话功能，方便用户在微信上使用 ChatGPT 进行各种类型的自然语言交互。

本文档由 ChatGPT 生成和润色。

## 主要特点

- 基于官方 GPT-3.5 API 的强大的语言生成和对话功能
- 界面和用户体验尽可能接近官网移动版本
- 接入微信内容安全审查接口（云开发），确保内容的合规和安全
- 使用 WebSocket 实现高效的流式传输，提升通信效率
- 点击对话内容自动复制到剪贴板，方便用户使用
- 支持转发小程序到聊天，方便用户与好友分享
- 支持分享小程序到朋友圈，方便扩大用户规模

## 构建说明

本微信小程序采用原生开发，使用 TypeScript 和 Less 进行编写，并使用了 TDesign 组件库。

### 下载和安装

1. 克隆本项目到本地。
2. 在项目根目录中运行 `npm install`，安装所需的依赖项。

### 构建和运行

1. 在微信开发者工具中，选择“小程序项目”。
2. 单击“导入项目”并选择本项目的根目录。
3. 在微信开发者工具的“工具”菜单中，选择“构建 npm”以生成 `miniprogram_npm` 文件夹。
4. 点击“编译”按钮以在微信开发者工具中预览小程序。

### 配置

在开始使用之前，请根据需要配置以下内容：

#### appid

在 `/project.config.json` 文件中设置 `appid` 字段以指定小程序的 AppID。

#### WebSocket

在 `/miniprogram/lib/websocket.ts` 文件中设置 `url` 字段以指定 WebSocket 的 URL。例如：

```tsx
const socketTask = wx.connectSocket({
  url: "wss://yourdomain",
});
```

## 注意事项

- 使用须遵循相应的法律法规，并承担相应的法律责任

## 演示

- 在微信中搜索 `GPro` 小程序
- 扫描下方的小程序码体验

![download](https://user-images.githubusercontent.com/7540550/228626291-65ccbbb7-ee74-497b-b73d-628fabe876a5.jpg)
