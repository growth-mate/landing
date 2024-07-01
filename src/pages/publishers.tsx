import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Link from "next/link";

export default function Publishers() {
  return (
    <Layout>
      <BasicMeta url={"/publishers"} />
      <OpenGraphMeta url={"/publishers"} />
      <TwitterCardMeta url={"/publishers"} />
      <div className="container">
        <div>
          <h1>Publishers</h1>
          <p className="custom-size">
            Our targeted advertising approach can benefit you by increasing your
            ad space value. By showing more relevant ads, you will achieve
            higher interaction rates, therefore earn higher premiums. That will
            improve both user retention and overall attractiveness of your
            platforms to more advertisers. Each ad campaign is also carefully
            reviewed by us to deliver only high quality content presented to
            your users.
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
        .content p {
          max-width: 600px !important;
          text-align: justify !important;
          word-wrap: break-word !important;
        }
        .custom-size {
          font-size: 1.2rem;
          line-height: 1.5;
          max-width: 700px;
          text-align: justify;
          word-wrap: break-word;
        }
        .fancy {
          color: #15847d;
        }
        .launch-button {
          display: inline-block;
          margin: 20px auto;
          padding: 12px 18px;
          border-radius: 10px;
          color: white;
          background-color: #15847d;
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
          color: black;
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
