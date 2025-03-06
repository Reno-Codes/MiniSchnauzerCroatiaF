import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    phone: text("phone").notNull(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions)
    .omit({ id: true, createdAt: true })
    .extend({
        email: z.string().email(),
        phone: z.string().min(9).max(15),
        message: z.string().min(10).max(1000),
    });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
