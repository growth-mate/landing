import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import config from "../lib/config";
import Link from "next/link";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, We're <span className="fancy">GrowthMate</span>.
          </h1>
          <span className="handle">{config.twitter_account}</span>
          <h2>We grow your project with hyper-targeted ads!</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMhfRx52E-J_-8XUyb3RXqLthav1Zlgm3HU_H9yfOD68BrXQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="launch-button">Join Our Waitlist</div>
          </a>
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
          color: #8cb88c;
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
          border-radius: 10px;
          color: white;
          background-color: #8cb88c;
          font-size: 20px;
          text-align: center;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          width: auto;
          max-width: 250px;
          animation: wiggle 5s infinite;
        }
        .launch-button:hover {
          background-color: #f8f8f8;
          color: black;
        }

        @keyframes wiggle {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(0deg); }
            12% { transform: rotate(5deg); }
            14% { transform: rotate(-5deg); }
            16% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
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
