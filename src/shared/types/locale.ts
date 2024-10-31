type SupportedLocale = 'en' | 'zh';

type LocaleValue<T> = Record<SupportedLocale, T>;

type SiteConfig = {
  title: string;
  description: string;
};

type NavConfig = {
  home: string;
  projects: string;
  contributing: string;
  about: string;
};

type LocaleConfig = {
  site: SiteConfig;
  navs: NavConfig;
};

type NavKey = keyof NavConfig;

export type { SupportedLocale, LocaleValue, LocaleConfig, NavKey };
