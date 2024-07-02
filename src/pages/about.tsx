import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function About() {
  return (
    <Layout>
      <BasicMeta url={"/about"} />
      <OpenGraphMeta url={"/about"} />
      <TwitterCardMeta url={"/about"} />
      <div className="container">
        <div>
          <h1>About</h1>
          <p className="custom-size">  We aspire to be Google AdSense for Web3.
              We offer hyper-targeted ads tailored to the user's transaction history.
              This increases Return on Ad Spend (ROAS) for advertisers, which in turn results in higher earnings for publishers.
              To achieve that, our recommendation algorithm makes use of various process mining and ML techniques for predicting user behavior.
            </p>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .custom-size {
          font-size: 1.2rem; 
          line-height: 1.5;
          max-width: 700px;
          text-align: justify;
          word-wrap: break-word;
        }
        .fancy {
          color: #8cb88c;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
