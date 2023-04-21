import { Fragment } from 'react';

import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { COLORS } from '../utils/utils';
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
                    <Fragment key="23">
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
                    backgroundColor: COLORS.background,
                }}
            >
                <title>{pageSettings.website_title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
                    rel="stylesheet"
                />

                <Head />
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
