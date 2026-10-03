<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->

## 2026-10-03 (pilates grip socks)
- Added `/s/com/best-pilates-grip-socks` (`app/s/com/best-pilates-grip-socks/`), a duplicate of `/s/com/best-toe-socks` with components renamed `BestPilatesGripSocks*`.
- #1 is AURELUNE Happy Full Foot Grip Sock; #2–#5 are Tavi Savvy, Arebesk Classic Crew, ToeSox Full Toe Low Rise, Gaiam Grippy Yoga Socks (prices and review counts from their stores).
- Images live in `public/lp-images-files-videos-fonts/com/best-pilates-grip-socks/images/`; the hero is a collage of all five products.

## 2026-10-03
- `/s/com/best-toe-socks`: #2 pick is now Injinji Ultra Run Crew (replaces Tabio Signature Run) in `app/s/com/best-toe-socks/copy.json` + `media.json`.
- Image `com/best-toe-socks/images/product-2-injinji.jpg` is the official injinji.com dual shot flattened to 436×436 JPG; `product-2-tabio.jpg` removed.
- #3 pick is now Creepers Quarter Crew Merino Toe Socks (replaces Knitido); image `product-3-creepers.jpg` from the creeperssocks.com listing, `product-3-knitido.jpg` removed.

## 2026-10-02
- Added `/s/com/best-toe-socks` (`app/s/com/best-toe-socks/`), a duplicate of `/s/com/primepicks-v2` retargeted to running toe socks with AURELUNE Run Lightweight Mini-Crew as #1 (components renamed `BestToeSocks*`).
- Angle/features come from the Aurelune product page (five-toe blister prevention, toe splay, CoolMax, 200-needle knit, BOGO deal, 90-day returns); `video` block type dropped.
- Assets in `public/lp-images-files-videos-fonts/com/best-toe-socks/images/`; hero banners and article images are composites built from the product shots.

## 2026-10-01
- Added `/s/com/sleeping-2` (`app/s/com/sleeping-2/`), a duplicate of `/s/com/primepicks-v2` retargeted to side-sleeper pillows with AURELUNE Cloud as #1 (components renamed `Sleeping2*`).
- The `video` article block type was dropped (no pillow videos); article media are Aurelune listing images in `public/lp-images-files-videos-fonts/com/sleeping-2/images/`, competitor images reused from `com/sleeping/images/`.
- Added `/s/com/sleeping` (`app/s/com/sleeping/`), a duplicate of the `/s/com/shilajit` top-10 comparison template retargeted to side-sleeper pillows, with AURELUNE Cloud as the #1 pick.
- New `SleepingTopPick` spotlight section after the top 3 cards; `SleepingProductCard` gains `featured` ring and `availabilityNote` (replaces the Amazon badge for official-store-only products).
- Assets are self-hosted in `public/lp-images-files-videos-fonts/com/sleeping/images/` (shared UI icons copied from `com/shilajit/images`); favicon at `favicons/sleeping.svg`.

## 2026-03-18
- Replaced the root `app/page.tsx` redirect with a `next.config.js` redirect after a reported Turbopack runtime crash on `/`.
- Kept the landing page at `app/s/adv/cellular-energy-discovery/page.tsx`, left global font ownership in `app/globals.css`, added `public/fonts/`, removed delayed reveal/fade behavior, moved the runnable app/config files under `workspace/`, and enlarged the hair-transplant section image.
- Added `workspace/README.md` and expanded workspace memory docs so the workspace folder is both the canonical repo-learning hub and the actual app home alongside SOUL/MEMORY/DECISIONS/PATTERNS/DEBUGGING/TODO.




</changelog>
