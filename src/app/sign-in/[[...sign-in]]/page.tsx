import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
    title: "mind-me | Sign In",
    description: "Sign in to mind-me",
}

function SignInPage() {
  return (
    <>
    <div className="flex h-screen items-center justify-center">

      <SignIn appearance={{ variables: { colorPrimary: "#0F172A" } }} />
    </div>
    </>
  );
}

export default SignInPage;
