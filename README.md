# ChatGPT 微信小程序

ChatGPT 是一个基于大型语言模型的自然语言处理平台，提供了强大的语言处理和自然语言生成功能。本微信小程序实现了 ChatGPT 官网移动版本的对话功能，方便用户在微信上使用 ChatGPT 进行更多类型的自然语言交互。

## 特点

- 基于官方 GPT-3.5 API 的强大语言生成和对话功能
- 尽量接近官网移动版本的界面和体验
- 接入微信内容安全审查接口（云开发）
- 基于 WebSocket 实现高效的流式传输
- 点击对话内容自动复制到剪贴板
- 支持转发小程序到聊天和分享小程序到朋友圈

## 构建说明

本微信小程序采用原生开发，使用 TypeScript 和 Less 进行编写，并使用了 TDesign 组件库。

1. 下载代码到本地
2. 在项目根目录中执行 `npm install`
3. 在微信开发者工具中进行 `构建 npm` 操作

### 配置 appid

请填写 `/project.config.json` 文件中的 `appid` 字段。

### 配置 WebSocket

请填写 `/miniprogram/lib/websocket.ts` 文件中的 `url` 字段。

```tsx
const socketTask = wx.connectSocket({
  url: "wss://yourdomain",
});
```

## 注意事项

- 使用须遵循相应的法律法规，并承担相应责任

## 演示

- 在微信中搜索 `GPro` 小程序
- 扫描下方小程序码体验

![download](https://user-images.githubusercontent.com/7540550/228626291-65ccbbb7-ee74-497b-b73d-628fabe876a5.jpg)
