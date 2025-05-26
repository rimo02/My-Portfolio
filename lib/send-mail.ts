// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export async function sendMail({
//   email,
//   sendTo,
//   subject,
//   text,
// }: {
//   email: string;
//   sendTo: string;
//   subject: string;
//   text: string;
// }) {
//   try {
//     await transporter.sendMail({
//       from: email,
//       to: sendTo,
//       subject: subject,
//       html: `${text}`,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }
