# GetShop Case Study

This project is a test task implementation of a responsive website using modern web technologies.
Link to Github Pages: https://annagolmakova.github.io/getshop-test/

## Technologies Used

- Next.js
- React
- HTML5
- CSS3
- CSS Modules

## Key Features

![Header Animation](/docs/header-animation.gif)

### 1. Sticky Header with Scroll Animation

The project features a sticky header that reveals a shadow effect when scrolling. This is achieved using CSS scroll-linked animations, a modern CSS feature.

```css
@supports (animation-timeline: scroll()) {
  .header {
    animation: scroll-shadow linear both;
    animation-timeline: scroll();
    animation-range: 0ex 5ex;
  }

  @keyframes scroll-shadow {
    from {
      box-shadow: none;
    }
    to {
      box-shadow: var(--shadow);
    }
  }
}
```

### 2. Custom Intersection Observer Hook

A custom React hook `useIntersectionObserver` is implemented to highlight the currently visible section in the navigation menu. This hook utilizes the Intersection Observer API to efficiently track the visibility of multiple elements.

```javascript
import { useState, useEffect } from "react";

export function useIntersectionObserver(elementIds, options) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observers = [];
    let visibleSections = new Set();

    // ... (implementation details)

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [elementIds, options]);

  return activeId;
}
```

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Run the development server:
   ```
   pnpm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building and Deployment

To build the project:

```
pnpm run build
```

This project is configured for deployment to GitHub Pages. To deploy:

```
pnpm run deploy
```

## Additional Notes

- The project uses CSS Modules for scoped styling.
- Prettier is configured with a custom CSS order plugin for consistent style formatting.

Feel free to explore the code
