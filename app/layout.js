import "./globals.css";
import NavWrapper from "./components/NavWrapper";

export const metadata = {
  title: "Food App",
  description: "Food app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavWrapper>{children}</NavWrapper>
      </body>
    </html>
  );
}
