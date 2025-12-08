"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { useState } from "react"

import { cn } from "@/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-sm text-neutral-300 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

// Mouse-following tooltip component
interface MouseFollowTooltipProps {
  children: React.ReactNode
  content: string
  showCondition?: () => boolean
  className?: string
}

const MouseFollowTooltip: React.FC<MouseFollowTooltipProps> = ({
  children,
  content,
  showCondition = () => true,
  className = ""
}) => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    x: 0,
    y: 0,
  })

  const handleMouseEnter = (event: React.MouseEvent) => {
    if (showCondition() && content) {
      setTooltip({
        visible: true,
        x: event.clientX,
        y: event.clientY,
      })
    }
  }

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip((prev) => ({
        ...prev,
        x: event.clientX,
        y: event.clientY,
      }))
    }
  }

  const handleMouseLeave = () => {
    setTooltip({ visible: false, x: 0, y: 0 })
  }

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={className}
      >
        {children}
      </div>
      
      {/* Custom Tooltip - Only show on desktop */}
      {tooltip.visible && (
        <div
          className="fixed z-50 pointer-events-none bg-neutral-950 border border-neutral-800 rounded-md p-3 text-xs text-neutral-300 shadow-lg italic max-w-xs hidden md:block"
          style={{
            left: `${tooltip.x + 10}px`,
            top: `${tooltip.y + 10}px`,
          }}
        >
          &quot;{content}&quot;
        </div>
      )}
    </>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, MouseFollowTooltip }
