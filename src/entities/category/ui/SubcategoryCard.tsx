import { Button } from "@nextui-org/button"
import { SquarePen } from "lucide-react"

import { ICategoryItem } from "@/shared/lib"

const SubcategoryCard = ({ item, onClick }: { item: ICategoryItem; onClick: () => void }) => {
  return (
    <div className="mb-2 flex w-full items-center justify-between gap-2 rounded-xl bg-white px-3 py-2">
      <div className="flex items-center gap-3">
        <p className="rounded-lg bg-foreground-100 px-4 py-2">{item.emoji}</p>
        <p className="text-sm font-bold sm:text-lg">{item.name}</p>
      </div>
      <Button color="secondary" startContent={<SquarePen size={16} />} onClick={onClick}>
        Edit
      </Button>
    </div>
  )
}

export { SubcategoryCard }
