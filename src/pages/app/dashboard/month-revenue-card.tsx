import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// export interface MonthRevenueCardProps {}

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Receita total (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">R$ 1.203,00</span>
        <p>
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span> em
          relacao ao mes anterior
        </p>
      </CardContent>
    </Card>
  )
}
