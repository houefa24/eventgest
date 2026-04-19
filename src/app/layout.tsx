import type { Metadata } from 'next';
import './globals.css';
import Navbar from "./component/organisms/Navbar";

export const metadata: Metadata = {
  title: "EventGest",
  description: "Gestion d'événements",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 64px)" }}>{children}</main>
        <footer style={{
          borderTop: "1px solid var(--border)",
          padding: "24px 32px",
          textAlign: "center",
          color: "var(--text-faint)",
          fontSize: "13px",
        }}>
          © {new Date().getFullYear()} EventGest
        </footer>
      </body>
    </html>
  );
}
