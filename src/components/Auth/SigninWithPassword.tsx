"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./signinWithPassword.scss";
import { useRouter } from "next/navigation";

export default function SigninWithPassword() {

  const [data, setData] = useState({
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter()

  return (
    <form className="signinForm" onSubmit={() => router.push('/dashboard')}>
      <div className="signinForm-email">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full font-medium text-dark placeholder:font-avenirNext placeholder:font-light"
        />
      </div>

      <div className="signinForm-password relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Enter your password"
          autoComplete="password"
          className="w-full text-dark placeholder:font-avenirNext"
        />

        <span onClick={() => setShowPassword(!showPassword)} className="absolute right-4.5 top-1/2 -translate-y-1/2 font-avenirNext">
          {showPassword? 'HIDE' : 'SHOW'}
        </span>
      </div>

      <div className="mb-6 flex items-center justify-between gap-2 py-2">
        <Link
          href="/auth/forgot-password"
          className="forgotPassword font-avenirNext"
        >
          FORGOT PASSWORD?
        </Link>
      </div>

      <div className="mb-4.5">
        <button
        onClick = {() => router.push('/dashboard')}
          type="submit"
          className="transition hover:bg-opacity-90 font-avenirNext" 
        >
          LOG IN
        </button>
      </div>
    </form>
  );
}
