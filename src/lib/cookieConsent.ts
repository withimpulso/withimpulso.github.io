const CONSENT_STORAGE_KEY = "impulso-cookie-consent-v1";
const ANALYTICS_ID = "G-VCM1W5MPS6";

export const COOKIE_SETTINGS_EVENT = "impulso:open-cookie-settings";

export type CookieConsentChoice = {
  analytics: boolean;
  updatedAt: string;
};

type AnalyticsWindow = Window & {
  dataLayer?: unknown[][];
  gtag?: (...args: unknown[]) => void;
  [key: string]: unknown;
};

export const readCookieConsent = (): CookieConsentChoice | null => {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const parsed: unknown = JSON.parse(stored);
    if (typeof parsed !== "object" || parsed === null || !("analytics" in parsed)) return null;
    if (typeof parsed.analytics !== "boolean") return null;

    return {
      analytics: parsed.analytics,
      updatedAt: "updatedAt" in parsed && typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
};

export const saveCookieConsent = (analytics: boolean): CookieConsentChoice => {
  const choice = { analytics, updatedAt: new Date().toISOString() };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(choice));
  } catch {
    // Keep the choice for this page session when browser storage is unavailable.
  }
  return choice;
};

export const applyAnalyticsConsent = (analytics: boolean) => {
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow[`ga-disable-${ANALYTICS_ID}`] = !analytics;

  if (!analyticsWindow.gtag) return;
  analyticsWindow.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
  });
};

export const loadGoogleAnalytics = () => {
  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow[`ga-disable-${ANALYTICS_ID}`] = false;

  if (document.querySelector("script[data-impulso-analytics]")) {
    analyticsWindow.gtag?.("consent", "update", { analytics_storage: "granted" });
    return;
  }

  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
  analyticsWindow.gtag("consent", "default", { analytics_storage: "denied" });
  analyticsWindow.gtag("consent", "update", { analytics_storage: "granted" });
  analyticsWindow.gtag("js", new Date());
  analyticsWindow.gtag("config", ANALYTICS_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  script.dataset.impulsoAnalytics = "true";
  document.head.appendChild(script);
};