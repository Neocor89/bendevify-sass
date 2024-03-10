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
      </SignedIn>
    </nav>

    </header>
  )
}

export default MobileNav;