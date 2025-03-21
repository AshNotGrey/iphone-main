import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils/index";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Features = () => {
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(".g_grow", { scale: 1, opacity: 1, ease: "power1" }, { scrub: 5.5 });
    animateWithGsap(".g_text", { y: 0, opacity: 1, ease: "power2.inOut", duration: 1 });
  }, []);

  const videoRef = useRef();
  return (
    <section className='h-full common-padding bg-zinc relative overflow-hidden'>
      <div className='screen-max-wid'>
        <div className='mb-12 w-full'>
          <h1 id='features_title' className='section-heading'>
            Explore the full story
            <br />
            HAKI tells it differently
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center overflow-hidden'>
          <div className='mt-32 mb-24 pl-24'>
            <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone</h2>
            <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium</h2>
          </div>
          <div className='flex-center flex-col sm:px-10'>
            <div className='relative h-[50vh] w-full flex items-center'>
              <video
                playsInline
                className='w-full h-full object-cover object-center rounded-3xl rounded-b'
                id='exploreVideo'
                preload='none'
                muted
                autoPlay
                ref={videoRef}>
                <source src={exploreVideo} type='video/mp4' />
              </video>
            </div>
            <div className='flex flex-col w-full relative'>
              <div className='feature-video-container'>
                <div className='overflow-hidden flex h-[50vh] rounded-3xl rounded-t'>
                  <img src={explore1Img} alt='titanium' className='feature-video g_grow' />
                </div>
                <div className='overflow-hidden flex h-[50vh] rounded-3xl rounded-t'>
                  <img src={explore2Img} alt='titanium2' className='feature-video g_grow' />
                </div>
              </div>
              <div className='feature-text-container'>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    iPhone 15 Pro is{" "}
                    <span className='text-white'>
                      the first iPhone to feature an aerospace-grade titanium design{" "}
                    </span>
                    using the same alloy that spacecrafts use for missions to Mars.
                  </p>
                </div>
                <div className='flex-1 flex-center'>
                  <p className='feature-text g_text'>
                    Titanium has one of the best strenght-to-weight ratios of any metal, making
                    these our <span className='text-white'>lightest Pro models ever. </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
