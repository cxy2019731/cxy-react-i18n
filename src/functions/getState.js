import { getState } from "concent";
import { MODEL_NAME } from "../configs/vars";

/**
 * 获取当前的语言取值
 * @returns string
 */
function getLang() {
  return getState(MODEL_NAME).lang;
}

/**
 * 获取当前所有语言包
 * @returns object
 */
function getMessage() {
  return getState(MODEL_NAME).message;
}

export default {
  // 原始
  getLang,
  getMessage,
  // 简写
  gl: getLang,
  gm: getMessage,
};
