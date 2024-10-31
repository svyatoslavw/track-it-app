import { Session } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

import { ROUTES } from "./shared/config"
import { auth } from "@/auth"

export default auth((req: NextRequest & { auth: Session | null }) => {
  const url = req.nextUrl.clone()

  if (!req.auth) {
    url.pathname = ROUTES.AUTH

    return NextResponse.rewrite(url)
  }

  if (req.auth && url.pathname === ROUTES.AUTH) {
    url.pathname = ROUTES.HOME

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
})

export const config = {
  matcher: ["/", "/settings", "/analytics", "/auth"]
}
