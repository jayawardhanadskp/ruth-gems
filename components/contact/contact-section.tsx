"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Clock, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, type EnquiryValues } from "@/lib/validations/enquiry";

const infoCards = [
  {
    icon: MapPin,
    label: "Visit the Office",
    lines: ["No. 42, Gem Merchants Row", "Ratnapura 70000, Sri Lanka"],
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["hello@ruthgems.lk"],
  },
  {
    icon: Clock,
    label: "Office Hours",
    lines: ["Monday – Friday, 9:00 – 18:00", "Sri Lanka Time (GMT+5:30)"],
  },
];

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryValues>({ resolver: zodResolver(enquirySchema) });

  const onSubmit = async (values: EnquiryValues) => {
    // No backend yet — this is the seam a future API route (e.g. POST /api/enquiries) plugs into.
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Contact form submitted", values);
    setSubmitted(true);
    reset();
  };

  return (
    <section
      id="contact"
      className="flex flex-col gap-10 bg-white px-4 pt-10 pb-14 sm:px-6 lg:flex-row lg:items-start lg:gap-[3.75vw] lg:px-[4.167vw] lg:pt-[3.125vw] lg:pb-[4.688vw]"
    >
      <Reveal className="flex-1 rounded-2xl border border-[#e2d8c6] bg-brand-cream/60 p-6 sm:p-8 lg:rounded-[1.042vw] lg:p-[2.083vw]">
        <h2 className="font-display text-2xl font-semibold text-brand-ink lg:text-[1.563vw]">
          Send us a message
        </h2>
        <p className="mt-2 text-sm text-[#5c5347] lg:mt-[0.521vw] lg:text-[0.833vw]">
          Fill in the form below and our team will reply within one business
          day.
        </p>

        {submitted ? (
          <div className="mt-8 flex flex-col items-center gap-3 rounded-xl bg-white p-8 text-center lg:mt-[2.083vw]">
            <CheckCircle2 className="size-10 text-brand-green" />
            <p className="font-display text-2xl text-brand-ink">Thank you</p>
            <p className="text-sm text-[#5c5347]">
              We&apos;ve received your message. Our team will be in touch
              soon.
            </p>
            <Button
              className="mt-2 h-11 rounded-lg bg-brand-green text-brand-cream hover:bg-brand-green/90"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form
            className="mt-6 flex flex-col gap-4 lg:mt-[1.563vw] lg:gap-[1.042vw]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-name">Full name</Label>
              <Input
                id="contact-name"
                placeholder="Your name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-phone">Phone / WhatsApp</Label>
              <Input
                id="contact-phone"
                placeholder="+94 7X XXX XXXX"
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-xs text-destructive">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea
                id="contact-message"
                placeholder="Tell us what you're looking for, or how we can help."
                rows={4}
                {...register("message")}
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 h-11 rounded-lg bg-brand-green text-brand-cream hover:bg-brand-green/90 lg:mt-[0.521vw]"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        )}
      </Reveal>

      <Reveal
        delay={0.1}
        className="flex flex-col gap-6 lg:w-[26.042vw] lg:gap-[1.563vw]"
      >
        <div className="flex flex-col gap-4 lg:gap-[1.042vw]">
          {infoCards.map(({ icon: Icon, label, lines }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl border border-[#e2d8c6] p-4 lg:gap-[0.833vw] lg:rounded-[0.833vw] lg:p-[1.042vw]"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10 lg:size-[2.5vw]">
                <Icon className="size-5 text-brand-green-light lg:size-[1.146vw]" />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold text-brand-ink lg:text-[0.833vw]">
                  {label}
                </p>
                {lines.map((line) => (
                  <p
                    key={line}
                    className="text-[13px] text-[#5c5347] lg:text-[0.729vw]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-[#e2d8c6] lg:h-[13.021vw] lg:rounded-[0.833vw]">
          <iframe
            title="Ruth Gems office location, Ratnapura, Sri Lanka"
            src="https://www.google.com/maps?q=Ratnapura,+Sri+Lanka&output=embed"
            className="absolute inset-0 size-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href="https://wa.me/94770000000"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-brand-green bg-brand-green/5 p-4 transition-colors hover:bg-brand-green/10 lg:gap-[0.833vw] lg:rounded-[0.833vw] lg:p-[1.042vw]"
        >
          <Image
            src="/images/icons/whatsapp.svg"
            alt=""
            width={24}
            height={24}
            className="lg:size-[1.25vw]"
          />
          <div>
            <p className="text-sm font-semibold text-brand-ink lg:text-[0.833vw]">
              Chat on WhatsApp
            </p>
            <p className="text-[13px] text-[#5c5347] lg:text-[0.729vw]">
              +94 77 000 0000
            </p>
          </div>
        </a>
      </Reveal>
    </section>
  );
}
