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
      <DialogContent className="sm:max-w-lg">
        {submitted ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="size-12 text-brand-green" strokeWidth={1.25} />
            <p className="font-display text-h3 text-brand-ink">Thank you</p>
            <p className="text-base text-stone">
              We&apos;ve received your enquiry
              {gemstoneName ? ` about the ${gemstoneName}` : ""}. Our team will
              be in touch within one business day.
            </p>
            <Button className="mt-4" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-h3 font-medium text-brand-ink">{title}</DialogTitle>
              <DialogDescription className="text-base text-stone">{description}</DialogDescription>
            </DialogHeader>
            <form
              className="flex flex-col gap-5"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              {gemstoneRef && (
                <p className="eyebrow">
                  Reference: {gemstoneRef}
                </p>
              )}
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" {...register("name")} />
                {errors.name && (
                  <p id="name-error" role="alert" className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined}
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Phone / WhatsApp</Label>
                <Input id="phone" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} placeholder="+94 7X XXX XXXX" {...register("phone")} />
                {errors.phone && (
                  <p id="phone-error" role="alert" className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
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
                size="lg" className="mt-2 w-full"
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
