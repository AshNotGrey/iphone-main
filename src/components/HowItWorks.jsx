import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils/index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/animations";
gsap.registerPlugin(ScrollTrigger);
const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      opacity: 0,
      scale: 3,
      duration: 2,
      scrub: 5.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);
  const videoRef = useRef();
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro Chip
            <br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle">
            It's here; The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg=transparent relative z-20 pointer-events-none"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <p className="text-gray font-semibold text-center mt-3 mb-5">
          Honkai: Star Rail
        </p>
        <div className="hiw-text-container">
          <div className="flex-1 flex-center justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far.
              </span>
            </p>
            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>{" "}
              with incredibly detailed environments and characters.
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn mb-20">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">With 6 cores</p>
            <p className="hiw-text">
              Powered by <span className="text-white">HAKI</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
