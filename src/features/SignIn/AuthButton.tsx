"use client"

import { Button, ButtonProps } from "@nextui-org/button"

type TProps = {
  title: string
}
const AuthButton = ({ title, ...attrs }: Omit<ButtonProps, "title"> & TProps) => {
  return (
    <Button color="secondary" {...attrs}>
      {title}
    </Button>
  )
}

export { AuthButton }
