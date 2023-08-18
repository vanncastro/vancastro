import { Fragment } from 'react';

import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { pageSettings } from 'src/utils/pageSettings';
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <Fragment key="2398172397">
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </Fragment>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html
                lang="en"
                style={{
                    backgroundColor: 'var(--background)',
                }}
            >
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <title>{pageSettings.website_title}</title>

                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
                    rel="stylesheet"
                />

                <Head>
                    <meta property="og:title" content={pageSettings.meta.title} />
                    <meta property="description" content={pageSettings.meta.desc} />
                    <meta property="og:description" content={pageSettings.meta.desc} />
                    <meta property="og:url" content={pageSettings.meta.url} />
                    <meta property="og:site_name" content={pageSettings.meta.website_name} />
                    <meta property="og:url" content={pageSettings.meta.url} />
                    <meta property="og:type" content={'website'} />
                    <link rel="icon" href="/public/favicon.ico" />
                </Head>
                <body
                    style={{
                        padding: '0',
                        margin: '0 auto',
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
