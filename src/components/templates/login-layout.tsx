import { FC } from 'hono/jsx'
import Header from '../atoms/header'
import Footer from '../atoms/footer'

const LoginLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ログインページ</title>
      </head>
      <body>
        <Header title="ログインページ" />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default LoginLayout