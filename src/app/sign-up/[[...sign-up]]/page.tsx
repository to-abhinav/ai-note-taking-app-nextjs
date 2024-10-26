import { SignUp } from '@clerk/nextjs'
import { Metadata } from 'next'
import React from 'react'


export const metadata: Metadata = {
    title: 'mind-me | Sign Up',
    description: 'Sign up to mind-me',
}

function SignUpPage() {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
        <SignUp appearance={{ variables: { colorPrimary: '#0F172A' } }} />
    </div>
    </>
  )
}

export default SignUpPage