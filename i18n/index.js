import * as Localisation from "expo-localization";
import i18n from "i18n-js";
import { english } from "./en";
import { frensh } from "./fr";

i18n.translations = {
  ["en-GB"]: english,
  ["fr"]: frensh,
};

i18n.locale = Localisation.locale;
i18n.fallbacks = true;

export default i18n;
