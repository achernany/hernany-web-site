`LotoBola` hero stage is ready to accept responsive media without changing the page structure again.

Recommended delivery:
- `poster` image for fallback and first paint
- `video.webm` as primary desktop/mobile video source
- `video.mp4` as compatibility fallback
- layered transparent assets only for elements that should feel alive

Suggested asset groups:
- `hero/poster-mobile.webp`
- `hero/poster-tablet.webp`
- `hero/poster-desktop.webp`
- `hero/video-mobile.webm`
- `hero/video-mobile.mp4`
- `hero/video-desktop.webm`
- `hero/video-desktop.mp4`
- `hero/layer-left-desktop.webp`
- `hero/layer-right-desktop.webp`
- `hero/layer-mobile-focus.webp`

What to separate into layers:
- floating UI cards
- logos
- lottery balls
- labels or badges
- any atom that should move with independent parallax depth

Keep full-frame background/base artwork separate from floating layers.
Mobile and desktop can use different posters, videos, and layer compositions.
If a layer should exist only on one breakpoint, we can mount it without affecting the other layout.
