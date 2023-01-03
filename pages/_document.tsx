import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html dir={"rtl"}>
                <Head>
                    <link rel='stylesheet' href='/pelakFontFamily.css' />
                    <link rel='shortcut icon' href='/icons/Vector.svg' />
                </Head>
                <body className={'custom-scrollbar'}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument