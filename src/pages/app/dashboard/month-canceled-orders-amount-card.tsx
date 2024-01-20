import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// export interface MonthCanceledOrdersAmountCardProps {}

export function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">
          Cancelados (mes)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">4</span>
        <p>
          <span className="text-emerald-500 dark:text-emerald-400">-1%</span> em
          relacao ao mes anterior
        </p>
      </CardContent>
    </Card>
  )
}
