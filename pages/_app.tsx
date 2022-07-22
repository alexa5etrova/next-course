import NextNProgress from "nextjs-progressbar";

import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {/* <style global jsx>{`
        body {
          font-family: "Roboto", sans-serif;
        }
      `}</style> */}
    </>
  );
}

export default MyApp;
