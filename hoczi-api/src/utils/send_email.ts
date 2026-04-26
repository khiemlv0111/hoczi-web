import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";


// Khởi tạo client AWS SES
const sesClient = new SESv2Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  });

// Hàm gửi email
export const sendEmail = async (toEmail: string, subject: string, bodyText: string): Promise<void> => {
  const ENV = process.env.NODE_ENV == 'development' ? 'development-': ""
    const params = {
      FromEmailAddress: process.env.FROM_EMAIL,
      Destination: { ToAddresses: [toEmail] },
      Content: {
        Simple: {
          Subject: { Data: subject },
          Body: {
            Text: { Data: bodyText }, // Gửi email dạng text
            Html: { Data: `<html>
                <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
                    <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;">
                        <div style="text-align: center;">
                        <img style="width: 70px; height: 70px" src="https://d1y3v0ou093g3m.cloudfront.net/18f9b2ba-1237-41ce-b880-cf0aa1d940ab-logo.png" alt="Logo" width="70px" height="70px" />
                        </div>
                        <hr style="margin: 20px 0;">
                        <p>${subject}</p>
                         <hr style="margin: 20px 0;">
                          
                        
                        <p>${bodyText}</p>
  
                        <p style="text-align: center; color: #888;">Ứng dụng Tefibit tương thích với nhiều thiết bị và hệ điều hành có mặt trên thị trường.</p>
                    </div>
                </body>
            </html>` }, // Gửi email dạng HTML
          },
        },
      },
    };
    console.log(params);
  
    try {
      const command = new SendEmailCommand(params);
      const response = await sesClient.send(command);
      console.log("✅ Email sent successfully!", response);
    } catch (error) {
      console.error("❌ Failed to send email:", error);
    }
  };
  