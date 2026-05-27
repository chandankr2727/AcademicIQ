"use client";

import { motion } from "framer-motion";
import {
  Video,
  Users,
  Bot,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { heroFloatingCards } from "@/constants/features";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Video: <Video className="h-4 w-4 text-primary" />,
  Users: <Users className="h-4 w-4 text-primary" />,
  Bot: <Bot className="h-4 w-4 text-primary" />,
  UserCheck: <UserCheck className="h-4 w-4 text-primary" />,
};

const positions: Record<string, string> = {
  "study-sessions": "left-4 top-32 sm:left-5 sm:top-36",
  "study-circles": "left-4 top-[58%] sm:left-5",
  assist: "right-3 top-32 sm:right-4 sm:top-36",
  tutoring: "right-3 bottom-6 sm:right-4 sm:bottom-8",
};

const avatarColors = [
  "bg-blue-400",
  "bg-purple-400",
  "bg-green-400",
  "bg-orange-400",
  "bg-pink-400",
];

export function FloatingInfoCards() {
  return (
    <>
      {heroFloatingCards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
          className={cn(
            "absolute w-44 rounded-xl bg-white p-3 shadow-lg sm:w-52 sm:p-4",
            positions[card.id]
          )}
        >
          <div className="flex items-start gap-2 sm:gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 sm:h-8 sm:w-8">
              {iconMap[card.icon]}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-navy sm:text-sm">
                {card.title}
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground sm:text-xs">
                {card.description}
              </p>
              {card.meta && (
                <div className="mt-1.5 flex items-center gap-1">
                  {card.id === "assist" ? (
                    <>
                      <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                      <span className="text-[10px] text-emerald-600 sm:text-xs">
                        {card.meta}
                      </span>
                    </>
                  ) : (
                    <span className="text-[10px] font-medium text-primary sm:text-xs">
                      {card.meta}
                    </span>
                  )}
                </div>
              )}
              {card.avatarCount && (
                <div className="mt-1.5 flex items-center gap-1.5">
                  <div className="flex -space-x-1.5">
                    {avatarColors.map((color, idx) => (
                      <div
                        key={idx}
                        className={cn(
                          "h-4 w-4 rounded-full border-2 border-white sm:h-5 sm:w-5",
                          color
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-medium text-muted-foreground sm:text-xs">
                    +{card.avatarCount}
                  </span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
