// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Dossier de présentation",
  description: "Recevez notre dossier de présentation et découvrez nos services.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
