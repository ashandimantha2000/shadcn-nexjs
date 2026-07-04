import Navbar from "@/components/Navbar";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > 
            <Navbar />
            {children}
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
