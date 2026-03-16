import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapScrollReveal = (selector: string, options?: gsap.TweenVars) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    // Split comma-separated selectors and query each separately
    const selectors = selector.split(',').map(s => s.trim());
    const allElements: Element[] = [];
    
    selectors.forEach(sel => {
      const elements = ref.current!.querySelectorAll(sel);
      elements.forEach(el => allElements.push(el));
    });
    
    if (!allElements.length) return;

    const ctx = gsap.context(() => {
      gsap.from(allElements, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
        ...options,
      });
    }, ref);

    return () => ctx.revert();
  }, [selector, options]);

  return ref;
};

export const useGsapHeroEntrance = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-heading",
          {
            y: 80,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-countdown",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useGsapTimelineDraw = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      // Line draw
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: 1,
        },
      });

      // Milestone items stagger
      gsap.from(".timeline-item", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
};

/**
 * Magnetic hover effect - element follows cursor slightly
 */
export const useGsapMagnetic = (strength: number = 0.3) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

/**
 * Floating animation for elements
 */
export const useGsapFloat = (duration: number = 3, amplitude: number = 10) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to(ref.current, {
        y: amplitude,
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, [duration, amplitude]);

  return ref;
};

/**
 * Counter animation for numbers
 */
export const useGsapCounter = (
  target: number,
  duration: number = 2,
  decimals: number = 0
) => {
  const ref = useRef<HTMLElement>(null);
  const [displayValue, setDisplayValue] = useState(target);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
        onUpdate: () => {
          setDisplayValue(parseFloat(obj.val.toFixed(decimals)));
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [target, duration, decimals]);

  return { ref, displayValue };
};

/**
 * Parallax scroll effect
 */
export const useGsapParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const distance = window.innerHeight * speed;
      
      gsap.to(ref.current, {
        y: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
};

/**
 * Text split and reveal animation
 */
export const useGsapTextReveal = (selector: string) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current.querySelector(selector);
    if (!element) return;

    const text = element.textContent || "";
    element.textContent = "";

    const words = text.split(" ");
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + (i < words.length - 1 ? " " : "");
      span.style.display = "inline-block";
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      element.appendChild(span);
    });

    const ctx = gsap.context(() => {
      gsap.to(element.querySelectorAll("span"), {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return ref;
};

/**
 * 3D Tilt effect on mouse move
 */
export const useGsapTilt = (maxTilt: number = 10) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      gsap.to(element, {
        rotateX,
        rotateY,
        duration: 0.3,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.5)",
        transformPerspective: 1000,
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxTilt]);

  return ref;
};

/**
 * Scale and fade on scroll
 */
export const useGsapScaleReveal = (selector: string, options?: gsap.TweenVars) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const elements = ref.current.querySelectorAll(selector);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
        ...options,
      });
    }, ref);

    return () => ctx.revert();
  }, [selector]);

  return ref;
};

export { gsap, ScrollTrigger };
