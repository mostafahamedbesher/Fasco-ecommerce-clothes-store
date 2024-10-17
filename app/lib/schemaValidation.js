import { z } from "zod";

const formSchema = z.object({
  country: z.string().min(1, { message: "country is required" }),
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(50, { message: "First name must be less than 50 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(50, { message: "Last name must be less than 50 characters" }),
  address: z
    .string()
    .min(1, { message: "Address is required" })
    .max(100, { message: "Address must be less than 100 characters" }),
  city: z
    .string()
    .min(1, { message: "City is required" })
    .max(50, { message: "City must be less than 50 characters" }),
  postalCode: z
    .string()
    .regex(/^\d{5}$/, { message: "Postal code must be a 5-digit number" }),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be a 11-digit number" }),
});

export default formSchema;
