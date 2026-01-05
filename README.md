# House – Landing Page

Responsive landing page built from a provided design.

## Tech stack

- React
- Vanilla CSS (no framework)

## Frontend implementation – notes

This project is built from a provided design with a focus on responsiveness, clarity and clean structure.

Some layout choices were adjusted for smaller screens to keep the content easy to read and visually clear, while maintaining the overall design intent.

---

## Hero section

### Desktop

- The desktop layout follows the design closely in terms of spacing, typography and composition.
- The hero image uses `object-fit: cover` with a fixed focus to keep the building as the main visual element.

### Tablet & mobile

- On tablet and mobile, the hero text is placed **below the image** instead of on top of it.
- This was done to avoid text overlapping the image and to maintain good readability on smaller screens.
- A dark overlay was intentionally not added to the image, as separating image and text provided a cleaner and more readable solution.

The goal was to prioritise readability while also allowing the image to remain visually dominant on smaller screens.

---

## Typography

- On smaller screens, heading sizes are slightly adjusted to maintain a clear hierarchy when content stacks vertically.
- Desktop typography follows the values defined in the design.
- Font sizes, logos and primary buttons are kept relatively consistent across breakpoints to maintain readability and visual stability on smaller screens.

---

## Buttons & interactions

- Buttons share the same size, typography and hover behaviour across the site for consistency.
- Hover states are kept subtle, using simple color changes and slight movement to provide clear feedback.
- Focus states are preserved for accessibility.

---

## Image-based sections

- For image-based sections such as the house cards, no additional overlays were added, as the provided design relies on image contrast and positioning rather than layered effects.

---

## Footer & layout

- The footer stacks content vertically on mobile and switches to a grid-based layout on larger screens.
- Spacing is adjusted per breakpoint to keep the content balanced and readable across different screen sizes.

---

## General approach

Where exact behaviour wasn’t defined in the design, decisions were based on:

- readability on smaller screens
- keeping layouts simple and predictable
- following the design intent rather than forcing pixel perfection at all sizes
