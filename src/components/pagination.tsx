import { Button } from './ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'
import { Separator } from './ui/separator'

export interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export function PaginationComponent({
  pageIndex,
  perPage,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  console.log(pageIndex)

  return (
    <div className="flex flex-1 items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <div>
        <Pagination className="flex items-center gap-4">
          <div className="text-sm font-medium">
            Página {pageIndex + 1} de {pages}
          </div>
          <Separator orientation="vertical" className="h-6" />
          <PaginationContent>
            <PaginationItem hidden={pageIndex === 0} className="cursor-pointer">
              <PaginationPrevious onClick={() => onPageChange(pageIndex - 1)} />
            </PaginationItem>
            <PaginationItem hidden={pageIndex === 0}>
              <PaginationLink onClick={() => onPageChange(pageIndex - 1)}>
                {pageIndex}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>{pageIndex + 1}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink onClick={() => onPageChange(pageIndex + 1)}>
                {pageIndex + 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={() => onPageChange(pageIndex + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
