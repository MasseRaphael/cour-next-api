import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return(<Html lang="fr">
            <Head>
                <link rel ="preconnect" href="https://fonts.googleapis.com" />
                <link rel ="preconnect" href="https://fonts.gstatics.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>)
    }
}