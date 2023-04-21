import type { AppProps } from 'next/app';
import './root_vars.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
