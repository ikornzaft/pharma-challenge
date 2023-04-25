import { FiltersProvider } from '@/context/filters';
import { ItemsProvider } from '@/context/items';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
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
