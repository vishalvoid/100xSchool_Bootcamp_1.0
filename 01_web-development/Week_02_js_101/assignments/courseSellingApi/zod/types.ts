import { password } from "bun";
import { email, z } from "zod";

export const signupSchema = z.object({
  email: z.email("Invalid Email Format"),
  password: z.string().min(6, "password must be atleast 6 characters"),
  name: z.string().max(50, "name cannot be more than 50 characters"),
  role: z.enum(["STUDENT", "INSTRUCTOR"]),
});

export type SignupSchema = z.infer<typeof signupSchema>;

export const loginSchema = z.object({
  email: z.email("Invalid Email Format"),
  password: z.string().min(6, "minimum 6 characters required"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const createCourseSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.int(),
});

export type CreateCourseSchema = z.infer<typeof createCourseSchema>;

export const createLessonSchema = z.object({
  title: z.string(),
  content: z.string,
  courseId: z.uuid(),
});

export type CreateLessonSchema = z.infer<typeof createLessonSchema>;

export const purchaseCourseSchema = z.object({
  courseId: z.uuid(),
});

export type PurchaseLessonSchema = z.infer<typeof purchaseCourseSchema>;
