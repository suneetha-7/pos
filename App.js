// import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PayrollLayout from "./components/PayrollLayout";
import RetailShopLayout from "./components/RetailShopLayout";
import RetailChainLayout from "./components/RetailChainLayout";
import Home from "./pages/Home";
import RetailShop from "./pages/RetailShop";
import RetailChain from "./pages/RetailChain";
import Payroll from "./pages/Payroll";
import TermsAndConditions from "./components/Termsandconditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./index.css";
import { Helmet } from "react-helmet";
import TagManager from "react-gtm-module";

function App() {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-TF25FJQ7", // Replace with your GTM ID
    };
    TagManager.initialize(tagManagerArgs);

    // Inject noscript tag into body
    const noscriptTag = document.createElement("noscript");
    noscriptTag.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF25FJQ7"
                                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscriptTag);
  }, []);
  return (
    <>
      <Helmet>
        {/* Google Tag Manager script */}
        <meta
          name="google-site-verification"
          content="4jhgbpXVLFZ75A5Ya1vPEIf714TjdFWqd6rJ_QWUD5Y"
        />
        <script type="text/javascript">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TF25FJQ7');`}
        </script>
        {/* Google Tag Manager noscript fallback */}
        <noscript>
          {`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF25FJQ7"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`}
        </noscript>
      </Helmet>

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Route>
          <Route path="/retailshop" element={<RetailShopLayout />}>
            <Route index element={<RetailShop />} />
          </Route>
          <Route path="/retailchain" element={<RetailChainLayout />}>
            <Route index element={<RetailChain />} />
          </Route>
          <Route path="/payroll" element={<PayrollLayout />}>
            <Route index element={<Payroll />} />
          </Route>
          <Route path="payroll/features" element={<Payroll />} />
          <Route path="/payroll/add-on" element={<Payroll />} />
          <Route path="/payroll/more-features" element={<Payroll />} />
          <Route path="/payroll/industries" element={<Payroll />} />
          <Route path="/payroll/subscription" element={<Payroll />} />
          <Route path="/payroll/faq" element={<Payroll />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
