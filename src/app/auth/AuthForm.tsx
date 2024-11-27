'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";
import { Terminal } from "lucide-react"

import { Alert, AlertDescription, AlertTitle,} from "@/components/ui/alert"

interface AuthFormProps {
  mode: 'login' | 'register';
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (mode === 'register' && password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const requestBody = mode === 'login' ? { email, password } : { email, password, name };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred.');
      }

      const data = await response.json();
      console.log(`${mode} successful`, data);
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-3">
      <form onSubmit={handleSubmit} className="grid gap-6">
          {error &&
              <div className="flex items-start bg-red-100 text-red-700 rounded-lg p-4 mb-4 border border-red-200">
                  <Terminal className="h-6 w-6 mr-3 text-red-700"/>
                  <div>
                      <p className="font-bold">Heads up!</p>
                      <p className="text-sm">{error}</p>
                  </div>
              </div>
          }


          {mode === 'register' && (
              <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <FaUser />
              </span>
              <Input
                type="text"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10 "
                required
              />
            </div>
          </div>
        )}

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
              className="pl-10 "
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

        {mode === 'login' && (
          <Link href="/auth/forget-password" className="text-danger text-sm ml-2 hover:underline">
            Forgot Password?
          </Link>
        )}

        {mode === 'register' && (
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                <FaLock />
              </span>
              <Input
                type="password"
                id="confirm_password"
                placeholder="Confirm Your Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pl-10 "
                required
              />
            </div>
          </div>
        )}



        <Button
          type="submit"
          disabled={loading}
          className="bg-danger text-white hover:bg-white hover:text-danger hover:border hover:border-danger transition duration-300 flex items-center justify-center"
        >
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : mode === 'login' ? (
            'Login'
          ) : (
            'Sign Up'
          )}
        </Button>
      </form>
    </div>
  );
}