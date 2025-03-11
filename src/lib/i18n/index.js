// src/lib/i18n/index.js
import { derived } from "svelte/store";
import { language } from "$lib/stores/language";

// Translations
import en from "./en";
import ru from "./ru";

// All translations in one object
const translations = {
  en,
  ru,
};

// Create a derived store that updates when language changes
export const t = derived(language, ($language) => {
  // Return a function that gets nested translations by key path
  return function (key, params = {}) {
    // Split path by dots
    const keys = key.split(".");

    // Navigate through the nested translations object
    let value = translations[$language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }

    // If no translation found, return the key
    if (value === undefined) return key;

    // If the value is a string, replace parameters
    if (typeof value === "string") {
      return Object.entries(params).reduce(
        (text, [param, replacement]) =>
          text.replace(new RegExp(`{${param}}`, "g"), replacement),
        value,
      );
    }

    return value;
  };
});

// Export translations for direct access if needed
export { translations };
