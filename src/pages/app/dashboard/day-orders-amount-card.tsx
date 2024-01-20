import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// export interface DayOrdersAmountCardProps {}

export function DayOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">12</span>
        <p>
          <span className="text-rose-500 dark:text-rose-400">-2%</span> em
          relacao a ontem
        </p>
      </CardContent>
    </Card>
  )
}
