import z from "zod";
import { type ContactMessage } from "~/types/contact";
import { sendEmail } from "~/server/services/sendEmail";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const message = validateMessage(body);

    await sendEmail(message);

    return {
      message:
        "Message sent successfully, I'll do my best to get back to you in the next couple of days.",
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
        success: false,
      };
    }
  }

  return {
    message: "Unknown error",
    success: false,
  };
});

const contactMsgSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

function validateMessage(message: any): ContactMessage {
  const parsedMessage = contactMsgSchema.safeParse(message);
  if (parsedMessage.success) {
    return parsedMessage.data;
  }
  throw new Error(parsedMessage.error.errors[0].message);
}
