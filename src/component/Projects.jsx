import React from "react";
import github from "../../public/github-circular.png";
import { LiaLinkSolid } from "react-icons/lia";
import Card from "./Card";
import { Bounce, Slide } from "react-awesome-reveal";

export default function Projects() {
  return (
    <>
      <div className="w-80 sm:w-full my-36 pt-10" id="project">
        <Slide direction="left">
          <p className="text-gray-200 text-[2.7rem] font-bold pb-6 ">
            Projects I've Worked on
          </p>
        </Slide>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 ">
          <Bounce>
            <Card
              num="01"
              title=" Medium Landing Page"
              desc=" Leveraged ReactJs, TailwindCss in replicating the Medium landing
              page, responsive design across various devices to enhance user
              engagement and satisfaction."
              liveUrl="https://medium-landing-page-alpha.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/medium-landing-page
"
            />
            <Card
              num="02"
              title=" Quote Generator"
              desc="Simple and elegant Ui design, this application involves
              integration of an endpoint, real-time fetching of data, dynamic
              rendering of quote as chosen by the user."
              liveUrl="https://quote-generator-nu-sand.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/quote-generator"
            />
            <Card
              num="03"
              title="Dynamic Form"
              desc="Form validation app done using ReactJs and TailwindCss, data
              entered on each input area are checked critically against a set of
              rule before submission privilege is granted."
              liveUrl="https://react-dynamic-form-theta.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/react-form"
            />
            <Card
              num="04"
              title="Spotify Landing Page"
              desc="Replicating the landing page of Spotify, using ReactJs javascript
              library and TailwindCss Css framework, making the page responsive
              with a close margin for each details."
              liveUrl="https://spotify-landing-page-ten.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/spotify-landing-page"
            />
            <Card
              num="05"
              title="Todo-List"
              desc="Leveraged ReactJs, TailwindCss in replicating a Todo-App, gets
              tasks for the user and save them on the user's local storage for
              easy retrieval on request."
              liveUrl="https://todo-list-app-silver.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/todo-list-app"
            />
            <Card
              num="06"
              title="Weather App"
              desc="Get access to current Weather condition of any city at a snap of
              your finger, input a valid city name in the input area and get
              real-time feedback almost instantly, project done with TailwindCss
              and ReactJs."
              liveUrl="https://weather-application-three-zeta.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/weather-app"
            />
            <Card
              num="07"
              title="Photo Gallery"
              desc="Luxury of all catalogue of images, ranging from nature, to
              electronic devices, to abstract, the list is endless, images are
              been fetch dynamically from an open source Api and seamlessly
              integrated in the application."
              liveUrl="https://photo-gallery-taupe-gamma.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/photo-gallery"
            />
          </Bounce>
        </div>
      </div>
    </>
  );
}
