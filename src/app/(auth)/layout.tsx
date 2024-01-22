import { ClerkProvider } from '@clerk/nextjs'
import { Kanit } from 'next/font/google'
import { Metadata } from 'next/types'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next.js 14 Meta Threads Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={kanit.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
