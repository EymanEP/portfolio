import {getRequestConfig} from "next-intl/server";
import {routing, Locale} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    let locale: string = await requestLocale ?? routing.defaultLocale;

    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (
            await (locale === 'en' ? import("@/messages/en.json") : import("@/messages/es.json"))
        ).default
    };
});