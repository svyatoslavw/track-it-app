import { Button } from "@nextui-org/button"
import { SquarePen } from "lucide-react"

import { ICategory } from "@/shared/lib"

const CategoryHeadingCard = ({
  category,
  onClick
}: {
  category: ICategory
  onClick: () => void
}) => {
  return (
    <div className="flex items-center justify-between p-3">
      <h5 className="text-xl font-bold">{category.subject}</h5>
      <Button color="secondary" startContent={<SquarePen size={16} />} onClick={onClick}>
        Edit
      </Button>
    </div>
  )
}

export { CategoryHeadingCard }
