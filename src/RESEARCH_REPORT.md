# Research Report: ScrollTeamEXP Component

## Executive Summary
The `ScrollTeamEXP` component is currently a **structural skeleton and interaction engine** designed to create a "scroll-jacked" animation experience for the Team section on desktop devices.

Its primary intention is to **capture user scroll events** to drive a timeline/animation (represented by the 0-100% progress) rather than scrolling the page normally. This pattern is typically used to tell a story or reveal content (like team members) step-by-step without the user scrolling past it too quickly.

## Detailed Analysis

### 1. Current Functionality (The "Engine")
The component currently implements complex logic to handle the *mechanics* of the interaction, but lacks the *content*:
- **Scroll Locking (`lockScroll`)**: When the section enters the viewport, it diligently locks the document body (`overflow: hidden`), preventing normal page scrolling.
- **event Interception**: It adds specific listeners for `wheel` (desktop) and `touch` (mobile) events to completely hijack the scroll inputs.
- **Progress Tracking**: Instead of moving the page, scroll inputs update a `progress` state (0.0 to 1.0).
- **Exit Strategy**: It only "releases" the user (unlocks scroll) when the animation progress hits exactly **0% (top)** or **100% (bottom)** and the user continues scrolling in that direction.

### 2. Visual Output
Currently, the component **only renders a debug-style progress indicator**:
- A large SVG circle in the center.
- A percentage text number counting from 0% to 100%.
- It does **not** currently verify or display any team members (Founders, Leaders, etc.).

### 3. Contextual Usage
In `Team.astro`:
```astro
<!-- Desktop/Large Devices Component -->
<div class="hidden md:block">
    <ScrollTeamEXP client:load />
</div>
```
It is explicitly mounted as the *exclusive* view for Desktop users. Meanwhile, the `md:hidden` block below it contains the actual list of Founders and Leadership.

## Conclusion & Recommendation
The **intention** is to use this "scrolling progress" value to animate the Team members (likely the Founders) entering and exiting the screen in a cinematic way (e.g., cards stacking, parallaxing, or fading in sequence) as the user scrolls.

**Status**: The mechanical "engine" is built, but the visual "body" (the team data and layout) is missing. 

**Next Steps**: To fulfill its purpose, the component needs to:
1.  Import the team data (`founders`, `leaders`).
2.  Map that data to visual elements.
3.  Bind the existing `progress` value to `framer-motion` transforms (opacity, x/y position, scale) on those elements.
