"use client"

import { Button, ButtonProps } from "@nextui-org/button"

type TProps = {
  title: string
}
const AuthButton = ({ title, ...attrs }: Omit<ButtonProps, "title"> & TProps) => {
  return (
    <Button variant="shadow" color="secondary" {...attrs}>
      <span className="font-medium">{title}</span>
    </Button>
  )
}

export { AuthButton }
