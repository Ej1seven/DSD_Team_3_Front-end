"use client"

import { FunctionComponent, useState, useEffect } from "react"
import { request, setAuthHeader } from "../helpers/axios_helper"

const AuthPage: FunctionComponent = () => {
  const [currentScreen, setCurrentScreen] = useState<"login" | "register">(
    "login"
  )
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [data, setData] = useState([])

  useEffect(() => {
    request("GET", "/messages", {})
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          setAuthHeader(null)
        } else {
          setData([error.response?.code])
        }
      })
  }, [])

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // add login logic here
    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* <ul>
        {data.map((line, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            {line}
          </li>
        ))}
      </ul> */}
      <div className="max-w-md w-full space-y-8">
        {currentScreen === "login" ? (
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        ) : (
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register an account
          </h2>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px mb-10">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {currentScreen === "login" ? (
            <button
              type="submit"
              className="hover:shadow-inner bg-[#fca311] cursor-pointer [border:none] p-3 bg-orange rounded-lg shadow-[0px_0px_64px_rgba(20,_33,_61,_0.3)] group relative w-full flex justify-centerbox-border items-center justify-center"
            >
              Log in
            </button>
          ) : (
            <button
              type="submit"
              className="hover:shadow-inner bg-[#fca311] cursor-pointer [border:none] p-3 bg-orange rounded-lg shadow-[0px_0px_64px_rgba(20,_33,_61,_0.3)] group relative w-full flex justify-centerbox-border items-center justify-center"
            >
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default AuthPage
