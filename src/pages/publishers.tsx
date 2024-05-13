import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Link from 'next/link'; 

export default function Publishers() {
  return (
    <Layout>
      <BasicMeta url={"/publishers"} />
      <OpenGraphMeta url={"/publishers"} />
      <TwitterCardMeta url={"/publishers"} />
      <div className="container">
        <div>
          <h1>Publishers</h1>
          <p>Publishers benefit from our targeted advertising approach by increasing the value of their ad space. 
          <br/> More relevant ads boost interaction rates and allow higher premiums, improving both user retention <br/> and the overall attractiveness of their platforms to advertisers.</p>
          <Link href="/" legacyBehavior><a className="launch-button">Publisher login (soon)</a></Link>
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
        .content p {
          max-width: 600px !important;
          text-align: justify !important;
          word-wrap: break-word !important;
        }
        .fancy {
          color: #15847d;
        }
        .launch-button {
          display: inline-block;
          margin: 20px auto;
          padding: 12px 18px;
          border: 3px solid black;
          border-radius: 10px;
          color: black;
          background-color: white;
          text-align: center;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          width: auto; 
          max-width: 250px;
        }
        .launch-button:hover {
          background-color: #f8f8f8;
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
