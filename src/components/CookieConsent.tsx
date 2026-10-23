import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/lib/i18n";
import {
  applyAnalyticsConsent,
  COOKIE_SETTINGS_EVENT,
  loadGoogleAnalytics,
  readCookieConsent,
  saveCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookieConsent";

const CookieConsent = () => {
  const { t } = useLanguage();
  const [consent, setConsent] = useState<CookieConsentChoice | null>(readCookieConsent);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(consent?.analytics ?? false);

  useEffect(() => {
    if (consent?.analytics) {
      loadGoogleAnalytics();
    } else if (consent) {
      applyAnalyticsConsent(false);
    }
  }, [consent]);

  useEffect(() => {
    const openSettings = () => {
      setAnalyticsEnabled(readCookieConsent()?.analytics ?? false);
      setSettingsOpen(true);
    };

    window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings);
  }, []);

  const saveChoice = (analytics: boolean) => {
    setConsent(saveCookieConsent(analytics));
    setAnalyticsEnabled(analytics);
    setSettingsOpen(false);
  };

  return (
    <>
      {!consent && (
        <aside className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background shadow-[0_-8px_32px_rgba(0,0,0,0.14)]">
          <div className="container flex flex-col gap-5 py-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h2 className="font-semibold text-foreground">{t("consent.title")}</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {t("consent.description")} {" "}
                <a className="underline underline-offset-4 hover:text-foreground" href="/privacy">
                  {t("consent.privacyLink")}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" onClick={() => saveChoice(false)}>
                {t("consent.reject")}
              </Button>
              <Button variant="outline" onClick={() => setSettingsOpen(true)}>
                {t("consent.settings")}
              </Button>
              <Button onClick={() => saveChoice(true)}>{t("consent.accept")}</Button>
            </div>
          </div>
        </aside>
      )}

      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("consent.settingsTitle")}</DialogTitle>
            <DialogDescription>{t("consent.settingsDescription")}</DialogDescription>
          </DialogHeader>
          <div className="space-y-5 py-3">
            <div className="flex items-start justify-between gap-6 border-b border-border pb-5">
              <div>
                <p className="font-medium text-foreground">{t("consent.essentialTitle")}</p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {t("consent.essentialDescription")}
                </p>
              </div>
              <Switch checked disabled aria-label={t("consent.essentialTitle")} />
            </div>
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-medium text-foreground">{t("consent.analyticsTitle")}</p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  {t("consent.analyticsDescription")}
                </p>
              </div>
              <Switch
                checked={analyticsEnabled}
                onCheckedChange={setAnalyticsEnabled}
                aria-label={t("consent.analyticsTitle")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSettingsOpen(false)}>
              {t("consent.cancel")}
            </Button>
            <Button onClick={() => saveChoice(analyticsEnabled)}>{t("consent.save")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;