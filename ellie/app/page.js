import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="navbar space-x-20 p-5 flex justify-center">
        <button className="px-10 p-2 border-2 border-solid border-black rounded-full">
          Start
        </button>
        <button className="px-10 p-2 border-2 border-solid border-black rounded-full">
          @Zendesk
        </button>
        <button className="px-10 p-2 border-2 border-solid border-black rounded-full">
          @TUD
        </button>
        <button className="px-10 p-2 border-2 border-solid border-black rounded-full">
          Projects
        </button>
        <button className="px-10 p-2 border-2 border-solid border-black rounded-full">
          Contact me :)
        </button>
      </div>

      {/* Intro */}
      <div className="flex-grow flex justify-center items-center">
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
      <div className="flex flex-col items-center">
      <Image
          src="/down-arrow.png"
          width={100}
          height={100}
          alt="Arrow pointing down"
        />
      </div>
    </main>
  );
}
