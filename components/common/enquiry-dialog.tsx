"use client";

import { useState, type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, type EnquiryValues } from "@/lib/validations/enquiry";

interface EnquiryDialogProps {
  trigger: ReactElement;
  title?: string;
  description?: string;
  gemstoneRef?: string;
  gemstoneName?: string;
}

export function EnquiryDialog({
  trigger,
  title = "Arrange a Viewing",
  description = "Tell us a little about you and we'll reply personally within one business day.",
  gemstoneRef,
  gemstoneName,
}: EnquiryDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { gemstoneRef },
  });

  const onSubmit = async (values: EnquiryValues) => {
    // No backend yet — this is the seam a future API route (e.g. POST /api/enquiries) plugs into.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Enquiry submitted", values);
    setSubmitted(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) {
          setTimeout(() => {
            setSubmitted(false);
            reset();
          }, 200);
        }
      }}
    >
      <DialogTrigger render={trigger} />
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-10 text-brand-green" />
            <p className="font-display text-2xl text-foreground">Thank you</p>
            <p className="text-sm text-muted-foreground">
              We&apos;ve received your enquiry
              {gemstoneName ? ` about the ${gemstoneName}` : ""}. Our team will
              be in touch within one business day.
            </p>
            <Button className="mt-2" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {gemstoneRef && (
                <p className="text-xs tracking-[0.15em] text-muted-foreground uppercase">
                  Reference: {gemstoneRef}
                </p>
              )}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Your name" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" placeholder="+94 7X XXX XXXX" {...register("phone")} />
                {errors.phone && (
                  <p className="text-xs text-destructive">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message">Message (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Anything specific you'd like to know?"
                  rows={3}
                  {...register("message")}
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 h-11 rounded-lg bg-brand-green text-brand-cream hover:bg-brand-green/90"
              >
                {isSubmitting ? "Sending…" : "Send Enquiry"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
