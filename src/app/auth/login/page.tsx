import React from 'react';
import AuthForm from '@/app/auth/AuthForm';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";


export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <Card className="w-[400px]">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Welcome Back to Olu Marketplace</CardDescription>
            </CardHeader>
            <CardContent>
                <AuthForm mode="login"/>
            </CardContent>
            <CardFooter className="flex justify-between">
                <p>Don&#39;t have an account?
                    <Link href="/auth/register" className="text-danger text-sm ml-2">
                       Sign Up
                    </Link>
                </p>
            </CardFooter>
        </Card>
      </div>

  );
}