import type { Metadata } from "next";
import { ActiveThemeProvider } from "@/components/active-theme";
import { Analytics } from "@/components/analytics";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { LayoutProvider } from "@/hooks/use-layout";
import { META_THEME_COLORS, siteConfig } from "@/lib/config";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

// TODO: complete metadata
export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	metadataBase: new URL(siteConfig.url),
	description: siteConfig.description,
	keywords: ["AI-Powered", "Free", "Academic", "Essay Writer", "Productivity"],
	authors: [
		{
			name: "ahmoin",
			url: "https://ahmoin.com",
		},
	],
	creator: "ahmoin",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: siteConfig.url,
		title: siteConfig.name,
		description: siteConfig.description,
		siteName: siteConfig.name,
		images: [
			{
				url: siteConfig.ogImage,
				width: 1200,
				height: 630,
				alt: siteConfig.name,
			},
		],
	},
	// twitter: {
	// 	card: "summary_large_image",
	// 	title: siteConfig.name,
	// 	description: siteConfig.description,
	// 	images: [siteConfig.ogImage],
	// 	creator: "@ahmoin",
	// },
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					// biome-ignore lint/security/noDangerouslySetInnerHtml: needed for theme
					dangerouslySetInnerHTML={{
						__html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
					}}
				/>
				<meta name="theme-color" content={META_THEME_COLORS.light} />
			</head>
			<body
				className={cn(
					"text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
					fontVariables,
				)}
			>
				<ThemeProvider>
					<LayoutProvider>
						<ActiveThemeProvider>
							{children}
							<TailwindIndicator />
							<Toaster position="top-center" />
							<Analytics />
						</ActiveThemeProvider>
					</LayoutProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
