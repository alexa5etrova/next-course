import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "NextApp" }) {
  return (
    <>
      <Head>
        <title>{title} | NextApp</title>
        <meta name="keywords" content="ключевые слова" />
        <meta name="description" content="описание" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: darkblue;
        }
        nav ul {
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
        }
        nav ul li a {
          text-decoration: none;
          color: white;
        }
        nav ul li a:hover {
          text-decoration: underline;
          color: #686868;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
