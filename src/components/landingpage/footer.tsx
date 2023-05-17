import type { NextPage } from "next";
import {Link} from "react-scroll";

const Footer: NextPage = () => {
  return (
    <div>
      <footer className=" bg-gray-600   body-font">
        <div className="container px-5 lg:px-40 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <img src="./card genius icon-01.png" className="h-16 w-16" alt="" />
              <span className="ml-3 text-white text-xl">CardGenius.me</span>

            </a>
            <p className="mt-2 text-sm text-white">Making cards hassle free since 2023 </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font lg:font-medium text-white tracking-widest text-lg  mb-3">Card Genius</h2>
              <nav className="list-none mb-10">
                <li>
                  <p className="text-white hover:text-gray-800"><Link to='Features' smooth={true} offset={-60}>Product Features</Link></p>
                </li>
                <li>
                  <p className="text-white hover:text-gray-800"><Link to='About' smooth={true} offset={-60}>About Us</Link></p>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Blog</a>
                </li>
                {/* <li>
                  <a className="text-white hover:text-gray-800">Login</a>
                </li> */}
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-base mb-3">Explore</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div> */}
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-base mb-3">Pricing</h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-sm text-center sm:text-left">© 2023 Card Genius —
              <a href="https://cardgenius.me" rel="noopener noreferrer" className=" ml-1" target="_blank">@cardgenius.me</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="https://www.facebook.com/mamotechnolabs/" className="facebook text-blue-500 ">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              {/* <a className="twitter ml-3 text-gray-500">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a> */}
              <a href="https://www.instagram.com/cardgenius.me/" className="instagram ml-3 text-pink-500">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/mamo-technolabs/" className="linkedin ml-3 text-blue-800">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
