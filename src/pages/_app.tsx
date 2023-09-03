
import "@/styles/Index.modules.scss";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Providers from "../utils/providers/providers";
import MainLayout from "@/components/layouts/MainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Providers>
  );
}
