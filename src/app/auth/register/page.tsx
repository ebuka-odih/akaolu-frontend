import React from 'react';
import AuthForm from '@/app/auth/AuthForm';
import Link from 'next/link';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import { Button } from "@/components/ui/button"


export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen  my-6">
        <Card className="w-[400px] mt-5 mx-3 ">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Welcome to Olu Marketplace</CardDescription>
            </CardHeader>
            <CardContent>
                <AuthForm mode="register"/>

                <Button variant="outline" className="w-full mt-5">
                    Login with Google
                </Button>
            </CardContent>
            <CardFooter className="flex justify-between">

                <p>Have an account?
                    <Link href="/auth/login" className="text-danger text-sm ml-2">
                      Sign In
                    </Link>
                </p>
            </CardFooter>
        </Card>
      </div>

  );
}