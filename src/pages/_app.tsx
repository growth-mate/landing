import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";
import React from "react";


export default function App({ Component, pageProps }: AppProps) {
  // Enable Amplitude
  React.useEffect(() => {
    // Amplitude tracking
    if (window.hasOwnProperty("amplitude")) {
      // @ts-ignore
      window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1})).promise.then(function() {window.amplitude.add(window.amplitudeAutocapturePlugin.plugin());window.amplitude.init('0f2cfd7a4e85d321451f8f8c3729e74');});
    }
  }, []);  

  return <Component {...pageProps} />;
}
