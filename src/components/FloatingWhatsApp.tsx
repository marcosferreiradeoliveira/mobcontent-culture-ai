import { trackEvent, trackButtonClick } from "@/utils/analytics";
import { getWhatsAppUrl, useLocale } from "@/i18n/LocaleContext";

const FLOATING_LOCATION = "floating_button";

const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click", {
    event_category: "conversion",
    event_label: "Falar pelo WhatsApp",
    location: FLOATING_LOCATION,
    button_type: "floating",
  });
  trackButtonClick("whatsapp_click", "conversion", { location: FLOATING_LOCATION });
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "whatsapp_click",
      eventCategory: "conversion",
      eventLabel: "Falar pelo WhatsApp",
      location: FLOATING_LOCATION,
    });
  }
};

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 sm:w-8 sm:h-8 flex-shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.1-.473-.148-.673.15-.197.295-.771.961-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.761-1.66-2.059-.174-.297-.018-.458.13-.606.136-.135.298-.353.446-.52.146-.181.194-.296.297-.494.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.173-.008-.371-.01-.57-.01-.2 0-.523.074-.797.36-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.1 3.195 5.1 4.485.714.3 1.27.489 1.704.625.714.227 1.365.195 1.88.121.574-.09 1.758-.719 2.006-1.413.248-.691.248-1.289.173-1.413-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016a9.77 9.77 0 01-5.469-1.695l-.37-.225-3.75.975 1.005-3.645-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 017.022 2.9 9.85 9.85 0 01-1.43 14.896 9.8 9.8 0 01-4.69 1.267M12 2.165A9.864 9.864 0 002.929 17.25a.75.75 0 01-.09.38L1.25 22.5l4.92-1.3a.75.75 0 01.36-.09 9.864 9.864 0 009.94-9.94 9.864 9.864 0 00-9.94-9.94A9.864 9.864 0 002.25 12v.67a.75.75 0 01-1.5 0V12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
  </svg>
);

export const FloatingWhatsApp = () => {
  const { t } = useLocale();

  return (
    <a
      href={getWhatsAppUrl(t.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex items-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 font-semibold text-xs sm:text-sm"
      aria-label={t.whatsapp.ariaLabel}
    >
      <WhatsAppIcon />
      <span>{t.whatsapp.label}</span>
    </a>
  );
};
