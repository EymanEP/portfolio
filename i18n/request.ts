import { getRequestConfig } from "next-intl/server";
import { Locale, routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale: string = (await requestLocale) ?? routing.defaultLocale;

  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === "en"
        ? import("@/messages/en.json")
        : locale === "es"
          ? import("@/messages/es.json")
          : import("@/messages/bg.json"))
    ).default,
  };
});
