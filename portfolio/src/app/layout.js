import Link from 'next/link';
import styles from './styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.navbar}>
          <Link href="/">PRINCIPAL</Link>
          <Link href="/about">SOBRE</Link>
          <Link href="/contact">CONTATO</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
