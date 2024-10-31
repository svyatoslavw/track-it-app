import { User } from "@nextui-org/user"

import { IUser } from "@/shared/lib"

const UserInfo = ({ user }: { user: IUser }) => {
  return (
    <User
      avatarProps={{
        ImgComponent: "img",
        imgProps: {
          draggable: false,
          width: 40,
          height: 40
        },
        alt: user.name,
        src: user.image
      }}
      classNames={{
        name: "text-md md:text-sm",
        description: "text-sm md:text-xs text-foreground"
      }}
      description={user.email}
      name={user.name}
    />
  )
}

export { UserInfo }
