import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import NavBar from "@/components/navigation/NavBar";
import { Box, Toolbar } from "@mui/material";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  title: "Yoga on Avon",
  description: "Your holistic yoga experience",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />

            <Box
              component="main"
              sx={{ p: 3, mt: {xs:"20%", md: "5%"}}}
            >
       
              {children}
            </Box>
 
 
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
