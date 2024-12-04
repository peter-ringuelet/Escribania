import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { motion } from "framer-motion"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  delay?: number
}

export function TeamMember({ name, role, image, delay = 0 }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="text-center">
        <CardHeader className="space-y-4">
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-muted-foreground">{role}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

