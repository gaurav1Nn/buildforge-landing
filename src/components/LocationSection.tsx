// import { SectionHeading } from "@/components/SectionHeading";
// import { useGsapScrollReveal, useGsapParallax } from "@/hooks/useGsap";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const stats = [
//   { value: "2", suffix: " hrs", desc: "From major Asian tech hubs" },
//   { value: "100", suffix: "%", desc: "English-speaking workforce" },
//   { value: "24", suffix: "/7", desc: "Co-working & community access" },
// ];

// // Enhanced image component with Ken Burns effect
// const ParallaxImage = ({
//   src,
//   alt,
//   className,
//   speed = 0.3,
// }: {
//   src: string;
//   alt: string;
//   className?: string;
//   speed?: number;
// }) => {
//   const imgRef = useRef<HTMLDivElement>(null);
//   const parallaxRef = useGsapParallax(speed);

//   return (
//     <div
//       ref={parallaxRef}
//       className={`${className} overflow-hidden rounded-2xl`}
//     >
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover animate-ken-burns transition-transform duration-700 hover:scale-110"
//         loading="lazy"
//       />
//     </div>
//   );
// };

// export const LocationSection = () => {
//   const ref = useGsapScrollReveal(".location-heading, .location-img");
//   const statsRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!statsRef.current) return;

//     const ctx = gsap.context(() => {
//       const counters = statsRef.current!.querySelectorAll(".stat-number");
//       counters.forEach((el) => {
//         const target = parseInt(el.getAttribute("data-target") || "0", 10);
//         const obj = { val: 0 };
//         gsap.to(obj, {
//           val: target,
//           duration: 2,
//           ease: "power1.out",
//           scrollTrigger: {
//             trigger: el,
//             start: "top 85%",
//           },
//           onUpdate: () => {
//             el.textContent = Math.round(obj.val).toString();
//           },
//         });
//       });

//       // Add glow effect to stat numbers
//       gsap.to(statsRef.current!.querySelectorAll(".stat-number"), {
//         textShadow: "0 0 20px rgba(255,255,255,0.5)",
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         stagger: 0.3,
//       });
//     }, statsRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={ref} id="location" className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
//       {/* Image Grid with Ken Burns effect */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
//         <ParallaxImage
//           src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
//           alt="Bali rice terraces"
//           className="col-span-2 row-span-2"
//           speed={0.2}
//         />
//         <ParallaxImage
//           src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&q=80"
//           alt="Bali jungle temple"
//           className="aspect-square"
//           speed={0.3}
//         />
//         <ParallaxImage
//           src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80"
//           alt="Tanah Lot temple Bali"
//           className="aspect-square"
//           speed={0.4}
//         />
//         <ParallaxImage
//           src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb37?w=400&q=80"
//           alt="Bali villa pool"
//           className="aspect-square"
//           speed={0.35}
//         />
//         <ParallaxImage
//           src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&q=80"
//           alt="Bali beach sunrise"
//           className="aspect-square"
//           speed={0.25}
//         />
//       </div>

//       <div className="location-heading">
//         <SectionHeading label="WHY BALI, INDONESIA">
//           Build in paradise. Sell to the *world.*
//         </SectionHeading>
//       </div>

//       <div ref={statsRef} className="grid grid-cols-3 gap-8 mt-12">
//         {stats.map((s) => (
//           <div key={s.value} className="group cursor-default">
//             <div className="text-3xl md:text-4xl font-bold group-hover:text-glow transition-all">
//               <span className="stat-number" data-target={parseInt(s.value)}>{s.value}</span>{s.suffix}
//             </div>
//             <div className="text-muted-foreground text-sm mt-1 group-hover:text-foreground/80 transition-colors">
//               {s.desc}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

import { SectionHeading } from "@/components/SectionHeading";
import { useGsapScrollReveal, useGsapParallax } from "@/hooks/useGsap";



const ParallaxImage = ({
  src,
  alt,
  className,
  speed = 0.3,
}: {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}) => {
  const parallaxRef = useGsapParallax(speed);

  return (
    <div
      ref={parallaxRef}
      className={`${className} overflow-hidden rounded-2xl`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
};

export const LocationSection = () => {
  const ref = useGsapScrollReveal(".location-heading, .location-img");


  return (
    <section ref={ref} id="location" className="pt-24 md:pt-32 pb-0 px-6 max-w-4xl mx-auto">

      {/* ── Image Grid — all Pexels CDN (reliable) ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">

        {/* Large hero image — spans 2 cols + 2 rows */}
        <ParallaxImage
          src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Bali temple reflection"
          className="col-span-2 row-span-2 min-h-[400px]"
          speed={0.2}
        />

        {/* Top right 1 */}
        <ParallaxImage
          src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Bali rice terraces"
          className="aspect-square"
          speed={0.3}
        />

        {/* Top right 2 */}
        <ParallaxImage
          src="https://images.pexels.com/photos/1537086/pexels-photo-1537086.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Bali tropical forest"
          className="aspect-square"
          speed={0.4}
        />

        {/* Bottom right 1 */}
        <ParallaxImage
          src="https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Bali beach sunset"
          className="aspect-square"
          speed={0.35}
        />

        {/* Bottom right 2 */}
        <ParallaxImage
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="Bali villa pool"
          className="aspect-square"
          speed={0.25}
        />
      </div>

      <div className="location-heading pb-0 mb-0">
        {/* <SectionHeading label="WHY BALI, INDONESIA">
          Build in paradise. Sell to the *world.*
        </SectionHeading> */}
      </div>



    </section>
  );
};