import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bold text-3xl mx-2" href="/">
          Home
        </Link>
        <div className="text-xl ">
          <Link className="mx-2" href="/performance">
            Performance
          </Link>
          <Link className="mx-2" href="/reliability">
            Reliability
          </Link>
          <Link className="mx-2" href="/scale">
            Scale
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
