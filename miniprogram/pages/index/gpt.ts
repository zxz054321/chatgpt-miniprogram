import { useWebsocket } from "../../lib/websocket";
import type { Message } from "./conversation";

export function useGPT(conversation: Message[]) {
  const { send, handleMessage, handleClose, handleError } = useWebsocket(
    conversation.map((msg) => msg.slice(0, 2))
  );

  return { send, handleMessage, handleClose, handleError };
}
