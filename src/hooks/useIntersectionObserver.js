import { useState, useEffect } from "react";

export function useIntersectionObserver(elementIds, options) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const observers = [];
    let visibleSections = new Set();

    const checkVisibility = () => {
      if (visibleSections.size === 0) {
        setActiveId(null);
      } else {
        // Если видим несколько подсветим первый в списке elementIds
        for (const id of elementIds) {
          if (visibleSections.has(id)) {
            setActiveId(id);
            break;
          }
        }
      }
    };

    elementIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.add(id);
            } else {
              visibleSections.delete(id);
            }
          });
          checkVisibility();
        }, options);

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [elementIds, options]);

  return activeId;
}
