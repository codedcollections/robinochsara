import * as z from "zod"

export const requiredText = "Du måste fylla i alla fält"

export const attendingLabels = {
  allday: "hela dagen",
  weddingonly: "endast vigsel",
  notattending: "kan tyvärr inte komma",
}

export const rideLabels = {
  fromchurch: "från kyrkan till middagen",
  fromdinner: "från middagen till efterfesten",
}

export const guestSchema = z
  .object({
    name: z
      .string()
      .min(1, "För- och efternamn krävs")
      .regex(/^[a-zA-Zà-ÿÀ-ß ]+$/, "Ange för- och efternamn"),
    lastname: z.string().min(1, "Efternamn krävs"),
    email: z
      .string()
      .optional()
      .refine(
        (val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
        "Ogiltig mejladress",
      ),
    attending: z
      .string()
      .min(1, requiredText)
      .nullable()
      .refine(
        (val) => ["allday", "weddingonly", "notattending"].includes(val),
        {
          message: requiredText,
        },
      ),
    foodPreference: z.array(z.string()).optional().default([]),
    otherFood: z.string().optional(),
    ride: z.array(z.string()).optional().default([]),
  })
  .refine(
    (data) => {
      // Email required if attending
      if (data.attending !== "notattending" && !data.email) return false
      return true
    },
    { message: "Mejladress krävs", path: ["email"] },
  )
