import { russianMessage } from "./russianMessage";
import { uzbekMessage } from "./uzbekMessage";
import polyglotI18nProvider from "ra-i18n-polyglot";

const messages = {
  ru: russianMessage,
  uz: uzbekMessage,
};
export const i18nProvider = polyglotI18nProvider((locale) => {
  return messages[locale];
});
console.log(i18nProvider.getLocale());
