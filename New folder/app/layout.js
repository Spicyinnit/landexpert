import "./globals.css";

export const metadata = {
  title: "LandExpert",
  description: "Uzbekistan Industrial Land Operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
