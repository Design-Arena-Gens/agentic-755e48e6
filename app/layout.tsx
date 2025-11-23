import "./globals.css";
import React from "react";

export const metadata = {
  title: "Longest Common Subsequence",
  description: "Compute the Longest Common Subsequence (LCS) of two strings",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
