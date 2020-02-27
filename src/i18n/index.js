import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

import zhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'

import zhCN from './langs/zh-CN'
import enUS from './langs/en-US'

Vue.use(VueI18n)

export const messages = {
	'zh-CN': {
		'_lang': '简体中文',
		...zhCN,
		...zhCNLocale
	},
	'en-US': {
		'_lang': 'English',
		...enUS,
		...enLocale
	}
}

export default new VueI18n({
	locale: Cookies.get('language') || 'zh-CN',
	// locale: localStorage.lang || 'zh-CN',
	messages
})
