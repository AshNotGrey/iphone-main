import { useGSAP } from "@gsap/react";
import { rightImg, watchImg } from "../utils";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      ease: "power1.in",
      opacity: 1,
      delay: 2,
    });
    gsap.to(".link", {
      y: 0,
      ease: "power1.in",
      opacity: 1,
      delay: 2,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full items-end justify-between md:flex'>
          <h1 id='title' className='section-heading'>
            Get the highlights.
          </h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='watch' className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt='right' className='ml-2' />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
export default Highlights;
