import i18next from "i18next";
import I18NextVue from "i18next-vue";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          bookTitle: "Escape boek - Game Over",
          appDescription: "Save your progress by tracking your collected items and current location.",
          bookDescription: "Companion application for: ",
          byText: "by",
          sourceCodeLicensedText: "The source code is licensed with",
          websiteLicensedText: "The website content is licensed with",
          pageAbout: "About",
          pageInventory: "Inventory",
          currentLocation: "Current location",
        },
      },
      nl: {
        translation: {
          bookTitle: "Escape boek - Game Over",
          appDescription: "Bewaar uw voortgang door uw verzamelde items en huidige locatie bij te houden.",
          bookDescription: "Begeleidende toepassing voor: ",
          byText: "door",
          sourceCodeLicensedText: "De broncode is gelicentieerd met",
          websiteLicensedText: "De inhoud van de website is gelicentieerd met",
          pageAbout: "Over de app",
          pageInventory: "Inventaris",
          currentLocation: "Huidige locatie",
        },
      },
    },
  });

export default function (app) {
  app.use(I18NextVue, { i18next });
  return app;
}
