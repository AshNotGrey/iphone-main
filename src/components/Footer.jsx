const date = new Date();
const currentYear = date.getFullYear();
import { footerLinks } from "../constants/index";
const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semi-=bold text-gray text-xs">
            More ways to shop{" "}
            <span className="underline text-blue"> Find an Apple store </span>
            or <span className="underline text-blue">
              {" "}
              Other ratailer{" "}
            </span>{" "}
            near you
          </p>
          <p className="font-semi-=bold text-gray text-xs">
            Or email:{" "}
            <a href="mailto:" className="underline text-blue">
              official.de.ash@gmail.com
            </a>{" "}
            <br />
            if you're interested in working on a project {`:)`}
          </p>
          <p className="font-semi-=bold text-gray text-xs">
            <a
              href="https://linktr.ee/ashnotgrey"
              className="underline text-blue"
            >
              LinkTree
            </a>{" "}
            <a href="https://tr.ee/iUxPGbXe_7" className="underline text-blue">
              LinkedIn
            </a>
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />
        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semi-=bold text-gray text-xs">
            Copyright &copy; {currentYear}
            <span className="line-through"> Apple Inc</span>
            <span> HAKI</span>, All rights reserved
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-1">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
