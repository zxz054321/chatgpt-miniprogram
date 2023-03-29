export async function useMsgSecCheck(content: string) {
  const res: any = await wx.cloud.callFunction({
    name: "msgSecCheck",
    data: { content },
  });

  return { pass: res.result.result.suggest === "pass" };
}
