import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

/**
 * Every size is at least 44px tall (touch target). Only transform, colour and
 * shadow animate; press feedback is a 0.97 scale (emil: buttons must feel
 * pressed). Hover is gated to real pointers so touch doesn't get stuck states.
 */
const buttonVariants = cva(
  "group/button relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent text-sm font-semibold tracking-[0.01em] whitespace-nowrap select-none outline-none transition-[transform,background-color,border-color,color,box-shadow] duration-[var(--duration-press)] ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ring",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-sm [@media(hover:hover)]:hover:bg-brand-forest [@media(hover:hover)]:hover:shadow-md",
        gold: "bg-brand-gold text-brand-ink shadow-sm [@media(hover:hover)]:hover:bg-[#c99d69] [@media(hover:hover)]:hover:shadow-md",
        outline:
          "border-brand-ink/25 bg-transparent text-brand-ink [@media(hover:hover)]:hover:border-brand-ink [@media(hover:hover)]:hover:bg-brand-ink/[0.04]",
        "outline-light":
          "border-white/70 bg-transparent text-white focus-visible:outline-brand-gold [@media(hover:hover)]:hover:border-white [@media(hover:hover)]:hover:bg-white/10",
        secondary:
          "bg-secondary text-secondary-foreground [@media(hover:hover)]:hover:bg-sand",
        ghost:
          "text-foreground [@media(hover:hover)]:hover:bg-brand-ink/[0.05] aria-expanded:bg-brand-ink/[0.05]",
        destructive:
          "bg-destructive/10 text-destructive [@media(hover:hover)]:hover:bg-destructive/20",
        link: "rounded-md px-0 text-primary underline-offset-4 [@media(hover:hover)]:hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-11 px-4",
        lg: "h-[3.25rem] px-8 text-[0.9375rem]",
        icon: "size-11",
        "icon-sm": "size-11",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
