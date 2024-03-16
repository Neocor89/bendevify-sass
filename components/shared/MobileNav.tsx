import Link from "next/link";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "../ui/sheet";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

// TODO
//: RESTART HERE 👇

const MobileNav = () => {
  return (
    <header className="header">
    <Link href="/" className="flex items-center gap-2 md:py-2">
      <Image 
        src={"/assets/images/logo-text.svg"}
        alt="logo"
        width={180}
        height={28}
      />
    </Link>

    <nav>
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>
          <Sheet>
            <SheetTrigger>
              <Image 
                src={"/assets/images/icons/menu.svg"}
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
      </SignedIn>
    </nav>

    </header>
  )
}

export default MobileNav;