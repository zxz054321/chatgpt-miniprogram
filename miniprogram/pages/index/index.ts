import { useMsgSecCheck } from "../../lib/cloudfunction";
import { useConversation } from "./conversation";
import { useGPT } from "./gpt";

Page({
  data: {
    $conversation: [],
    showStartPage: true,
    isGenerating: false,
    prompt: "",
    keyboardHeight: "0px",
  },

  onLoad() {
    wx.cloud.init();
  },

  onShareAppMessage() {
    return {
      title: "邀您体验免费的 GPT-3.5",
      path: "/pages/index/index",
    };
  },

  onShareTimeline() {
    return {
      title: "邀您体验免费的 GPT-3.5",
    };
  },

  onKeyboardPullUp(event: any) {
    this.setData({ keyboardHeight: event.detail.height + "px" });
  },

  onKeyboardDismiss() {
    this.setData({ keyboardHeight: "0px" });
  },

  onTapExample(event: any) {
    this.setData({ prompt: event.currentTarget.dataset.prompt });
  },

  onTapMessage(event: any) {
    const i = event.currentTarget.dataset.i;
    const content = this.data.$conversation[i][1];

    wx.setClipboardData({ data: content + "\n\n——微信小程序 GPro" });
  },

  async onTapSendButton() {
    this.setData({ isGenerating: true });

    const conversation = useConversation(this);
    const prompt = this.data.prompt.trim();
    if (prompt === "") {
      wx.showToast({ title: "请输入内容", icon: "none" });
      return;
    }

    const { pass } = await useMsgSecCheck(prompt);
    if (!pass) {
      wx.showToast({ icon: "none", title: "请遵守法律法规" });
      return;
    }

    conversation.addUserMessage(prompt);
    conversation.addAssistantMessage("");

    this.setData({ showStartPage: false, prompt: "" });

    const history = this.data.$conversation.slice(0, this.data.$conversation.length - 1);
    const { send, handleMessage, handleClose, handleError } = useGPT(history);
    const final = () => this.setData({ isGenerating: false });

    handleError(() => {
      wx.showToast({ title: "无法连接服务器", icon: "error" });
      conversation.setAssistantMessageFailed();
      final();
    });

    handleClose((res: any) => {
      if (res.code !== 1000) {
        wx.showToast({ title: "服务器连接中断", icon: "error" });
        console.log(res);
      }
      final();
    });

    handleMessage((piece: string) => conversation.appendAssistantMessage(piece));
    send();
  },
});
