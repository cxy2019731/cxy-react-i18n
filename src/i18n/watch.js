import { STORE_LANG_KEY } from '../configs/vars';
/**
 * 根据当前lang的存在性重置lang
 */
export const watch_lang_message = {
	fn: ({ lang, message }, o, f) => {
		if (lang && !message[lang] && f.cuVal.i18nLangKeys[0]) {
			f.refCtx.mr.setLang(f.cuVal.i18nLangKeys[0]);
		}
	},
	depKeys: ['lang', 'message'],
	compare: true,
	immediate: true,
};
/**
 * 根据lang变化存储本地
 */
export const watch_lang = {
	fn: ({ lang }, o, f) => {
		if (lang) {
			console.log(lang);
			localStorage.setItem(STORE_LANG_KEY, lang);
		} else {
			localStorage.removeItem(STORE_LANG_KEY);
		}
	},
	depKeys: ['lang'],
	compare: true,
	immediate: true,
};
