import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import SearchForm from "@/components/Header/SearchForm";
import "./header.scss";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper__container md:px-5 2xl:px-10">
        {/* <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <Link className="block flex-shrink-0" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/Logo.svg"}
              alt="Logo"
            />
          </Link>
        </div> */}

        <div className="">
          <Image
            src={"/images/logo/Logo.svg"}
            alt="logo"
            width={144}
            height={30}
          />
        </div>
        <div className="hidden xl:block">
          <SearchForm />
        </div>

        <div className="header-wrapper__profile flex items-center justify-normal gap-8 2xsm:gap-8 lg:w-full lg:justify-end xl:w-auto xl:justify-normal">
          <ul className="flex items-center gap-12 2xsm:gap-12">
            {/* <!-- Docs --> */}
            {/* <DarkModeSwitcher /> */}
            <p className="hidden xl:block">Docs</p>
            {/* <!-- Docs --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
