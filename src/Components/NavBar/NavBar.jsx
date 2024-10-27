import { useState } from "react";
import Link from "../Link/Link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open === true ? (
            <img
            className="h-[40px] w-[40px] border-2"
            src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png"
            alt="Close"
          />
          
        ) : (
            <img
            className="h-[40px] w-[40px] border-2"
            src="https://cdn-icons-png.flaticon.com/128/9330/9330299.png"
            alt="Open"
          />
        )}
      </div>
      <ul className={`md:flex absolute md:static duration-1000
        ${open ? "top-16" : "-top-60"}
        bg-yellow-200 px-6 `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
