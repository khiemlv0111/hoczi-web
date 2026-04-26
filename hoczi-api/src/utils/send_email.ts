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

                        <div>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="center" class="m_-7479895996648637829rewards" valign="top" width="33%" style="border-collapse:collapse"><a class="m_-7479895996648637829outlineButton" href="https://tefibit.com" style="text-decoration:none;color:#22242a;font-weight:600;border-radius:8px;white-space:nowrap;display:block;line-height:24px;margin-right:12px;padding:12px 20px;border:1px solid #cbd0d6" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://remitano.com/loyalty?utm_content%3DQuy%25E1%25BB%2581n%2520l%25E1%25BB%25A3i%2520th%25C3%25A0nh%2520vi%25C3%25AAn%26utm_source%3DOperational%2520email%26utm_medium%3Demail%26utm_campaign%3DLogin%2520new%2520device&amp;source=gmail&amp;ust=1744544309793000&amp;usg=AOvVaw0XpBCnKFud9_sCjSvwCnYf">Quyền lợi thành viên</a></td>
                                        <td align="center" class="m_-7479895996648637829rewards" valign="top" width="33%" style="border-collapse:collapse"><a class="m_-7479895996648637829outlineButton" href="https://tefibit.com" style="text-decoration:none;color:#22242a;font-weight:600;border-radius:8px;white-space:nowrap;display:block;line-height:24px;margin-right:12px;padding:12px 20px;border:1px solid #cbd0d6" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://remitano.com/reward-center?utm_content%3DVoucher%2520ho%25C3%25A0n%2520ph%25C3%25AD%26utm_source%3DOperational%2520email%26utm_medium%3Demail%26utm_campaign%3DLogin%2520new%2520device&amp;source=gmail&amp;ust=1744544309793000&amp;usg=AOvVaw2yfnZhxwvLUrw8XFqvwOox">Voucher hoàn phí</a></td>
                                        <td align="center" valign="top" width="33%" style="border-collapse:collapse"><a class="m_-7479895996648637829outlineButton" href="https://tefibit.com" style="text-decoration:none;color:#22242a;font-weight:600;border-radius:8px;white-space:nowrap;display:block;line-height:24px;padding:12px 20px;border:1px solid #cbd0d6" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://remitano.com/referral?utm_content%3DQu%25C3%25A0%2520m%25E1%25BB%259Di%2520b%25E1%25BA%25A1n%2520m%25E1%25BB%259Bi%26utm_source%3DOperational%2520email%26utm_medium%3Demail%26utm_campaign%3DLogin%2520new%2520device&amp;source=gmail&amp;ust=1744544309793000&amp;usg=AOvVaw1yIafDjPTilzrRRtPjxluq">Quà mời bạn mới</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
  
                        <h2 style="text-align: center;">Giao dịch dễ dàng mọi lúc, mọi nơi cùng Tefibit!</h2>
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
  