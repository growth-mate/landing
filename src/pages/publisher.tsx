import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Publishers() {
  return (
    <Layout>
      <BasicMeta url={"/publishers"} />
      <OpenGraphMeta url={"/publishers"} />
      <TwitterCardMeta url={"/publishers"} />
      <div className="container">
        <div>
          <h1>Publishers</h1>
          <p>Here is some information about what publishers do and how they contribute to the ecosystem.</p>
          <SocialList />
        </div>
      </div>
      {/* Additional styles or scripts can go here */}
    </Layout>
  );
}
