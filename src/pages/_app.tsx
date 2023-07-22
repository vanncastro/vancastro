import type { AppProps } from 'next/app';
import './root_vars.scss';
import '../components/base/ReviewCard.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
