import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { ReduxProvider } from "@/redux/provider";

import StyledRegistry from "@/global/layout/StyledRegistry/StyledRegistry";

import BaseLayout from "@/global/layout/BaseLayout/BaseLayout";

const OPENS_SANS = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "We Movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={OPENS_SANS.className}>
        <ReduxProvider>
          <StyledRegistry>
            <BaseLayout>{children}</BaseLayout>
          </StyledRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}
