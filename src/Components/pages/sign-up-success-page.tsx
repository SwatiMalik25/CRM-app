"use client"

import * as React from "react"
import { createClient } from "@supabase/supabase-js"
import { type User } from "@supabase/supabase-js"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Menu, PaperclipIcon, ArrowUp } from 'lucide-react'
import "./sign-up-success-page.css"

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl!, supabaseAnonKey!);

// Access the OpenAI API key
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

export default function SignUpSuccessPage() {
  const [user, setUser] = React.useState<User | null | undefined>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [inputValue, setInputValue] = React.useState<string>("");
  const [response, setResponse] = React.useState<string | null>(null);

  React.useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null)
    })

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  React.useEffect(() => {
    if (!supabaseUrl || !supabaseAnonKey) {
      setError('Missing Supabase environment variables')
    }
  }, [])

  const handleSendMessage = async () => {
    if (!inputValue) return;

    try {
      const apiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: inputValue }],
          max_tokens: 150,
        }),
      });

      if (!apiResponse.ok) {
        const errorText = await apiResponse.text();
        console.error(`HTTP error! status: ${apiResponse.status}, message: ${errorText}`);
        throw new Error(`HTTP error! status: ${apiResponse.status}, message: ${errorText}`);
      }

      const data = await apiResponse.json();
      console.log("API Response:", data);
      setResponse(data.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching data from OpenAI:", error);
      setResponse("An error occurred while fetching the response.");
    }

    setInputValue("");
  };

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  return (
    <div className="container flex flex-col bg-white p-responsive">
      <header className="flex h-14 items-center justify-between border-b px-4 lg:px-6">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex items-center gap-2">
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-sm font-semibold">GPT 4o mini</span>
          </div>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-responsive text-center">
        <div className="mb-4 flex items-center gap-2">
          <svg fill="#000000" width="100px" height="100px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M21.9,19.3l-9-15.6c-0.1-0.1-0.2-0.2-0.3-0.3c-0.5-0.3-1.1-0.2-1.4,0.3l-9,15.6C2,19.4,2,19.6,2,19.8c0,0.6,0.4,1,1,1h18c0.2,0,0.3,0,0.5-0.1C22,20.4,22.1,19.8,21.9,19.3z"/></svg>
          <span className="text-xl">+</span>
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <p className="mx-auto max-w-content text-base text-gray-600">
          This is an <span className="font-semibold">open source</span> chatbot
          template built with Next.js and the AI SDK by Vercel. It uses the{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm font-mono">
            streamText
          </code>{" "}
          function in the server and the{" "}
          <code className="rounded bg-gray-100 px-1 py-0.5 text-sm font-mono">
            useChat
          </code>{" "}
          hook on the client to create a seamless chat experience.
        </p>
        <p className="mt-4 text-gray-600">
          You can learn more about the AI SDK by visiting the{" "}
          <a href="/docs" className="underline hover:text-gray-900">
            docs
          </a>
          .
        </p>
        {response && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <p className="text-gray-800">{response}</p>
          </div>
        )}
      </main>
      <footer className="border-t p-responsive">
        <div className="footer-container">
          <div className="flex flex-wrap justify-center gap-2">
            <Button
              variant="outline"
              className="h-[52px] rounded-[21px] bg-white px-4 text-sm text-gray-600 hover:bg-gray-50"
            >
              What is the weather in San Francisco?
            </Button>
            <Button
              variant="outline"
              className="h-[52px] rounded-[21px] bg-white px-4 text-sm text-gray-600 hover:bg-gray-50"
            >
              Help me draft an essay about Silicon Valley
            </Button>
          </div>
          <div className="relative mt-4 flex justify-center">
            <Input
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
              className="h-16 w-96 rounded-[24px] border-0 bg-gray-50 pl-4 pr-24 text-lg placeholder:text-gray-600"
              placeholder="Send a message..."
            />
            <Button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700"
            >
              <ArrowUp className="h-6 w-6 text-white" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

