// src/lib/stores/theme.js
import { writable } from "svelte/store";
import { browser } from "$app/environment";

// Функция для получения темы из localStorage
function getBrowserTheme() {
  if (browser) {
    return localStorage.getItem("theme") || "dark";
  }
  return "dark";
}

// Создаем store с начальным значением
const theme = writable(getBrowserTheme());

// Применение темы к DOM
function applyTheme(newTheme) {
  if (browser) {
    if (newTheme === "light") {
      document.documentElement.classList.add("light-theme");
      // Обновляем переменную для шапки
      document.documentElement.style.setProperty(
        "--header-bg",
        "rgba(245, 245, 247, 0.7)",
      );
    } else {
      document.documentElement.classList.remove("light-theme");
      // Обновляем переменную для шапки
      document.documentElement.style.setProperty(
        "--header-bg",
        "rgba(23, 29, 35, 0.7)",
      );
    }

    // Устанавливаем CSS-переменную с текущей темой
    document.documentElement.style.setProperty("--current-theme", newTheme);
  }
}

// Функция для установки темы
function setTheme(newTheme) {
  theme.set(newTheme);

  if (browser) {
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);

    // Событие для компонентов
    document.dispatchEvent(
      new CustomEvent("themeChanged", { detail: { theme: newTheme } }),
    );
  }
}

// Функция для переключения темы
function toggleTheme() {
  theme.update((current) => {
    const newTheme = current === "dark" ? "light" : "dark";
    if (browser) {
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);

      // Событие для компонентов
      document.dispatchEvent(
        new CustomEvent("themeChanged", { detail: { theme: newTheme } }),
      );
    }
    return newTheme;
  });
}

export { theme, setTheme, toggleTheme };
