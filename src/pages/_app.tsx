import { ToastContainer } from 'react-toastify';
import { FiltersProvider } from '@/context/filters';
import { ItemsProvider } from '@/context/items';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ItemsProvider>
      <FiltersProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </FiltersProvider>
    </ItemsProvider>
  );
}
