import { test, expect } from "@playwright/test";
import { SMTPServer } from "smtp-server";
import { simpleParser } from "mailparser";

test("Contact Page Sends Email", async ({ page }) => {
  const message = {
    name: "John Campbell",
    email: "john@mrcampbell.ca",
    subject: "hello",
    body: "hello John Campbell",
  };

  let receivedEmail: any = null;

  const mockServer = new SMTPServer({
    onData(stream, session, callback) {
      simpleParser(stream, {}, (err, parsed) => {
        if (err) {
          console.log(err);
          callback(err);
        } else {
          expect(parsed.subject).toBe(message.subject);
          expect(parsed.text).toContain(message.body);
          expect(parsed.from?.value[0].address).toBe(process.env.EMAIL);
          receivedEmail = parsed;
          callback();
        }
      });
    },
    onAuth(auth, session, callback) {
      callback(null, { user: "user" });
    },
  });

  mockServer.listen(Number(process.env.EMAIL_PORT), process.env.EMAIL_HOST);

  await page.goto("/contact");
  await page.getByRole("textbox", { name: "Your Name" }).fill(message.name);
  await page.getByRole("textbox", { name: "Your Email" }).fill(message.email);
  await page
    .getByRole("textbox", { name: "Message Subject" })
    .fill(message.subject);
  await page.getByRole("textbox", { name: "Message....." }).fill(message.body);
  await page.getByRole("button", { name: "Send" }).click();

  await expect(page.getByText("Message sent successfully")).toBeVisible();

  mockServer.close();
});
