'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconContext } from 'react-icons';
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart, FaInfo } from "react-icons/fa";
import { BsFillFileTextFill } from "react-icons/bs";

const navLinks = [
    {
      name: 'Home',
      icon: IoMdHome,
      href: '/'
    },
    {
      name: 'About Me',
      icon: FaInfo,
      href: '/about-me'
    },
    {
      name: 'Comissions Price',
      icon: FaShoppingCart,
      href: '/comissions-price'
    },
    {
      name: 'Terms of Service',
      icon: BsFillFileTextFill,
      href: '/terms-of-service'
    }
  ]

export default function Navbar() {
  const currentPage = usePathname();
    let links = navLinks.filter((link) => currentPage != link.href);
    if(currentPage === '/') {
        return;
    } else {
        return (
            <nav>
              {links.map((link) => {
              const LinkIcon = link.icon;
              return (
                  <Link
                  key={link.name}
                  href={link.href}
                  >
                  <IconContext.Provider value={{ size: "55px" }}>
                      <LinkIcon/>
                  </IconContext.Provider>
                  </Link>
              );
              })}
            </nav>
          );
    }
  }
  