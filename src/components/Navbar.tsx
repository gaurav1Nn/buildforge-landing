// import { useState, useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import gsap from "gsap";

// const navLinks = ["Mentors", "Location", "Program", "Journey", "FAQ"];

// export const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const logoRef = useRef<HTMLSpanElement>(null);
//   const mobileMenuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Logo hover effect
//   useEffect(() => {
//     if (!logoRef.current) return;
//     const logoElement = logoRef.current;

//     const handleMouseEnter = () => {
//       gsap.to(logoElement, {
//         scale: 1.05,
//         duration: 0.3,
//         ease: "power2.out",
//         textShadow: "0 0 20px rgba(255,255,255,0.5)",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(logoElement, {
//         scale: 1,
//         duration: 0.3,
//         ease: "power2.out",
//         textShadow: "none",
//       });
//     };

//     logoElement.addEventListener("mouseenter", handleMouseEnter);
//     logoElement.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       logoElement.removeEventListener("mouseenter", handleMouseEnter);
//       logoElement.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   // Mobile menu animation
//   useEffect(() => {
//     if (!mobileMenuRef.current) return;

//     const ctx = gsap.context(() => {
//       if (mobileOpen) {
//         gsap.fromTo(
//           mobileMenuRef.current!.children,
//           { opacity: 0, y: -20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.4,
//             stagger: 0.08,
//             ease: "power2.out",
//           }
//         );
//       }
//     }, mobileMenuRef);

//     return () => ctx.revert();
//   }, [mobileOpen]);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
//         scrolled
//           ? "bg-background/80 backdrop-blur-md border-border py-4"
//           : "bg-transparent border-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* Logo with hover effect */}
//         <span
//           ref={logoRef}
//           className="text-xl font-bold tracking-tighter cursor-pointer transition-transform"
//         >
//           BravioSchool
//         </span>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
//           {navLinks.map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="relative group hover:text-foreground transition-colors"
//             >
//               {link}
//               {/* Animated underline */}
//               <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full group-hover:left-0" />
//             </a>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <Button
//           variant="cta"
//           size="lg"
//           className="hidden md:inline-flex transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
//         >
//           Reserve Your Spot →
//         </Button>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-foreground transition-transform duration-300 hover:scale-110"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//             {mobileOpen ? (
//               <path d="M18 6L6 18M6 6l12 12" />
//             ) : (
//               <path d="M3 12h18M3 6h18M3 18h18" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu with animation */}
//       {mobileOpen && (
//         <div
//           ref={mobileMenuRef}
//           className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4"
//         >
//           {navLinks.map((link) => (
//             <a
//               key={link}
//               href={`#${link.toLowerCase()}`}
//               className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
//               onClick={() => setMobileOpen(false)}
//             >
//               {link}
//             </a>
//           ))}
//           <Button variant="cta" className="w-full mt-4">
//             Reserve Your Spot →
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// };


import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useReserveModal } from "@/lib/ModalContext";

const navLinks = ["Location", "Included", "Journey", "FAQ"];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { open } = useReserveModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <span className="text-xl font-bold tracking-tighter">BravioSchool</span>

        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <Button variant="cta" size="lg" className="hidden md:inline-flex" onClick={open}>
          Reserve Your Spot →
        </Button>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <Button variant="cta" className="w-full mt-4" onClick={open}>
            Reserve Your Spot →
          </Button>
        </div>
      )}
    </nav>
  );
};