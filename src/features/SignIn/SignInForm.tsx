"use client"

import { Accordion, AccordionItem } from "@nextui-org/accordion"
import { AuthError } from "next-auth"
import { signIn } from "next-auth/react"
import { useMemo, useState } from "react"

import { AuthButton } from "./AuthButton"
import { APP_NAME, ROUTES } from "@/shared/config"
import { TAuthProvider, TAuthProvidersLoading, TLoginButton } from "@/shared/lib"
import { GithubIcon, GoogleIcon, InfoMessage, Logotype, SpotifyIcon } from "@/shared/ui"

const SignInForm = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const [isLoading, setIsLoading] = useState<TAuthProvidersLoading>({
    github: false,
    google: false,
    spotify: false
  })

  const isAnyLoading = isLoading.github || isLoading.google || isLoading.spotify

  const onSignIn = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    provider: TAuthProvider
  ) => {
    e.preventDefault()
    setIsLoading((prev) => ({ ...prev, [provider]: true }))
    try {
      await signIn(provider, { callbackUrl: ROUTES.HOME })
    } catch (err) {
      if (err instanceof AuthError) {
        console.error(err)
      }
      throw err
    } finally {
      setIsLoading((prev) => ({ ...prev, [provider]: false }))
    }
  }

  const signInButtons = useMemo((): TLoginButton[] => {
    return [
      {
        provider: "github",
        title: "Continue with GitHub",
        isLoading: isLoading.github,
        icon: GithubIcon
      },
      {
        provider: "google",
        title: "Continue with Google",
        isLoading: isLoading.google,
        icon: GoogleIcon
      },
      {
        provider: "spotify",
        title: "Continue with Spotify",
        isLoading: isLoading.spotify,
        icon: SpotifyIcon
      }
    ]
  }, [isLoading.github, isLoading.google, isLoading.spotify])
  const onExpandedChange = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className="flex min-h-screen flex-col justify-between p-4 md:p-8">
      <div className="flex flex-grow flex-col items-center justify-center text-center">
        <div className="mb-4 flex items-center justify-center">
          <Logotype />
        </div>
        <h1 className="mb-1 text-2xl font-bold md:text-3xl">Welcome to {APP_NAME.FULL}</h1>
        <p className="text-default-500">Start tracking your daily habits.</p>
        <div className="my-4 h-[1px] w-full rounded-full bg-foreground-200 md:w-1/2" />
        <p className="mb-4">
          Start{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            {APP_NAME.FULL}
          </span>
        </p>
        <div className="flex flex-col items-center space-y-2">
          {signInButtons.slice(0, 2).map(({ provider, title, isLoading, icon: Icon }) => (
            <AuthButton
              key={provider}
              className="min-w-[220px]"
              disabled={isAnyLoading}
              isDisabled={isAnyLoading}
              isLoading={isLoading}
              startContent={!isLoading && <Icon className="size-4" />}
              title={title}
              onClick={(e) => onSignIn(e, provider)}
            />
          ))}
          <Accordion hideIndicator isCompact onExpandedChange={onExpandedChange}>
            <AccordionItem
              classNames={{
                title: "text-center hover:opacity-hover "
              }}
              title={isExpanded ? "Show Less" : "Show More"}
              value="more"
            >
              <div className="mt-2 flex flex-col items-center space-y-2">
                {signInButtons.slice(2).map(({ provider, title, isLoading, icon: Icon }) => (
                  <AuthButton
                    key={provider}
                    className="min-w-[220px]"
                    disabled={isAnyLoading}
                    isDisabled={isAnyLoading}
                    isLoading={isLoading}
                    startContent={!isLoading && <Icon className="size-4" />}
                    title={title}
                    onClick={(e) => onSignIn(e, provider)}
                  />
                ))}
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2 text-center">
        <InfoMessage text="Application is in beta. We appreciate your feedback." />
        <InfoMessage text="Your name and email will be visible on the site and serve as your primary identifiers." />
      </div>
    </div>
  )
}

export { SignInForm }
