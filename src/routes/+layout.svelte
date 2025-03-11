<!-- src/routes/+layout.svelte -->
<script>
    import { page } from "$app/stores";
    import { onMount, onDestroy } from "svelte";
    import { theme, toggleTheme } from "$lib/stores/theme";
    import { language, setLanguage, LANGUAGES } from "$lib/stores/language";
    import "../app.css";

    let { children } = $props();

    // Reactive variables using $state in Svelte 5
    let visible = $state(false);
    let initialized = $state(false);

    // Subscribe to stores
    let currentTheme = $derived($theme);
    let currentLang = $derived($language);

    // Localization for navigation items and theme text
    const navItems = {
        [LANGUAGES.EN]: [
            { href: "/", label: "About" },
            { href: "/projects", label: "Projects" },
        ],
        [LANGUAGES.RU]: [
            { href: "/", label: "Обо мне" },
            { href: "/projects", label: "Проекты" },
        ],
    };

    const themeText = {
        [LANGUAGES.EN]: {
            dark: "Dark",
            light: "Light",
        },
        [LANGUAGES.RU]: {
            dark: "Темная",
            light: "Светлая",
        },
    };

    onMount(() => {
        // Initialize with a smooth fade-in
        initialized = true;
        setTimeout(() => {
            visible = true;
        }, 50);
    });

    // Theme toggle with animation
    function handleThemeToggle() {
        // Create overlay for animation
        const overlay = document.createElement("div");
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: ${currentTheme === "light" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)"};
            z-index: 9999;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease-out;
        `;

        document.body.appendChild(overlay);

        // Animation sequence
        requestAnimationFrame(() => {
            overlay.style.opacity = "0.3";

            // Toggle theme after brief delay
            setTimeout(() => {
                toggleTheme();

                setTimeout(() => {
                    overlay.style.opacity = "0";

                    // Remove overlay after fade-out
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                    }, 500);
                }, 300);
            }, 10);
        });
    }
</script>

{#if initialized}
    <div
        class="min-h-screen transition-opacity duration-700 ease-out {visible
            ? 'opacity-100'
            : 'opacity-0'} flex flex-col px-4 py-12 md:py-8"
        style="background-color: var(--bg-primary); color: var(--text-primary);"
    >
        <!-- Header Navigation -->
        <header
            class="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b"
            style="background-color: var(--header-bg); border-color: var(--border-color);"
        >
            <div
                class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"
            >
                <div class="flex items-center space-x-1">
                    <span class="text-xl font-medium tracking-tight"
                        >Portfolio</span
                    >
                    <span class="text-xl" style="color: var(--accent-color);"
                        >.</span
                    >
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-8">
                    {#each navItems[currentLang] as item}
                        <a
                            href={item.href}
                            class="text-sm tracking-wide font-light transition-colors duration-300"
                            style="color: {$page.url.pathname === item.href
                                ? 'var(--accent-color)'
                                : 'var(--text-secondary)'}"
                        >
                            {item.label}
                        </a>
                    {/each}
                </nav>

                <!-- Language and Theme Toggles -->
                <div class="flex items-center space-x-4">
                    <!-- Theme Toggle -->
                    <button
                        on:click={handleThemeToggle}
                        class="flex items-center space-x-1 px-2 py-1 rounded-full transition-colors duration-300 cursor-pointer"
                        style="background-color: var(--bg-tertiary)"
                        aria-label={currentTheme === "light"
                            ? themeText[currentLang]?.dark || "Dark Theme"
                            : themeText[currentLang]?.light || "Light Theme"}
                    >
                        <span class="text-xs">
                            {currentTheme === "light" ? "🌙" : "☀️"}
                        </span>
                        <span class="text-xs hidden sm:inline">
                            {currentTheme === "light"
                                ? themeText[currentLang]?.dark || "Dark"
                                : themeText[currentLang]?.light || "Light"}
                        </span>
                    </button>

                    <!-- Language Toggle -->
                    <div class="flex items-center space-x-2">
                        <button
                            on:click={() => setLanguage(LANGUAGES.EN)}
                            class="text-sm tracking-widest font-light transition-colors duration-300 cursor-pointer"
                            style="color: {currentLang === LANGUAGES.EN
                                ? 'var(--text-primary)'
                                : 'var(--text-secondary)'};
                               font-weight: {currentLang === LANGUAGES.EN
                                ? '500'
                                : '300'}"
                            aria-label="Switch to English"
                        >
                            EN
                        </button>
                        <span style="color: var(--text-secondary)">|</span>
                        <button
                            on:click={() => setLanguage(LANGUAGES.RU)}
                            class="text-sm tracking-widest font-light transition-colors duration-300 cursor-pointer"
                            style="color: {currentLang === LANGUAGES.RU
                                ? 'var(--text-primary)'
                                : 'var(--text-secondary)'};
                               font-weight: {currentLang === LANGUAGES.RU
                                ? '500'
                                : '300'}"
                            aria-label="Переключить на русский"
                        >
                            RU
                        </button>
                    </div>
                </div>
            </div>
        </header>

        <!-- Mobile Navigation -->
        <div
            class="fixed bottom-0 left-0 w-full z-50 md:hidden backdrop-blur-md border-t"
            style="background-color: var(--header-bg); border-color: var(--border-color);"
        >
            <div class="flex justify-around items-center py-3">
                {#each navItems[currentLang] as item}
                    <a
                        href={item.href}
                        class="px-4 py-2 text-sm tracking-wide font-light transition-colors duration-300"
                        style="color: {$page.url.pathname === item.href
                            ? 'var(--accent-color)'
                            : 'var(--text-secondary)'}"
                    >
                        {item.label}
                    </a>
                {/each}

                <!-- Mobile Theme Toggle -->
                <button
                    on:click={handleThemeToggle}
                    class="p-2 rounded-full"
                    aria-label={currentTheme === "light"
                        ? "Dark Theme"
                        : "Light Theme"}
                >
                    <span class="text-sm">
                        {currentTheme === "light" ? "🌙" : "☀️"}
                    </span>
                </button>
            </div>
        </div>

        <!-- Page Content -->
        <div class="w-full max-w-6xl mx-auto mt-24">
            {@render children()}
        </div>
    </div>
{:else}
    <!-- Loading placeholder (invisible) -->
    <div class="min-h-screen"></div>
{/if}
