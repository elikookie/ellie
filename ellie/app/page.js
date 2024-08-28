"use client";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const intro = useRef(null);
  const zendesk = useRef(null);
  const TUD = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToPart = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <main className="bg-slate-50">
      {/* Navbar */}
      <div className="navbar space-x-20 p-5 flex justify-center sticky top-0 bg-slate-50 rounded-b-xl">
        <button
          className="px-10 p-2 border-2 border-solid border-black rounded-full"
          onClick={() => scrollToPart(intro)}
        >
          Start
        </button>
        <button
          className="px-10 p-2 border-2 border-solid border-black rounded-full"
          onClick={() => scrollToPart(zendesk)}
        >
          @Zendesk
        </button>
        <button
          className="px-10 p-2 border-2 border-solid border-black rounded-full"
          onClick={() => scrollToPart(TUD)}
        >
          @TUD
        </button>
        <button
          className="px-10 p-2 border-2 border-solid border-black rounded-full"
          onClick={() => scrollToPart(projects)}
        >
          Projects
        </button>
        <button
          className="px-10 p-2 border-2 border-solid border-black rounded-full"
          onClick={() => scrollToPart(contact)}
        >
          Contact me :)
        </button>
      </div>

      {/* Intro */}
      <div ref={intro} className="flex flex-col justify-center min-h-screen">
        <div className="flex justify-center">
          <Image
            src="/five.png"
            width={250}
            height={250}
            alt="Picture of a hand"
          />
          <div className="flex flex-col justify-center p-10">
            <h1 className="text-center inria-serif-regular text-7xl">
              Hello, I am Ellie
            </h1>
            <br></br>
            <h3 className="text-center amatic-sc-regular text-4xl">
              The new addition to your team ;D
            </h3>
          </div>
          <Image
            src="/revfive.png"
            width={250}
            height={250}
            alt="Picture of a hand"
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col items-center">
          <div className="absolute bottom-0">
            <Image
              src="/down-arrow.png"
              width={100}
              height={100}
              alt="Arrow pointing down"
            />
          </div>
        </div>
      </div>

      {/* Zendesk */}
      <br></br>
      <br></br>
      <hr></hr>
      <div ref={zendesk} className="flex flex-col justify-center min-h-screen">
        <div className="grid grid-cols-2 gap-20 pt-20 pl-20">
          <div className="flex flex-col justify-evenly">
            <h1 className="inria-serif-regular text-7xl">
              Why I got into Tech
            </h1>
            <br></br>
            <p className="inria-serif-regular">
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
          <div className="pl-10">
            <Image
              src="/zendeskLogo.png"
              width={400}
              height={100}
              alt="Zendesk Logo"
            />
            <br></br>
            <Image
              src="/ZendeskInternship.jpg"
              width={400}
              height={100}
              alt="A picture at my desk at Zendesk"
            />
          </div>
        </div>
      </div>

      {/* TUD */}
      <div ref={TUD} className="flex flex-col justify-center min-h-screen">
        <h1 className="inria-serif-regular text-7xl pt-20 text-center">
          BSc in Computer Science at TUD{" "}
        </h1>
        <br></br>
        <div className="grid grid-cols-2 gap-4">
          <div className="ml-20 pl-10">
            <Image
              src="/tud.png"
              width={350}
              height={200}
              alt="TUD Grangegorman Campus"
            />
          </div>
          <div>
            <p className="inria-serif-regular">
              In my 4 years of study I have learned{" "}
              <u>a wide range of skills</u> and have worked on numerous team and
              individual projects.
            </p>
            <br></br>
            <p className="inria-serif-regular">
              Some of the <u>topics</u> I have learned include:
            </p>
            <ul className="inria-serif-regular list-disc">
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
              <li>Artificial Intelegence for Data Analytics</li>
              <li>Distributed Systems</li>
            </ul>
            <br></br>
            <p className="inria-serif-regular">
              <u>And some of the tools I have used include:</u>
            </p>
            <ul className="inria-serif-regular">
              <li>C,Python,Java,Kotlin,Arduino code, HTML/CSS/JS</li>
              <li>Vue.js, Svelte, Next.js, Node.js, Flask, Jetpack Compose</li>
              <li>MySQL, PostgresSQL, MongoDB, Firebase</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div ref={projects} className="flex flex-col min-h-screen"></div>

      {/* Contact */}
      <div ref={contact} className="flex flex-col min-h-screen"></div>
    </main>
  );
}
