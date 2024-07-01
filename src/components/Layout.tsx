import Head from "next/head";
import Navigation from "./Navigation";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/wlogo.png" />
        <meta name="theme-color" content="#fff" />
        <script src="https://cdn.amplitude.com/libs/analytics-browser-2.7.4-min.js.gz"></script>
        <script src="https://cdn.amplitude.com/libs/plugin-session-replay-browser-1.4.1-min.js.gz"></script>
        <script src="https://cdn.amplitude.com/libs/plugin-autocapture-browser-0.9.0-min.js.gz"></script>
        <script
          type="text/javascript"
          src="https://app.termly.io/resource-blocker/6f560946-f930-4256-b31d-40426d4ff888?autoBlock=off"
        ></script>
      </Head>
      <nav>
        <Navigation />
      </nav>
      <main>{children}</main>
      <div className="footer">
        <a href="#" className="termly-display-preferences">
          Consent Preferences
        </a>
        {" | "}
        <a
          href="https://cdn.growthmate.xyz/tos.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms Of Service
        </a>
        {" | "}
        <a
          href="https://cdn.growthmate.xyz/privacy-policy.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>
      </div>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 4rem 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
          }
          .footer {
            padding: 0.5rem;
            position: fixed;
            bottom: 0;
            right: 0;
            text-align: right;
            color: #9b9b9b;
            font-size: 10pt;
          }
        `}
      </style>
    </div>
  );
}
