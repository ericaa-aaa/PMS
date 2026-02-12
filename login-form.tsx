"use client"

import { useState } from "react"

export function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[280px] flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
          className="w-full h-10 px-3 text-sm bg-card text-card-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div className="flex flex-col gap-1">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Password"
          className="w-full h-10 px-3 text-sm bg-card text-card-foreground border border-border rounded-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-xs text-[hsl(var(--accent))] hover:underline bg-transparent border-none cursor-pointer"
        >
          Forgot Password?
        </button>
      </div>
      <button
        type="submit"
        className="w-full h-10 bg-primary text-primary-foreground font-semibold text-sm rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
      >
        Login
      </button>
    </form>
  )
}
