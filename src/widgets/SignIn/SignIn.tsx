import { InstallPWA, SignInForm } from "@/features"

const SignIn = () => {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-foreground-200 p-4 md:p-8">
      <InstallPWA />
      <SignInForm />
    </div>
  )
}

export { SignIn }
