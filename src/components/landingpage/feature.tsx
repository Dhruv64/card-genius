import type { NextPage } from "next";
import { BsShareFill, BsFillPencilFill } from 'react-icons/bs';
import { MdManageHistory, MdNature, MdUpdate, MdOutlineEdit } from 'react-icons/md';
const Feature: NextPage = () => {
  return (
    <div  id="Features" className="bg-blue-950">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Our Product Features</h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full transition ease-in-out delay-40 hover:-translate-y-1 hover:-translate-x-1 hover:scale-105 duration-300 ...">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4">
                  <BsFillPencilFill />
                </div>

                <span className="title-font font-medium">Easily Create Digital Business Card</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full transition ease-in-out delay-40 hover:-translate-y-1 hover:-translate-x-1 hover:scale-105 duration-300 ...">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4">
                  <BsShareFill />

                </div>
                <span className="title-font font-medium">Share Your Cards with Anyone</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full transition ease-in-out delay-40 hover:-translate-y-1 hover:-translate-x-1 hover:scale-105 duration-300 ...">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4">
                  <MdManageHistory />

                </div>
                <span className="title-font font-medium">Manage Your Contacts Seamlessly</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full transition ease-in-out delay-40 hover:-translate-y-1 hover:-translate-x-1 hover:scale-105 duration-300 ...">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4">
                  <MdNature />

                </div>
                <span className="title-font font-medium">Environment Friendly</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full transition ease-in-out delay-40 hover:-translate-y-1 hover:-translate-x-1 hover:scale-105 duration-300 ...">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4">
                  <MdOutlineEdit />

                </div>
                <span className="title-font font-medium">Customise As Per Your Need</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full transition ease-in-out delay-40 hover:-translate-y-1 hover:-translate-x-1 hover:scale-105 duration-300 ...">
              <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mr-4">
                  <MdUpdate />

                </div>
                <span className="title-font font-medium">Can Be Updated Easily</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
