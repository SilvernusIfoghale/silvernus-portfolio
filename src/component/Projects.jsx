import React from "react";

export default function Projects() {
  return (
    <>
      <div className="my-10">
        <p className="text-white text-4xl font-bold py-4">Projects</p>

        <div className="grid grid-cols-3 gap-4 ">
          {/*   Photo Gallery
                Projects -Title, -Description, -Technologies used, -Link to the live demo,-Link to the GitHub repository*/}
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-2">01</p>
            <p className="text-xl text-yellow-300 font-bold">
              Medium Landing Page
            </p>
            <p className="py-2 text-gray-200 text-sm">
              Leveraged ReactJs, TailwindCss in replicating the Medium landing
              page, responsive design across various devices to enhance user
              engagement and satisfaction.
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Live Demo
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Code
              </a>
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-2">02</p>
            <p className="text-xl text-yellow-300 font-bold">Quote Generator</p>
            <p className="py-2 text-gray-200 text-sm">
              Simple and elegant Ui design, this application involves
              integration of an endpoint, real-time fetching of data, dynamic
              rendering of quote as chosen by the user.
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Live Demo
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Code
              </a>
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-2">03</p>
            <p className="text-xl text-yellow-300 font-bold">Dynamic Form</p>
            <p className="py-2 text-gray-200 text-sm">
              Form validation app done using ReactJs and TailwindCss, data
              entered on each input area are checked critically against a set of
              rule before submission privilege is granted.
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Live Demo
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Code
              </a>
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-2">04</p>
            <p className="text-xl text-yellow-300 font-bold">
              Spotify Landing Page
            </p>
            <p className="py-2 text-gray-200 text-sm">
              Replicating the landing page of Spotify, using ReactJs javascript
              library and TailwindCss Css framework, making the page responsive
              with a close margin for each details.
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Live Demo
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Code
              </a>
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-2">05</p>
            <p className="text-xl text-yellow-300 font-bold">Todo-List</p>
            <p className="py-2 text-gray-200 text-sm">
              Leveraged ReactJs, TailwindCss in replicating a Todo-App, gets
              tasks for the user and save them on the user's local storage for
              easy retrieval on request.
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Live Demo
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Code
              </a>
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-2">06</p>
            <p className="text-xl text-yellow-300 font-bold"> Weather App</p>
            <p className="py-2 text-gray-200 text-sm">
              Get access to current Weather condition of any city at a snap of
              your finger, input a valid city name in the input area and get
              real-time feedback almost instantly, project done with TailwindCss
              and ReactJs.
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Live Demo
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Code
              </a>
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-semibold text-5xl py-2">06</p>
            <p className="text-xl text-yellow-300 font-bold"> Photo Gallery</p>
            <p className="py-2 text-gray-200 text-sm">
              Luxury of all catalogue of images, ranging from nature, to
              electronic devices, to abstract, the list is endless, images are
              been fetch dynamically from an open source Api and seamlessly
              integrated in the application.
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Live Demo
              </a>
            </p>
            <p>
              <a href="#" className="text-blue-100 underline text-sm">
                Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
