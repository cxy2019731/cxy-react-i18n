import { reducer } from "concent";
import { MODEL_NAME } from "../configs/vars";

/**
 * 切换语言,必须是已存在的语言包
 * @param {string} langKey 语言的key
 * @returns void
 */
function setLang(langKey) {
  return reducer[MODEL_NAME].setLang(langKey);
}

/**
 * 设置语言包数据,覆盖性设置,常用于首次初始化语言包
 * @param {object} messages 语言包信息
 * @returns void
 */
function setMessage(messages) {
  return reducer[MODEL_NAME].setMessage(messages);
}

/**
 * 批量新增语言包,新语言包需要包含已有语言包内的转换文本键值对
 * @param {object} messageItems 新语言包信息
 * @returns void
 */
function addMessageItem(messageItems) {
  return reducer[MODEL_NAME].addMessageItem(messageItems);
}

/**
 * 删除一个语言包
 * @param {string} messageKey 语言包的key
 * @returns void
 */
function deleteMessageItem(messageKey) {
  return reducer[MODEL_NAME].deleteMessageItem(messageKey);
}

/**
 * 为已存在的语言包添加新的转换文本,必须包含已有语言包的所有key
 * @param {object} mesageItems 已有语言包的新文本信息
 * @returns void
 */
function addMessageText(mesageItems) {
  return reducer[MODEL_NAME].addMessageText(mesageItems);
}

/**
 * 修改已有语言包内指定key的转义文本
 * @param {object} mesageItems 已有语言包的文本信息
 * @returns void
 */
function updateMessageText(mesageItems) {
  return reducer[MODEL_NAME].updateMessageText(mesageItems);
}

/**
 * 删除语言包内指定的key的转换文本,全部语言包的指定key的内容都会删除
 * @param {string} messageTextKey 语言包内已存在的文本key
 * @returns void
 */
function deleteMessageText(messageTextKey) {
  return reducer[MODEL_NAME].deleteMessageText(messageTextKey);
}

export default {
  // 原始
  setLang,
  setMessage,
  addMessageItem,
  deleteMessageItem,
  addMessageText,
  updateMessageText,
  deleteMessageText,
  // 简写
  sl: setLang,
  sm: setMessage,
  ami: addMessageItem,
  dmi: deleteMessageItem,
  at: addMessageText,
  ut: updateMessageText,
  dt: deleteMessageText,
};
