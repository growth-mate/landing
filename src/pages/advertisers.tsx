import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Link from "next/link";

export default function Advertisers() {
  return (
    <Layout>
      <BasicMeta url={"/advertisers"} />
      <OpenGraphMeta url={"/advertisers"} />
      <TwitterCardMeta url={"/advertisers"} />
      <div className="container">
        <div>
          <h1>Advertisers</h1>
          <p className="custom-size">
            {" "}
            Enhance your conversion rate by delivering precisely tailored
            advertisements.
            <br />
            Our solution will increase your returns and boost your
            ad effectiveness.
            <br />
            Launch your campaign in minutes and track your analytics on our dashboard.
            <br />
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScMhfRx52E-J_-8XUyb3RXqLthav1Zlgm3HU_H9yfOD68BrXQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="launch-button">Join Our Waitlist</div>
          </a>
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
        .launch-button {
          display: inline-block;
          margin: 20px auto;
          padding: 12px 18px;
          border-radius: 10px;
          color: white;
          text-align: center;
          cursor: pointer;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          width: auto;
          max-width: 250px;
          animation: wiggle 5s infinite;          
          background-color: #8cb88c;
          font-size: 20px;
        }
        .launch-button:hover {
          background-color: #f8f8f8;
          color: black;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
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
