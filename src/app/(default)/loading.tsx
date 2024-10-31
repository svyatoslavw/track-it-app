import { Spinner } from "@nextui-org/spinner"

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-foreground-200 text-foreground">
      <Spinner
        classNames={{
          label: "text-sm font-bold",
          circle1: "border-b-primary",
          circle2: "border-b-primary-600"
        }}
        label="Just a second..."
      />
    </div>
  )
}
