import React from "react";
import github from "../../public/github-circular.png";
import { LiaAnkhSolid, LiaJenkins, LiaLinkSolid } from "react-icons/lia";

export default function Projects() {
  return (
    <>
      <div className="w-80 sm:w-full my-36">
        <p className="text-gray-200 text-[2.7rem] font-bold pb-6 ">
          Projects I've Worked on
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 ">
          {/*   Photo Gallery
                Projects -Title, -Description, -Technologies used, -Link to the live demo,-Link to the GitHub repository*/}
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-4">01</p>
            <p className="text-xl text-yellow-300 font-bold py-2">
              Medium Landing Page
            </p>
            <p className="py-2 text-gray-200 font-semibold text-sm">
              Leveraged ReactJs, TailwindCss in replicating the Medium landing
              page, responsive design across various devices to enhance user
              engagement and satisfaction.
            </p>
            <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
              <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-50 px-1"
                >
                  <LiaLinkSolid size={22} /> <span>Live Demo</span>
                </a>
              </div>
              <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 px-1 font-semibold"
                >
                  <img src={github} alt="" className="w-6" />
                  <p>See GitHub</p>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-gray-300 font-semibold text-5xl py-4">02</p>
            <p className="text-xl text-yellow-300 font-bold py-2">
              Quote Generator
            </p>
            <p className="py-2 text-gray-200 font-semibold text-sm">
              Simple and elegant Ui design, this application involves
              integration of an endpoint, real-time fetching of data, dynamic
              rendering of quote as chosen by the user.
            </p>
            <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
              <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-50 px-1"
                >
                  <LiaLinkSolid size={22} /> <span>Live Demo</span>
                </a>
              </div>
              <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 px-1 font-semibold"
                >
                  <img src={github} alt="" className="w-6" />
                  <p>See GitHub</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-4">03</p>
            <p className="text-xl text-yellow-300 font-bold py-2">
              Dynamic Form
            </p>
            <p className="py-2 text-gray-200 font-semibold text-sm">
              Form validation app done using ReactJs and TailwindCss, data
              entered on each input area are checked critically against a set of
              rule before submission privilege is granted.
            </p>

            <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
              <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-50 px-1"
                >
                  <LiaLinkSolid size={22} /> <span>Live Demo</span>
                </a>
              </div>
              <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 px-1 font-semibold"
                >
                  <img src={github} alt="" className="w-6" />
                  <p>See GitHub</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-4">04</p>
            <p className="text-xl text-yellow-300 font-bold py-2">
              Spotify Landing Page
            </p>
            <p className="py-2 text-gray-200 font-semibold text-sm">
              Replicating the landing page of Spotify, using ReactJs javascript
              library and TailwindCss Css framework, making the page responsive
              with a close margin for each details.
            </p>
            <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
              <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-50 px-1"
                >
                  <LiaLinkSolid size={22} /> <span>Live Demo</span>
                </a>
              </div>
              <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 px-1 font-semibold"
                >
                  <img src={github} alt="" className="w-6" />
                  <p>See GitHub</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-4">05</p>
            <p className="text-xl text-yellow-300 font-bold py-2">Todo-List</p>
            <p className="py-2 text-gray-200 font-semibold text-sm">
              Leveraged ReactJs, TailwindCss in replicating a Todo-App, gets
              tasks for the user and save them on the user's local storage for
              easy retrieval on request.
            </p>
            <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
              <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-50 px-1"
                >
                  <LiaLinkSolid size={22} /> <span>Live Demo</span>
                </a>
              </div>
              <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 px-1 font-semibold"
                >
                  <img src={github} alt="" className="w-6" />
                  <p>See GitHub</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-4">06</p>
            <p className="text-xl text-yellow-300 font-bold py-2">
              {" "}
              Weather App
            </p>
            <p className="py-2 text-gray-200 font-semibold text-sm">
              Get access to current Weather condition of any city at a snap of
              your finger, input a valid city name in the input area and get
              real-time feedback almost instantly, project done with TailwindCss
              and ReactJs.
            </p>
            <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
              <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-50 px-1"
                >
                  <LiaLinkSolid size={22} /> <span>Live Demo</span>
                </a>
              </div>
              <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 px-1 font-semibold"
                >
                  <img src={github} alt="" className="w-6" />
                  <p>See GitHub</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-4">07</p>
            <p className="text-xl text-yellow-300 font-bold py-2">
              {" "}
              Photo Gallery
            </p>
            <p className="py-2 text-gray-200 text-sm font-semibold">
              Luxury of all catalogue of images, ranging from nature, to
              electronic devices, to abstract, the list is endless, images are
              been fetch dynamically from an open source Api and seamlessly
              integrated in the application.
            </p>
            <div className="flex justify-between mt-7 px-1 sm:pr-4 lg:pr-1">
              <div className="flex items-center border-2 border-gray-300 w-32 rounded-full h-8">
                <a
                  href="#"
                  className="flex items-center gap-2 font-semibold text-gray-50 px-1"
                >
                  <LiaLinkSolid size={22} /> <span>Live Demo</span>
                </a>
              </div>
              <div className="text-gray-50  flex items-center border-yellow-500 border-2 h-8 w-32 rounded-full text-sm">
                <a
                  href="#"
                  className="flex items-center gap-2 px-1 font-semibold"
                >
                  <img src={github} alt="" className="w-6" />
                  <p>See GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
