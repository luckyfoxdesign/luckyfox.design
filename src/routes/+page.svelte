<!-- src/routes/+page.svelte -->
<script>
    import { t } from "$lib/i18n";
    import { language } from "$lib/stores/language";

    // Get the current language
    let currentLang = $derived($language);
</script>

<svelte:head>
    <title>{$t("about.title")} - Portfolio</title>
</svelte:head>

<div class="relative mb-32">
    <!-- Header Section with scroll reveal animation -->
    <div
        class="scroll-reveal transition-all duration-700 ease-out opacity-100 translate-y-0"
    >
        <div class="mb-16 md:mb-24">
            <h1
                class="font-serif text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8"
            >
                Maksim<br />Sovenkov
            </h1>
            <div
                class="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
                style="color: var(--text-secondary);"
            >
                <p class="text-xl md:text-2xl font-light">{$t("about.role")}</p>
            </div>
        </div>

        <div
            class="rounded-xl p-8 md:p-12 max-w-4xl"
            style="background-color: var(--bg-secondary);"
        >
            <p class="text-xl md:text-2xl font-light leading-relaxed mb-6">
                {$t("about.summary")}
            </p>
            <p
                class="text-xl md:text-2xl font-light leading-relaxed"
                style="color: var(--accent-color);"
            >
                {$t("about.passion")}
            </p>
        </div>
    </div>
</div>
