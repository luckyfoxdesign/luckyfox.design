<!-- src/routes/projects/+page.svelte -->
<script>
    import { theme } from "$lib/stores/theme";
    import { language } from "$lib/stores/language";
    import { t } from "$lib/i18n";
    import LinkIcon from "$lib/components/LinkIcon.svelte";

    // Get the current theme and language
    let currentTheme = $derived($theme);
    let currentLang = $derived($language);

    // Get projects from translations
    let projects = $derived($t("projects.list") || []);
    let sectionTitle = $derived(
        $t("projects.personalProjects") || "Personal Projects",
    );
</script>

<div class="relative">
    <h2
        class="font-serif text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-24 opacity-90"
    >
        <!-- Split the title for animation, if it has multiple words -->
        {#if sectionTitle.includes(" ")}
            <span class="block overflow-hidden">
                <span
                    class="block transform translate-y-0 transition-transform duration-1000 ease-out delay-100"
                >
                    {sectionTitle.split(" ")[0]}
                </span>
            </span>
            <span class="block overflow-hidden">
                <span
                    class="block transform translate-y-0 transition-transform duration-1000 ease-out delay-300"
                >
                    {sectionTitle.split(" ")[1]}
                </span>
            </span>
        {:else}
            <span class="block overflow-hidden">
                <span
                    class="block transform translate-y-0 transition-transform duration-1000 ease-out delay-100"
                >
                    {sectionTitle}
                </span>
            </span>
        {/if}
    </h2>

    <ul class="space-y-16 md:space-y-24 mb-32">
        {#each projects as project, i}
            <li class="group">
                <div class="flex items-baseline space-x-6">
                    <span
                        class="text-xs md:text-3xl font-mono text-gray-300 tracking-wider opacity-60"
                    >
                        {(i + 1).toString().padStart(2, "0")}
                    </span>
                    <div class="space-y-2">
                        <h3
                            class="text-2xl md:text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[var(--accent-color)]"
                            style="color: var(--text-primary);"
                        >
                            {project.title}
                        </h3>
                        <p
                            class="text-base md:text-lg max-w-3xl font-light leading-relaxed"
                            style="color: var(--text-secondary);"
                        >
                            {project.description}
                        </p>
                        {#if project.links}
                            <div class="flex flex-wrap gap-4 mt-3">
                                {#each project.links as link}
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="inline-flex items-center gap-1.5 text-lg text-[var(--accent-color)] visited:text-[var(--visited-link-color)] visited:opacity-85 hover:text-[var(--accent-color)] hover:opacity-100 transition-colors duration-300 group"
                                    >
                                        <LinkIcon url={link.url} size={16} />
                                        <span class="hover:underline"
                                            >{link.name}</span
                                        >
                                    </a>
                                {/each}
                            </div>
                        {/if}
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</div>
