import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"
import { type LucideIcon } from 'lucide-react'

interface AchievementCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function AchievementCard({ icon: Icon, title, description, delay = 0 }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="text-center">
        <CardHeader>
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

