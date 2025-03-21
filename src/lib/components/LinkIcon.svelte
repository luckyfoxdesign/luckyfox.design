<!-- src/lib/components/LinkIcon.svelte -->
<script>
    export let url = "";
    export let size = 14;

    // Determine icon type based on URL
    $: iconType = getIconType(url);

    function getIconType(url) {
        if (!url) return "default";

        const urlLower = url.toLowerCase();

        if (urlLower.includes("linkedin.com")) return "linkedin";
        if (urlLower.includes("github.com")) return "github";
        if (urlLower.includes("behance.net")) return "behance";
        if (urlLower.includes("dribbble.com")) return "dribbble";
        if (urlLower.includes("youtube.com") || urlLower.includes("youtu.be"))
            return "youtube";
        if (urlLower.includes("twitter.com") || urlLower.includes("x.com"))
            return "twitter";
        if (urlLower.includes("codepen.io")) return "codepen";
        if (urlLower.includes("medium.com")) return "medium";
        if (urlLower.includes("figma.com")) return "figma";
        if (urlLower.includes("instagram.com")) return "instagram";
        if (urlLower.includes("npmjs.com")) return "npm";

        // Check for demo or live site links
        if (
            urlLower.includes("demo") ||
            urlLower.includes("live") ||
            urlLower.includes("preview")
        ) {
            return "demo";
        }

        // Return default external link icon for other URLs
        return "default";
    }
</script>

{#if iconType === "linkedin"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
        />
    </svg>
{:else if iconType === "github"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        />
    </svg>
{:else if iconType === "behance"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"
        />
    </svg>
{:else if iconType === "dribbble"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-6.953.666-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z"
        />
    </svg>
{:else if iconType === "youtube"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
        />
    </svg>
{:else if iconType === "figma"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M15.852 8.981h-4.588v-4.587h4.588c1.261 0 2.294 1.033 2.294 2.294s-1.033 2.293-2.294 2.293zm-4.587 2.293h4.587c1.261 0 2.294 1.032 2.294 2.293s-1.033 2.294-2.294 2.294h-4.587v-4.587zm0 6.88c0 1.261 1.032 2.294 2.293 2.294s2.294-1.033 2.294-2.294v-2.293h-4.587v2.293zm-2.294-9.173h-4.588c-1.261 0-2.294-1.033-2.294-2.294s1.033-2.294 2.294-2.294h4.588v4.588zm-4.587 2.293h4.587v4.587h-4.587c-1.261 0-2.294-1.033-2.294-2.294s1.033-2.293 2.294-2.293z"
        />
    </svg>
{:else if iconType === "demo"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M13 10v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zm-1-9c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10z"
        />
    </svg>
{:else}
    <!-- Default external link icon -->
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        class="inline-block align-text-bottom"
    >
        <path
            d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
        />
    </svg>
{/if}
