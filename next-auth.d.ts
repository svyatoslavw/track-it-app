// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation
import type { UserRole } from "@prisma/client"
import "next-auth"

import { IUser } from "@/shared/lib/types"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    user: IUser
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string
    role: UserRole
  }
}
