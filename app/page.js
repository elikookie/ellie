"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const intro = useRef(null);
  const zendesk = useRef(null);
  const TUD = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const scrollToPart = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-slate-50">
      {/* Navbar */}
      <div
        className="navbar 
      hidden
      lg:space-x-20 lg:p-5 lg:flex lg:justify-center lg:sticky lg:top-0 
      bg-slate-50 rounded-b-xl lg:block"
      >
        <button
          className="lg:px-10 lg:p-2 lg:border-2 lg:border-solid lg:border-black lg:rounded-full "
          onClick={() => scrollToPart(intro)}
        >
          Start
        </button>
        <button
          className="lg:px-10 lg:p-2 lg:border-2 lg:border-solid lg:border-black lg:rounded-full "
          onClick={() => scrollToPart(zendesk)}
        >
          @Zendesk
        </button>
        <button
          className="lg:px-10 lg:p-2 lg:border-2 lg:border-solid lg:border-black lg:rounded-full "
          onClick={() => scrollToPart(TUD)}
        >
          @TUD
        </button>
        <button
          className="lg:px-10 lg:p-2 lg:border-2 lg:border-solid lg:border-black lg:rounded-full "
          onClick={() => scrollToPart(projects)}
        >
          Projects
        </button>
        <button
          className="lg:px-10 lg:p-2 lg:border-2 lg:border-solid lg:border-black lg:rounded-full "
          onClick={() => scrollToPart(contact)}
        >
          Contact me :)
        </button>
      </div>

      {/* Intro */}
      <div ref={intro} className="flex flex-col justify-center min-h-screen">
        <div className="lg:flex lg:justify-center">
          <div className="hidden lg:block">
            <Image
              src={`${prefix}/five.png`}
              width={250}
              height={250}
              alt="Picture of a hand"
            />
          </div>
          <div className="flex flex-col justify-center p-10">
            <h1 className="text-center inria-serif-regular text-7xl">
              Hello, I am Ellie
            </h1>
            <br></br>
            <h3 className="text-center amatic-sc-regular text-4xl">
              The new addition to your team ;D
            </h3>
          </div>
          <div className="hidden lg:block">
            <Image
              src={`${prefix}/revfive.png`}
              width={250}
              height={250}
              alt="Picture of a hand"
            />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col items-center">
          <div
            className="absolute bottom-10 lg:bottom-0"
            onClick={() => scrollToPart(zendesk)}
          >
            <Image
              src={`${prefix}/down-arrow.png`}
              width={100}
              height={100}
              alt="Arrow pointing down"
            />
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <hr></hr>

      {/* Zendesk */}
      <div ref={zendesk} className="flex flex-col justify-center min-h-screen">
        <h1 className="inria-serif-regular text-6xl p-5 lg:hidden">
          Why I got into Tech
        </h1>
        <div className="p-4 lg:grid lg:grid-cols-2 lg:gap-20 lg:pt-20 lg:pl-20">
          <div>
            <h1 className="inria-serif-regular text-7xl hidden lg:block">
              Why I got into Tech
            </h1>
            <div className="hidden lg:block">
              <br></br> <br></br>
            </div>
            <div className="lg:hidden p-5">
              <Image
                src={`${prefix}/zendeskLogo.png`}
                width={400}
                height={100}
                alt="Zendesk Logo"
              />
              <br></br>
              <Image
                src={`${prefix}/ZendeskInternship.png`}
                width={400}
                height={100}
                alt="A picture at my desk at Zendesk"
              />
            </div>

            <div className="lg:hidden">
              <br></br>
            </div>

            <p className="inria-serif-regular p-5">
              In 2019 I signed up for Teen-Turn which is an organization that
              aims to inspire young women into STEM fields. I got my first
              experience coding basic websites and making apps using tools like
              the MIT app inventor and felt really inspired to learn more about
              computer science.
              <br></br>
              <br></br>
              That summer, I had the opportunity to go on a 2-week internship at
              Zendesk where I got to work along incredible employees from all
              parts of the company including the HR, UI/UX Designers and
              Software Developers and learned about project managment, idea
              development and testing as well as some programming. At the end I
              had completed making a travel diary website using Ruby on Rails.
              <br></br>
              <br></br>
              It was a very memorable experience and having seen what my job as
              a software developer could be like I decided that I will apply to
              study Computer Science in college.
            </p>
          </div>

          <div className="hidden lg:pl-10 lg:ml-20 lg:block">
            <Image
              src={`${prefix}/zendeskLogo.png`}
              height={100}
              alt="Zendesk Logo"
            />
            <br></br>
            <Image
              src={`${prefix}/ZendeskInternship.jpg`}
              width={400}
              height={100}
              alt="A picture at my desk at Zendesk"
            />
          </div>
        </div>
      </div>

      <hr></hr>

      {/* TUD */}
      <div
        ref={TUD}
        className="flex flex-col justify-center items-center min-h-screen px-10"
      >
        <h1 className="inria-serif-regular text-7xl pt-10 text-center">
          BSc in Computer Science at TUD{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="flex justify-center">
            <Image
              src={`${prefix}/tud.png`}
              width={350}
              height={200}
              alt="TUD Grangegorman Campus"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="inria-serif-regular mb-4">
              In my 4 years of study I have learned{" "}
              <u>a wide range of skills</u> and have worked on numerous team and
              individual projects.
            </p>
            <p className="inria-serif-regular mb-4">
              Some of the <u>topics</u> I have learned include:
            </p>
            <ul className="inria-serif-regular list-disc ml-5 mb-4">
              <li>Operating Systems</li>
              <li>Network Programming and Client Server Programming</li>
              <li>Software Engineering</li>
              <li>Web Development and Deployment</li>
              <li>Databases (Relational and Non-Relational)</li>
              <li>Mobile Software Development</li>
              <li>Object Oriented Programming</li>
              <li>Mathematics</li>
              <li>Physical Computing</li>
              <li>Games Engines and Simulation</li>
              <li>Artificial Intelligence for Data Analytics</li>
              <li>Distributed Systems</li>
            </ul>
            <p className="inria-serif-regular mb-2">
              <u>And some of the tools I have used include:</u>
            </p>
            <ul className="inria-serif-regular ml-5">
              <li>C, Python, Java, Kotlin, Arduino code, HTML/CSS/JS</li>
              <li>Vue.js, Svelte, Next.js, Node.js, Flask, Jetpack Compose</li>
              <li>MySQL, PostgresSQL, MongoDB, Firebase</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
      </div>

      <hr></hr>

      {/* Projects */}
      <div ref={projects} className="flex flex-col min-h-screen p-20">
        <h1 className="inria-serif-regular text-6xl lg:block hidden">
          TinyTips - Donation platform to support creators
        </h1>
        <h1 className="inria-serif-regular text-6xl">TinyTips</h1>
        <br></br> <br></br>
        <div className="flex justify-center">
          <Image
            src="/tinytipsScreenshot.png"
            width={700}
            height={400}
            alt="TUD Grangegorman Campus"
          />
        </div>
        <p>Donation platform to support creators </p>
        <br></br>
        <div className="pt-10">
          <h1 className="inria-serif-regular text-6xl lg:block ">UCVME </h1>
          <div className="flex justify-center">
            <Image
              src="/tinytipsScreenshot.png"
              width={700}
              height={400}
              alt="TUD Grangegorman Campus"
            />
          </div>
          <br></br>
          <p>Donation platform to support creators </p>
        </div>
      </div>

      {/* Contact */}
      <div ref={contact} className="flex flex-col min-h-screen p-20 mt-10">
        <h1 class="text-6xl inria-serif-regular">Contact Me :D</h1>
        <div className="pt-10">
          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2 inria-serif-regular">
              <u>Email</u>
            </h2>
            <p class="text-gray-700 inria-serif-regular">
              elikoleva.daytime638@passinbox.com
            </p>
          </div>

          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2 inria-serif-regular">
              <u>Location</u>
            </h2>
            <p class="text-gray-700 inria-serif-regular">Dublin, Ireland</p>
          </div>
        </div>

        <div class="mt-8 text-center absolute bottom-0 hidden lg:block">
          <p class="text-gray-600 text-sm inria-serif-regular">
            &copy; 2024 Elitsa Koleva. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
