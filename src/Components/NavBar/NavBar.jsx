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
    <nav>
      <div onClick={() => setOpen(!open)} className="md:hidden">
        {open === true ? (
          <img
            className="h-[40px] w-[40px] border-2"
            src="https://cdn-icons-png.flaticon.com/128/9330/9330299.png"
          />
        ) : (
          <img
            className="h-[40px] w-[40px] border-2"
            src="https://cdn-icons-png.flaticon.com/128/2732/2732657.png"
            alt=""
          />
        )}
      </div>
      <ul className="md:flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
