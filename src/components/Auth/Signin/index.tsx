"use client";
import Link from "next/link";
import React from "react";
import SigninWithPassword from "../SigninWithPassword";
import './signinForm.scss'

export default function Signin() {
  return (
    <>
      {/* <GoogleSigninButton text="Sign in" /> */}

      <div className="signinForm-container">
        <p className="signinForm-container__text font-avenirNext font-extrabold">Welcome!</p>
        <p className="signinForm-container__subtext font-avenirNext">Enter details to login</p>
      </div>

      <div>
        <SigninWithPassword />
      </div>
    </>
  );
}
