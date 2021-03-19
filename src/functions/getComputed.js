import { getComputed as ccGetComputed } from "concent";
import { MODEL_NAME } from "../configs/vars";

/**
 * 获取计算属性的值
 * @param {string} computedKey 已存在的计算属性name
 * @returns any
 */
function getComputed(computedKey) {
  return ccGetComputed(MODEL_NAME)[computedKey];
}

export default {
  // 原始
  getComputed,
  // 简写
  gc: getComputed,
};
