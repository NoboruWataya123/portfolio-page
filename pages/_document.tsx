import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps>{
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element{
        return(
            <Html lang="ru">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;