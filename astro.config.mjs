import { defineConfig } from "astro/config";

import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://audacity.github.io",
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: false
  }), react(), compress(), sitemap()],
  vite: {
    ssr: {
      noExternal: ["@datapunt/matomo-tracker-react", "@datapunt/matomo-tracker-js"]
    }
  },
  redirects: {
    '/3.1.0-video': "https://www.youtube.com/watch?v=HpA138b-J9s",
    '/3.2.0-video': "https://www.youtube.com/watch?v=DTRnDNR9LR8",
    "/3.4.0-video": "https://www.youtube.com/@audacity",
    '/realtime-video': "https://www.youtube.com/watch?v=DTRnDNR9LR8",
    '/errors': "https://support.audacityteam.org/troubleshooting/error-codes",
    '/nightly': "https://nightly.link/audacity/audacity/workflows/build/master",
    '/help/faq': "https://manual.audacityteam.org/man/faq.html",
    '/download/plug-ins/': "https://plugins.audacityteam.org/",
    '/help/documentation/': "https://support.audacityteam.org/",
    '/gitbook-plugins': "https://app.gitbook.com/invite/-MhmG2mhIIHTtQPuHV_k/kY9XD8X03nb2bluFgolK",
    '/devserver': "https://discord.gg/N3XKxzTrq3",
    "/dev": "https://audacity.gitbook.io/dev/",
    '/gitbook-access': "https://app.gitbook.com/invite/-MhmG2mhIIHTtQPuHV_k/acNI2LAF6LtdJW06t4Hc",
    "/about": "/FAQ#team--news",
    "/about/desktop-privacy-notice/": "/desktop-privacy-notice/",
    "/about/license/": "https://github.com/audacity/audacity/blob/master/LICENSE.txt",
    "/about/citations-screenshots-and-permissions/": "https://github.com/audacity/audacity/blob/master/LICENSE.txt",
    "/about/credits/": "https://github.com/audacity/audacity/graphs/contributors",
    "/about/features/": "/FAQ#features",
    "/about/features/recording/": "/FAQ#features",
    "/about/features/export-and-import/": "/FAQ#what-audio-file-formats-are-compatible-with-audacity",
    "/about/features/sound-quality/": "/FAQ#what-audio-quality-is-compatible-with-audacity",
    "/about/features/plug-ins/": "https://plugins.audacityteam.org/",
    "/about/features/editing/": "/FAQ#features",
    "/about/features/effects/": "/FAQ#features",
    "/about/features/accessibility/": "/FAQ#features",
    "/about/features/analysis/": "/FAQ#features",
    "/about/screenshots/": "/FAQ#features",
    "/about/nyquist/": "https://audacity.gitbook.io/dev/scripting/creating-your-own-nyquist-plugins",
    "/about/news/": "/blog",
    "/download/online-safety-when-downloading/": "/FAQ#is-audacity-safe-to-download",
    "/download/source/": "/download",
    "/download/legacy-windows/": "/download/windows",
    "/download/legacy-mac/": "/download/mac",
    "/help/": "https://support.audacityteam.org/",
    "/contact/": "/FAQ#i-have-a-question-or-issue-with-audacity-is-there-a-support-team-i-can-contact",
    "/community/": "https://support.audacityteam.org/community/contributing",
    "/community/users/": "https://support.audacityteam.org/community/contributing",
    "/community/developers/": "https://audacity.gitbook.io/dev",
    "/community/translators/": "https://support.audacityteam.org/community/contributing/translating",
    "/copyright/": "https://github.com/audacity/audacity/blob/master/LICENSE.txt",
    "/Setup-Exit-Codes/": "https://support.audacityteam.org/troubleshooting/error-codes/installation-exit-codes"
  }
});