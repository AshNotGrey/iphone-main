const date = new Date();
const currentYear = date.getFullYear();
import { footerLinks, HakiAttribution } from "../constants/index";
const Footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5 border-t border-neutral-700'>
      <div className='screen-max-width flex flex-col md:flex-wrap md:flex-row lg:justify-between justify-center items-center gap-5'>
        <div>
          <p className='font-semi-=bold text-gray text-xs'>
            More ways to shop <span className='underline text-blue'> Find an Apple store </span>
            or <span className='underline text-blue'> Other ratailer </span> near you
          </p>
          <p className='font-semi-=bold text-gray text-xs'>
            Or email:{" "}
            <a href='mailto:' className='underline text-blue' target='_blank' rel='noreferrer'>
              official.de.ash@gmail.com
            </a>{" "}
            <br />
            if you're interested in working on a project {`:)`}
          </p>
          <p className='font-semi-bold text-gray text-xs'>
            <a
              href='https://linktr.ee/ashnotgrey'
              className='underline text-blue'
              target='_blank'
              rel='noreferrer'>
              LinkTree
            </a>{" "}
            <a
              href='https://tr.ee/iUxPGbXe_7'
              className='underline text-blue'
              target='_blank'
              rel='noreferrer'>
              LinkedIn
            </a>
          </p>
        </div>
        <div className='flex items-center justify-center'>
          <a
            href={HakiAttribution.link}
            target='_blank'
            rel='noreferrer'
            className='flex gap-0'
            title='Powered by HAKI'>
            <div className='flex flex-col items-center justify-center'>
              <p className='text-white-500 text-sm font-light'>{HakiAttribution.text}</p>
              <img src={HakiAttribution.logo} alt='HAKI' className='w-10 h-10 md:w-20 md:h-20' />
            </div>
          </a>
        </div>
        <div className='flex flex-col items-center lg:items-end justify-between'>
          <p className='font-semi-=bold text-gray text-xs'>
            Copyright &copy; {currentYear}
            <span className='line-through'> Apple Inc</span>
            <span> HAKI</span>, All rights reserved
          </p>
          <div className='flex'>
            {footerLinks.map((link, i) => (
              <p key={link} className='font-semibold text-gray text-xs'>
                {link} {i !== footerLinks.length - 1 && <span className='mx-1'>|</span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
