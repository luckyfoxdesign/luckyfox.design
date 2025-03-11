// src/lib/stores/language.js
import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Language constants
export const LANGUAGES = {
  EN: "en",
  RU: "ru",
};

// Default language
const DEFAULT_LANGUAGE = LANGUAGES.EN;

// Initialize from localStorage or use default
function getBrowserLanguage() {
  if (browser) {
    return localStorage.getItem("lang") || DEFAULT_LANGUAGE;
  }
  return DEFAULT_LANGUAGE;
}

// Create the store
const language = writable(getBrowserLanguage());

// Apply language to DOM
function applyLanguage(newLang) {
  if (browser) {
    document.documentElement.lang = newLang;
  }
}

// Subscribe to language changes
if (browser) {
  language.subscribe(applyLanguage);
}

// Function to set language
function setLanguage(newLang) {
  if (!browser) return;

  language.set(newLang);
  localStorage.setItem("lang", newLang);

  // Dispatch event for components
  document.dispatchEvent(
    new CustomEvent("langChanged", { detail: { lang: newLang } }),
  );
}

export { language, setLanguage };
