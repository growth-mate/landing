import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";

export default function Advertisers() {
  return (
    <Layout>
      <BasicMeta url={"/advertisers"} />
      <OpenGraphMeta url={"/advertisers"} />
      <TwitterCardMeta url={"/advertisers"} />
      <div className="container">
        <div>
          <h1>Advertisers</h1>
          <p>Here is some information about the role of advertisers within our platform and their benefits.</p>
          <SocialList />
        </div>
      </div>
      {/* Additional styles or scripts can go here */}
    </Layout>
  );
}
