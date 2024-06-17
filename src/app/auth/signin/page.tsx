import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import Signin from "@/components/Auth/Signin";
import "./login.scss";

export const metadata: Metadata = {
  title: "Next.js Login Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Login Page NextAdmin Dashboard Kit",
};

const SignIn: React.FC = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-container__content">
          <div className="hidden w-full login-container__content__left xl:block xl:w-1/2">
          <div className="screen"></div>
            <div className="overflow-hidden dark:!bg-dark-2 dark:bg-none">
              <Link className="mb-10 inline-block" href="/">
                <Image
                  className="login-logo"
                  src={"/images/logo/Logo.svg"}
                  alt="Logo"
                  width={176}
                  height={32}
                />
              </Link>
              <Image
                src={"/images/login/pablo-sign-in 1.svg"}
                alt="login photo"
                width={600}
                height={337}
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 login-container__content__right">
            <div className="w-full p-4 sm:p-12.5 xl:px-[100px]">
              <Signin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
