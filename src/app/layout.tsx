import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ModeToggle from "@/components/ModeToggle";
import { cn } from "@/lib/utils";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Obscura",
    description: "Simple chatting.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    jetBrainsMono.className,
                    "bg-background h-screen",
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <ModeToggle />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
