"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert } from "@/components/ui/alert";
import { FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";
import { Terminal } from "lucide-react";
import {login, authMe} from "@/app/lib/auth-client"; // Import login and getUser functions

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  // Check if the user is already authenticated
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await authMe(); // Call /auth/me as POST
        if (response?.data) {
          router.push('/user/dashboard');
        }
      } catch (err) {
        console.log('User not logged in, staying on login page.');
      }
    };

    checkSession();
  }, [router]);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login({ email, password });
      console.log("Login Response:", response); // Debugging: Check the response
      router.push('/user/dashboard'); // Redirect to the dashboard
    } catch (err: any) {
      console.error("Login Error:", err.response || err.message); // Debugging: Log the error
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Welcome Back to Olu Marketplace</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert className="mb-4 bg-red-100 text-red-700">
              <Terminal className="h-6 w-6 mr-3" />
              <div>
                <p className="font-bold">Heads up!</p>
                <p className="text-sm">{error}</p>
              </div>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <FaEnvelope />
                </span>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                  <FaLock />
                </span>
                <Input
                  type="password"
                  id="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Link href="/auth/forget-password" className="text-danger text-sm hover:underline">
              Forgot Password?
            </Link>

            <Button
              type="submit"
              disabled={loading}
              className="bg-danger text-white hover:bg-white hover:text-danger hover:border hover:border-danger transition duration-300 flex items-center justify-center"
            >
              {loading ? <FaSpinner className="animate-spin" /> : 'Login'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>
            Don&#39;t have an account?
            <Link href="/auth/register" className="text-danger text-sm ml-2">
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}