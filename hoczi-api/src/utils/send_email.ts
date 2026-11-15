import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";


// Khởi tạo client AWS SES
const sesClient = new SESv2Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

export type HtmlEmail = {
  to: string;
  subject: string;
  // Already-escaped HTML document
  html: string;
  text: string;
};

// Unlike sendEmail above, errors are thrown so the worker can retry with backoff.
export const sendHtmlEmail = async (email: HtmlEmail): Promise<string | undefined> => {
  if (!process.env.FROM_EMAIL) throw new Error('FROM_EMAIL is not configured');
  const response = await sesClient.send(new SendEmailCommand({
    FromEmailAddress: process.env.FROM_EMAIL,
    Destination: { ToAddresses: [email.to] },
    Content: {
      Simple: {
        Subject: { Data: email.subject, Charset: 'UTF-8' },
        Body: {
          Text: { Data: email.text, Charset: 'UTF-8' },
          Html: { Data: email.html, Charset: 'UTF-8' },
        },
      },
    },
  }));
  return response.MessageId;
};
