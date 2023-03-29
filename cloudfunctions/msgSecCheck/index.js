"use strict";

const cloud = require("wx-server-sdk");

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  try {
    let result = await cloud.openapi.security.msgSecCheck({
      openid: wxContext.OPENID,
      version: 2,
      scene: 1,
      content: event.content,
    });

    result.openid = wxContext.OPENID;

    return result;
  } catch (err) {
    return err;
  }
};
