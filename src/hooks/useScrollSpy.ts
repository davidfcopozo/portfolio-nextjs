import {
  useEffect,
  useState,
  RefObject,
  useMemo,
  useLayoutEffect,
} from "react";
import { observe } from "react-intersection-observer";

type RefType = RefObject<Element>[];
type Functype = { activeElement: string | null; scrollSpy: () => void };

const useScrollSpy = (elements: RefType): string | null => {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  const cb: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target.id);
        setActiveElement(entry.target.id);
      }
    });
  };

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(cb, { threshold: 0.5 });
    //console.log("Elements==>", elements);

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
