import { z } from "zod";

export const formSchema = z.object({
  destination: z.string().min(1, "Destination is required"),
  from: z.string().min(1, "Origin is required"),
  date: z.string().min(1, "Date is required"),
  days: z.string().min(1, "Number of days is required"),
  travelMode: z.string().min(1, "Preferred mode of travel is required"),
  people: z.string().min(1, "Number of people is required"),
  whatsapp: z.string().optional(), // Removed validation for WhatsApp
  purpose: z.string().optional(), // Removed validation for Purpose
  details: z.string().optional(),
  email: z.string().optional(), // Removed validation for Email
});

export type FormData = z.infer<typeof formSchema>;
