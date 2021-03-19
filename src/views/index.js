import React from "react";
import { useConcent } from "concent";
import { MODEL_NAME } from "../configs/vars";

function RenderI18nKeyToText(props) {
  const { i18nKey } = props;

  const { moduleComputed } = useConcent({ module: MODEL_NAME });

  const { i18nMessage } = moduleComputed;

  if (i18nKey && i18nMessage[i18nKey]) {
    return i18nMessage[i18nKey];
  } else {
    return i18nKey;
  }
}

/**
 * 转换指定key的国际化文本
 * @param {string} i18nKey 国际化对应key
 * @returns string
 */
const renderI18nKeyToText = (i18nKey) => {
  return React.createElement(RenderI18nKeyToText, { i18nKey });
};

export default renderI18nKeyToText;
