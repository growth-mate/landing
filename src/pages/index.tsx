import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Link from 'next/link'; 

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, We're GrowthMate<span className="fancy">.</span>
          </h1>
          <span className="handle">@GrowthMate</span>
          <h2>We connect Web3 projects with the right users.</h2>
          <Link href="/app"><a className="launch-button">Launch App</a></Link>
          <SocialList />
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
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
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
