import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <div className="navbar space-x-20 p-5 flex justify-center">
        <button className="navbarBtn">Start</button>
        <button className="navbarBtn">@Zendesk</button>
        <button className="navbarBtn">@TUD</button>
        <button className="navbarBtn">Projects</button>
        <button className="navbarBtn">Contact me :)</button>
      </div>
    </main>
  );
}
