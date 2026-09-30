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
      className="container-page grid gap-10 py-section-sm lg:grid-cols-12 lg:items-start lg:gap-14"
    >
      <Reveal className="surface rounded-3xl p-6 shadow-md sm:p-10 lg:col-span-7">
        <h2 className="font-display type-h3 font-medium text-brand-ink">
          Send us a message
        </h2>
        <p className="mt-2 text-stone">
          Fill in the form below and our team will reply within one business
          day.
        </p>

        {submitted ? (
          <div
            role="status"
            className="mt-8 flex flex-col items-center gap-3 rounded-2xl bg-ivory p-8 text-center"
          >
            <CheckCircle2 className="size-12 text-brand-green" strokeWidth={1.25} />
            <p className="font-display type-h3 text-brand-ink">Thank you</p>
            <p className="text-stone">
              We&apos;ve received your message. Our team will be in touch
              soon.
            </p>
            <Button className="mt-3" onClick={() => setSubmitted(false)}>
              Send another message
            </Button>
          </div>
        ) : (
          <form className="mt-8 flex flex-col gap-5" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Field label="Full name" id="contact-name" error={errors.name?.message}>
              <Input
                id="contact-name"
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                {...register("name")}
              />
            </Field>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" id="contact-email" error={errors.email?.message}>
                <Input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  {...register("email")}
                />
              </Field>
              <Field label="Phone / WhatsApp" id="contact-phone" error={errors.phone?.message}>
                <Input
                  id="contact-phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+94 7X XXX XXXX"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  {...register("phone")}
                />
              </Field>
            </div>
            <Field label="Message" id="contact-message">
              <Textarea
                id="contact-message"
                placeholder="Tell us what you're looking for, or how we can help."
                rows={5}
                {...register("message")}
              />
            </Field>
            <Button type="submit" size="lg" disabled={isSubmitting} className="mt-2 w-full sm:w-auto sm:self-start">
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </form>
        )}
      </Reveal>

      <Reveal delay={0.1} className="flex flex-col gap-5 lg:col-span-5">
        <ul className="flex flex-col gap-3">
          {infoCards.map(({ icon: Icon, label, lines }) => (
            <li key={label} className="surface flex items-center gap-4 rounded-2xl p-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                <Icon className="size-5 text-brand-green" strokeWidth={1.5} />
              </span>
              <div className="flex flex-col gap-0.5">
                <p className="font-display text-xl font-semibold text-brand-ink">{label}</p>
                {lines.map((line) => (
                  <p key={line} className="text-sm text-stone">
                    {line}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="surface relative aspect-[16/10] w-full overflow-hidden rounded-2xl p-1.5">
          <iframe
            title="Ruth Gems office location, Ratnapura, Sri Lanka"
            src="https://www.google.com/maps?q=Ratnapura,+Sri+Lanka&output=embed"
            className="size-full rounded-xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <a
          href="https://wa.me/94770000000"
          target="_blank"
          rel="noreferrer"
          className="group flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-brand-green/40 bg-brand-green/[0.06] p-5 transition-[transform,background-color,border-color] duration-[var(--duration-press)] ease-out active:scale-[0.99] [@media(hover:hover)]:hover:border-brand-green [@media(hover:hover)]:hover:bg-brand-green/10"
        >
          <Image src="/images/icons/whatsapp.svg" alt="" width={28} height={28} />
          <div>
            <p className="font-display text-xl font-semibold text-brand-ink">Chat on WhatsApp</p>
            <p className="text-sm text-stone">+94 77 000 0000</p>
          </div>
        </a>
      </Reveal>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
