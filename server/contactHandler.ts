import { Request, Response } from "express";
import { notifyOwner } from "./_core/notification";

export async function handleContactSubmission(req: Request, res: Response) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { name, company, email, message } = req.body;

    if (!name || !company || !email || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const emailContent = `
New Contact Form Submission

Name: ${name}
Company: ${company}
Email: ${email}

Message:
${message}
    `;

    await notifyOwner({
      title: `New Contact Form Submission from ${name}`,
      content: emailContent,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
}
