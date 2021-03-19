/**
 * 根据当前lang的存在性重置lang
 */
export const watch_lang_message = {
  fn: ({ lang, message }, o, f) => {
    if (lang && !message[lang] && f.cuVal.i18nLangKeys[0]) {
      f.refCtx.mr.setLang(f.cuVal.i18nLangKeys[0]);
    }
  },
  depKeys: ["lang", "message"],
  compare: true,
  immediate: true,
};
