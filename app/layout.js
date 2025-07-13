import './globals.css'
import ReactQueryProvider from './ReactQueryProvider'

export const metadata = {
  title: 'Edvent.uz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-sans">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
