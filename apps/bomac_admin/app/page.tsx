"use client";

import Link from "next/link";
import React from "react";
import LoginForm from "./components/Login_Form";

export default function page() {
  return (
    <div className="bg-blue-600">
      <div>
        <Link href={`/login`}>Login</Link>
        <LoginForm />
      </div>
    </div>
  );
}
