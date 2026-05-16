import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  propertyType: z.enum(["Apartment", "Villa", "Office"], {
    required_error: "Choose a property type."
  }),
  bhk: z.enum(["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "Villa"], {
    required_error: "Choose a BHK option."
  }),
  servicesInterested: z.array(z.string()).min(1, "Select at least one service."),
  budget: z.enum(["Under ₹5L", "₹5L-10L", "₹10L-20L", "₹20L+"], {
    required_error: "Choose a budget range."
  }),
  message: z.string().min(10, "Tell us a little more about your project.")
});

type ContactFormValues = z.infer<typeof schema>;

const propertyTypes = ["Apartment", "Villa", "Office"] as const;
const bhkOptions = ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK", "Villa"] as const;
const budgetOptions = ["Under ₹5L", "₹5L-10L", "₹10L-20L", "₹20L+"] as const;

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-2 text-sm text-[#F3A79C]">{message}</p>;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      servicesInterested: []
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 800));
    setIsSubmitting(false);
    toast.success("Consultation request received", {
      description: `Thanks ${values.name}. Dee Art will get back to you shortly.`
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-lg p-6 sm:p-8" data-reveal>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#F5F0E8]">Full Name *</span>
          <input className="dee-input" placeholder="Your name" {...register("name")} />
          <FieldError message={errors.name?.message} />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[#F5F0E8]">Email Address *</span>
          <input className="dee-input" type="email" placeholder="you@example.com" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </label>

        <label className="block md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-[#F5F0E8]">Phone Number *</span>
          <input className="dee-input" type="tel" placeholder="+91" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </label>
      </div>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-[#F5F0E8]">Property Type *</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {propertyTypes.map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary/18 bg-white/5 p-4 text-sm text-[#D8D1C7] transition-colors hover:border-primary/55">
              <input type="radio" value={item} className="accent-[#C8A96E]" {...register("propertyType")} />
              {item}
            </label>
          ))}
        </div>
        <FieldError message={errors.propertyType?.message} />
      </fieldset>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-[#F5F0E8]">BHK *</legend>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {bhkOptions.map((item) => (
            <label key={item} className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary/18 bg-white/5 p-4 text-sm text-[#D8D1C7] transition-colors hover:border-primary/55">
              <input type="radio" value={item} className="accent-[#C8A96E]" {...register("bhk")} />
              {item}
            </label>
          ))}
        </div>
        <FieldError message={errors.bhk?.message} />
      </fieldset>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-medium text-[#F5F0E8]">Services Interested In *</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <label key={service.slug} className="flex cursor-pointer items-center gap-3 rounded-lg border border-primary/18 bg-white/5 p-4 text-sm text-[#D8D1C7] transition-colors hover:border-primary/55">
              <input type="checkbox" value={service.name} className="accent-[#C8A96E]" {...register("servicesInterested")} />
              {service.name}
            </label>
          ))}
        </div>
        <FieldError message={errors.servicesInterested?.message} />
      </fieldset>

      <label className="mt-6 block">
        <span className="mb-2 block text-sm font-medium text-[#F5F0E8]">Budget Range *</span>
        <select className="dee-input" {...register("budget")}>
          <option value="">Select budget range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError message={errors.budget?.message} />
      </label>

      <label className="mt-6 block">
        <span className="mb-2 block text-sm font-medium text-[#F5F0E8]">Message *</span>
        <textarea className="dee-input min-h-36 resize-y" placeholder="Tell us about your space, location, timeline and priorities." {...register("message")} />
        <FieldError message={errors.message?.message} />
      </label>

      <Button type="submit" size="lg" className="mt-7 w-full" disabled={isSubmitting}>
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        Submit Consultation Request
      </Button>
    </form>
  );
}
