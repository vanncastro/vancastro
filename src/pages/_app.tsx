import type { AppProps } from 'next/app';
import './root_vars.scss';
import '../components/base/ReviewCard.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
