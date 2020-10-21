import Link from 'next/link';
import Head from "next/head";

export default function MainLayout({children, title='Next App'}) {
  return (
    <>
      <Head>
        <title>{`${title} | Next Course`}</title>
        <meta name="keywords" content={"next, javascript, next.js, react"}/>
        <meta name="description" content={"The simplest Next.js course"}/>
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
        <Link href={'/about'}><a>About</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
      nav {
        position: fixed;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        background: darkblue;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      nav a {
        color: white;
        text-decoration: none
      }
      
      main {
        margin-top: 60px
      }
      `}</style>
    </>
  )
}