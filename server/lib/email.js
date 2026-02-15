import SibApiV3Sdk from "sib-api-v3-sdk";
import dotenv from "dotenv";
dotenv.config();

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export const sendContactEmail = async ({ name, email, message }) => {
  try {
    return await emailApi.sendTransacEmail({
      sender: {
        email: process.env.MY_EMAIL,
        name: process.env.SENDER_NAME || "Portfolio",
      },
      to: [{ email: process.env.SENDER_EMAIL }],
      subject: `📩 New Portfolio Contact from ${name}`,
      htmlContent: `
      <h2>New Message from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr />
      <p>This message was sent from your portfolio contact form.</p>
    `,
    });
  } catch (error) {console.log(error)}
};
