const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const data = body.payload.data;

    // Only send for the booking inquiry form (safety check in case other forms get added later)
    if (body.payload.form_name !== "booking-inquiry") {
      return { statusCode: 200, body: "Skipped — not the booking form" };
    }

    const customerEmail = data.email;
    const firstName = data.firstName || "there";
    const tourType = data.tourType || "your selected tour";
    const amountDue = data.amountDue;
    const paymentType = data.paymentType;

    if (!customerEmail) {
      return { statusCode: 200, body: "No email provided, skipping" };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_APP_PASSWORD,
      },
    });

    const paymentLine = amountDue
      ? `<p>Once we confirm your booking details, we'll send you a PayPal invoice for <strong>$${amountDue}</strong> (${paymentType === "deposit" ? "25% deposit" : "full payment"}). Your spot is officially reserved once payment is received.</p>`
      : "";

    await transporter.sendMail({
      from: `"Roatan by EliTe Tours" <${process.env.ZOHO_EMAIL}>`,
      to: customerEmail,
      subject: "We got your inquiry! — Roatan by EliTe Tours",
      html: `
        <div style="font-family: sans-serif; color: #2c1f14; max-width: 500px;">
          <h2 style="color: #0d5247;">Thanks, ${firstName}! 🌴</h2>
          <p>We received your inquiry about <strong>${tourType}</strong> and we're excited to help plan your Roatán experience.</p>
          ${paymentLine}
          <p>If you have any questions in the meantime, message us on WhatsApp: <a href="https://wa.me/50433877147">+504 3387-7147</a></p>
          <p>Talk soon!<br/>Roatan by EliTe Tours</p>
        </div>
      `,
    });

    return { statusCode: 200, body: "Confirmation email sent" };
  } catch (err) {
    console.error("Confirmation email error:", err);
    // Return 200 anyway — a failed confirmation email should never break the actual form submission for the customer
    return {
      statusCode: 200,
      body: "Error sending email, but not blocking submission",
    };
  }
};
