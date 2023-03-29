type Role = "assistant" | "user";
type Message = [role: Role, content: string, meta: { isPending: boolean; isFailed: boolean }];

class Conversation {
  private page: WechatMiniprogram.Page.Instance<any, any>;

  constructor(page: WechatMiniprogram.Page.Instance<any, any>) {
    this.page = page;
  }

  addUserMessage(prompt: string) {
    this.addMessage("user", prompt);
  }

  addAssistantMessage(content: string) {
    this.addMessage("assistant", content);
  }

  appendAssistantMessage(piece: string) {
    this.updateLatestAssistantMessage((msg) => {
      msg[1] += piece;
      msg[2].isPending = false;
    });
  }

  setAssistantMessageFailed() {
    this.updateLatestAssistantMessage((msg) => {
      msg[2].isPending = false;
      msg[2].isFailed = true;
    });
  }

  private updateLatestAssistantMessage(modifier: (msg: Message) => void) {
    const i = this.page.data.$conversation.length - 1;
    const msg = this.page.data.$conversation[i] as Message;

    modifier(msg);

    const key = `$conversation[${i}]`;
    this.page.setData({ [key]: msg });
  }

  private addMessage(role: Role, content: string) {
    this.page.data.$conversation.push([role, content.trim(), { isPending: !content }]);

    this.page.setData({
      $conversation: this.page.data.$conversation,
    });
  }
}

let conversation: Conversation;

function useConversation(page: WechatMiniprogram.Page.Instance<any, any>) {
  if (!conversation) {
    conversation = new Conversation(page);
  }
  return conversation;
}

export type { Message };
export { useConversation };
