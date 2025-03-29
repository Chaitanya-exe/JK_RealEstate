import "../styles/globals.css";

import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "J.K. Estate",
  description: "J.K Estate: 10+ years of real estate excellence in Delhi-NCR. Experts in commercial, industrial, corporate and residential spaces with personalized solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" type="image/x-icon" />
      </head>
      <body className="overflow-x-hidden relative min-h-screen w-full  bg-prim_white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
