import Card from "./Card";
import { Bounce, Slide } from "react-awesome-reveal";

export default function Projects() {
  return (
    <>
      <div className="w-80 mx-auto  sm:w-full mb-36 pt-10" id="project">
        <Slide direction="left">
          <p className="text-gray-200 text-[2.7rem] font-bold pb-6 ">
            Projects I&apos;ve Worked on
          </p>
        </Slide>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 ">
          <Bounce>
            <Card
              num="01"
              title="Note App"
              desc="The Note Application offers easy note taking, powerful search functionality, and light/dark mode options, enhancing productivity and user comfort."
              liveUrl="https://note-application-livid.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/note-app"
            />
            <Card
              num="02"
              title="Nestify"
              desc="The property listing website enables landlords to list properties, while tenants can view listings and pay rent if satisfied. Users can log in with Facebook or Google for convenience."
              liveUrl="https://nestify-one.vercel.app/"
              gitHubUrl="https://github.com/SilvernusIfoghale/TechyJaunt-Project"
            />
            <Card
              num="03"
              title="Multi-step Form"
              desc="The multi-step form includes validation for each step and allows users to navigate through multiple form fields sequentially, ensuring a smooth and organized data entry process."
              liveUrl="https://dclc-react-course.vercel.app/#/multi-form"
              gitHubUrl="https://github.com/SilvernusIfoghale/dclc-react-course/tree/main/src/multi-step-form"
            />
            <Card
              num="04"
              title="E-Commerce Product Page"
              desc="The e-commerce product page features options to add items to the cart, remove items from the cart, and view image thumbnails for different product versions, enhancing the shopping experience."
              liveUrl="https://dclc-nextjs-course.vercel.app/e-commerce"
              gitHubUrl="https://github.com/SilvernusIfoghale/dclc-nextjs-course/tree/main/app/e-commerce"
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
              title="Url Shortener"
              desc="The URL shortener uses an open-source API to efficiently shorten lengthy, valid URLs, making them easier to share and manage."
              liveUrl="https://silvernusifoghale.github.io/url-shortener/"
              gitHubUrl="https://github.com/SilvernusIfoghale/SilvernusIfoghale.github.io/tree/main/url-shortener"
            />
          </Bounce>
        </div>
      </div>
    </>
  );
}
