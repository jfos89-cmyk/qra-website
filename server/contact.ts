import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const contactRouter = router({
  submit: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      try {
        const { name, company, email, message } = input;

        const emailContent = `
New Contact Form Submission

Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message}
        `;

        const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
          },
          body: JSON.stringify({
            personalizations: [
              {
                to: [{ email: "genevieve@qrastrategies.com" }],
                subject: `New Contact Form Submission from ${name}`,
              },
            ],
            from: { email: "noreply@qrastrategies.com" },
            content: [
              {
                type: "text/plain",
                value: emailContent,
              },
            ],
            replyTo: { email },
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send email");
        }

        return { success: true };
      } catch (error) {
        console.error("Contact form submission error:", error);
        throw new Error("Failed to submit contact form");
      }
    }),
});
