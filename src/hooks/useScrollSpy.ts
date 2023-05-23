import { useEffect, useState, RefObject } from "react";

const useScrollSpy = (elements: RefObject<HTMLElement>[]): string | null => {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const cb: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveElement(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(cb, { threshold: 0.5 });

    elements.forEach((element) => {
      if (element.current) {
        observer.observe(element.current);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element.current) {
          observer.unobserve(element.current);
        }
      });
    };
  }, [elements]);

  return activeElement;
};

export default useScrollSpy;
