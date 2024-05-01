import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
	title: "New Dawn 360 | New Dawn Technologies",
	icons: {
		icon: "/ndt-technologies-web-logo.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ToastContainer />
				{children}
			</body>
		</html>
	);
}
