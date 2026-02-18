import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { google } from "googleapis";

// Initialize AWS SES
const ses = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

export async function POST(req) {
  try {
    // Get form data
    const { name, email, phone, company, subject, subSubject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, Email, and Message are required" }),
        { status: 400 }
      );
    }

    // ----------------------
    // 1. Send email via AWS SES
    // ----------------------
    const emailParams = {
      Source: "contact@vulnuris.in", // Replace with SES verified email
      Destination: { ToAddresses: ["raj.k@vulnuris.com","atharva.b@vulnuris.com"] },
      
      Message: {
        Subject: { Data: `New Inquiry from ${name} –  ${company}` },
        Body: {
          Html: {
            Data: `
 
             <div style="background-color:#eef2f6; padding:40px 0; font-family:'Segoe UI', Roboto, Arial, sans-serif;">
  
  <div style="max-width:680px; margin:0 auto; background:#ffffff; border-radius:10px; box-shadow:0 8px 24px rgba(0,0,0,0.08); overflow:hidden;">

    <!-- Header -->
    <div style="padding:26px 32px; background:#020617;">
      <h1 style="margin:0; font-size:20px; font-weight:600; color:#ffffff;">
        New Inquiry Notification
      </h1>
    </div>

    <!-- Content -->
    <div style="padding:32px; color:#0f172a;">

      <p style="margin-top:0; font-size:14px; color:#334155;">
        The following contact details have been received for your review:
      </p>

      <!-- Unified Professional Table -->
      <table style="width:100%; border-collapse:collapse; margin-top:20px; font-size:14px; border:1px solid #e5e7eb;">

        <tr style="background-color:#f1f5f9;">
          <td colspan="2" style="padding:12px; font-weight:600; color:#020617; border:1px solid #e5e7eb;">
            Contact Information
          </td>
        </tr>

        <tr>
          <td style="padding:12px; font-weight:600; width:32%; border:1px solid #e5e7eb;">
            Full Name
          </td>
          <td style="padding:12px; border:1px solid #e5e7eb;">
            ${name}
          </td>
        </tr>

        <tr style="background-color:#f9fafb;">
          <td style="padding:12px; font-weight:600; border:1px solid #e5e7eb;">
            Email Address
          </td>
          <td style="padding:12px; border:1px solid #e5e7eb;">
            ${email}
          </td>
        </tr>

        <tr>
          <td style="padding:12px; font-weight:600; border:1px solid #e5e7eb;">
            Phone Number
          </td>
          <td style="padding:12px; border:1px solid #e5e7eb;">
            ${phone || "Not Provided"}
          </td>
        </tr>

        <tr style="background-color:#f9fafb;">
          <td style="padding:12px; font-weight:600; border:1px solid #e5e7eb;">
            Company
          </td>
          <td style="padding:12px; border:1px solid #e5e7eb;">
            ${company || "Not Provided"}
          </td>
        </tr>

        <tr>
          <td style="padding:12px; font-weight:600; border:1px solid #e5e7eb;">
            Subject
          </td>
          <td style="padding:12px; border:1px solid #e5e7eb;">
            ${subject || "General Inquiry"}
          </td>
        </tr>

        <tr>
          <td style="padding:12px; font-weight:600; border:1px solid #e5e7eb;">
            Sub-Subject
          </td>
          <td style="padding:12px; border:1px solid #e5e7eb;">
            ${subSubject || "General Inquiry"}
          </td>
        </tr>

        <tr style="background-color:#f1f5f9;">
          <td colspan="2" style="padding:12px; font-weight:600; color:#020617; border:1px solid #e5e7eb;">
            Message Details
          </td>
        </tr>

        <tr>
          <td colspan="2" style="padding:14px; border:1px solid #e5e7eb; line-height:1.6; color:#334155;">
            ${message.replace(/\n/g, "<br>")}
          </td>
        </tr>

      </table>

      <p style="margin-top:30px; font-size:12.5px; color:#64748b;">
        This notification was generated automatically from the official website contact form.
      </p>

    </div>

  </div>

</div>

            `,
          },
          Text: {
            Data: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Subject: ${subject || "N/A"}
Sub-subject:${subSubject || "N/A"}
Message: ${message}


            `,
          },
        },
      },
    };

    await ses.send(new SendEmailCommand(emailParams));

    // ----------------------
    // 2. Save data to Google Sheets
    // ----------------------

    // const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
    // credentials.private_key = credentials.private_key.replace(/\\n/g, "\n");

    // const auth = new google.auth.GoogleAuth({
    //   credentials,
    //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    // });

    // const sheets = google.sheets({ version: "v4", auth });

    // await sheets.spreadsheets.values.append({
    //   spreadsheetId: process.env.SHEET_ID,
    //   range: "Form Responses 1",
    //   valueInputOption: "RAW",
    //   insertDataOption: "INSERT_ROWS",
    //   requestBody: {
    //     values: [[
    //       new Date().toISOString(),
    //       name,
    //       email,
    //       company || "",
    //       subject || "",
    //       message
    //     ]],
    //   },
    // });

    // ----------------------
    // Return success
    // ----------------------
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
