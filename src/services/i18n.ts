import { I18n } from 'i18n-js'
import { en } from './locales/en-US'
import { pt } from './locales/pt-BR'

const i18n = new I18n({
  pt,
  en
})

export const setLanguageToI18n = (language: string | null) => {
  i18n.locale = "pt"
  if(language === "en-US"){
    i18n.locale = "en"
  }
}

export const translate = (key: string, params = {}) => i18n.t(key, params)