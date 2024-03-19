import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <Link className="mx-2" href="/">
        Home
      </Link>
      <Link className="mx-2" href="/performance">
        Performance
      </Link>
      <Link className="mx-2" href="/reliability">
        Reliability
      </Link>
      <Link className="mx-2" href="/scale">
        Scale
      </Link>
    </header>
  );
};

export default Header;
