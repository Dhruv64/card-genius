import type { NextPage } from "next";
import {signIn} from "next-auth/react"
import Link from "next/link";

const Navbar: NextPage = () => {
  return (
    <div>
      <header className="text-white bg-blue-950 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <img src="./card genius icon-01.png" className="h-16 w-16" alt="" />
            <span className="ml-3 text-3xl">CardGenius.me</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-xl justify-center">
            <a className="mr-5 hover:text-blue-300">Pricing</a>
            <Link className="mr-5 text-white underline-offset-auto hover:text-blue-300" href='/app/blog'>Blog</Link>
          </nav>
          <button onClick={()=> signIn(undefined , { callbackUrl: '/app' })} className="inline-flex items-center bg-lime-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login/SignUp</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
