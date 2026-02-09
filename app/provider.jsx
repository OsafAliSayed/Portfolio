// app/providers.tsx
'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { usePostHog } from 'posthog-js/react'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

import { ThemeProvider } from "next-themes";

import { POSTHOG_KEY, POSTHOG_HOST } from "@/lib/posthog"

export function Providers({ children }) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>;
}  

export function PostHogProvider({ children }) {
  useEffect(() => {
    if (!POSTHOG_KEY) {
      return
    }

    posthog.init(POSTHOG_KEY, {
      ...(POSTHOG_HOST ? { api_host: POSTHOG_HOST } : {}),
      person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
      defaults: '2025-05-24'
    })
  }, [])

  if (!POSTHOG_KEY) {
    return <>{children}</>
  }

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}
