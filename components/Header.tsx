import Image from "next/image";
import Link from "next/link";
import logoImage from "../public/images/placeholder-icon.png";
import MobileMenu from "./MobileMenu";
import { HomeIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";


function Header() {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* Left Navbar */}
      <div className="lg:block">
        <Image
          className="rounded-lg"
          src={logoImage}
          width={40}
          height={40}
          alt="logo"
        />
      </div>

      {/* Center Navbar */}
      <div className="hidden lg:flex">
        <div>

        </div>
      </div>

      {/* Right Navbar */}
      <div className="flex items-center gap-4 xl-gap-8 justify-end">
        <div className="hidden lg:flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2">
            <HomeIcon className="h-6 w-6 text-gray-500" />
            <span>Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <UserGroupIcon className="h-6 w-6 text-gray-500" />
            <span>Groups</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <ChatBubbleLeftRightIcon className="h-6 w-6 text-gray-500" />
            <span>Chats</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <BellIcon className="h-6 w-6 text-gray-500" />
            <span>Notifications</span>
          </Link>
        </div>

        <MobileMenu />

        {/* User Button */}

        {/* Sign In Button if not signed in */}
      </div>
    </div>
  );
}

export default Header;
