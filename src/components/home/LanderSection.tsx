import LanderCar from "@/assets/images/lander-car.png";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LanderSection() {
  const container = useRef<HTMLElement>(null);
  const leftTextRef = useRef<HTMLHeadingElement>(null);
  const rightTextRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  let heightValue = window.innerWidth < 768 ? "100px" : "250px";

  useGSAP(
    () => {
      if (!imageLoaded) return; // Don't run animation until image is loaded
      // Timeline for coordinated animations
      const tl = gsap.timeline();

      // Initial state - set elements to their starting positions
      gsap.set(imageRef.current, {
        width: "0px", // Start with no width
        height: heightValue,
      });
      gsap.set(dividerRef.current, {
        width: "0px", // Start with no width
      });
      gsap.set(leftTextRef.current, {
        x: "-100vw", // Start from left edge of screen
        opacity: 0,
      });
      gsap.set(rightTextRef.current, {
        x: "100vw", // Start from right edge of screen
        opacity: 0,
      });

      // All animations start at the same time using position parameter "0"
      tl.to(imageRef.current, {
        width: "auto",
        duration: 1.5,
        ease: "power2.inOut",
      })
        .to(
          dividerRef.current,
          {
            width: "50%",
            duration: 1.5,
            ease: "power2.inOut",
          },
          0,
        ) // Start at time 0 (same as first animation)
        .to(
          leftTextRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0,
        ) // Start at time 0
        .to(
          rightTextRef.current,
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0,
        ); // Start at time 0
    },
    { scope: container, dependencies: [imageLoaded] },
  );

  return (
    <section
      ref={container}
      className="h-section flex w-full flex-col items-center justify-center gap-5"
    >
      <div className="flex max-w-[200px] items-center justify-center text-7xl lg:max-w-full lg:text-[230px]">
        <h1>IGN</h1>
        <img
          ref={imageRef}
          src={LanderCar}
          onLoad={() => setImageLoaded(true)}
          className="lander-car"
        />
        <h1>ITE</h1>
      </div>
      <div
        ref={dividerRef}
        className="bg-primary my-10 w-1/2 self-center p-1 lg:my-20"
      ></div>
      <div className="text-primary flex w-full flex-col items-center justify-center overflow-hidden text-center text-5xl lg:flex-row lg:justify-between lg:text-7xl">
        <h2 ref={leftTextRef} className="">
          SMARTER FINANCE
        </h2>
        <h2 ref={rightTextRef} className="">
          SMOOTHER OPERATIONS
        </h2>
      </div>
    </section>
  );
}
