import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import gsap from "gsap";

const Loader = () => {
  useGSAP(() => {
    gsap.to("#preloadText", {
      opacity: 1,
      duration: 3,
      ease: "power1.in",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <p
          className="rounded-full w-[10vw] h-[10vh] text-gray opacity-0 "
          id="preloadText"
        >
          Realistic Model Loading...
        </p>
      </div>
    </Html>
  );
};
export default Loader;
