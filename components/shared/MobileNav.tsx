"use client";

import Link from "next/link";
import { 
  Sheet, SheetContent, SheetTrigger 
} from "../ui/sheet";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

// TODO
//: RESTART HERE 👇

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
    <Link href="/" className="flex items-center gap-2 md:py-2">
      <Image 
        src={"/assets/images/logo-text.svg"}
        alt="logo"
        width={140}
        height={28}
      />
    </Link>

    <nav className="flex gap-2">
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>

          <Sheet>
            <SheetTrigger>
              <Image 
                src={"/assets/icons/menu.svg"}
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Image 
                  src={"/assets/images/logo-text.svg"}
                  alt='Bendevify logo'
                  width={140}
                  height={28}
                  className=""
                />

                <ul className="header-nav_elements">
                {navLinks.map((navLink) => {
                  const isActive = navLink.route === pathname

                    return(
                      <li 
                        className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}
                        key={navLink.route} 
                      >
                        <Link className="sidebar-link cursor-pointer" href={navLink.route}>
                          <Image
                            src={navLink.icon}
                            width={24}
                            height={24}
                            alt="link logo"
                          />
                          {navLink.label}
                        </Link>
                      </li>
                    )
                  })
                }
                </ul>
              </>
            </SheetContent>
          </Sheet>
      </SignedIn>
    </nav>

    </header>
  )
}

export default MobileNav;