import { SvgIcon, Link } from "@mui/material";
import { ReactComponent as GitHub } from "./assets/icons/github.svg";
import { ReactComponent as Medium } from "./assets/icons/medium.svg";
import { ReactComponent as Twitter } from "./assets/icons/twitter.svg";
// import { ReactComponent as Facebook } from "./assets/icons/facebook2.svg";
// import { ReactComponent as Telegram } from "./assets/icons/telegram2.svg";
import { FacebookOutlined } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import { fonticons } from "fontawesome";

export default function Social() {
  return (
    <div className="social-row">
      <Link href="https://twitter.com/breakchainx" target="_blank">
      <div class="fa-brands fa-twitter"></div>
        {/* <SvgIcon viewBox="-4 0 24 24" htmlColor="white" component={Twitter} /> */}
      </Link>

      <Link href="https://www.facebook.com/BreakChainX" target="_blank">
      <div class="fa-brands fa-facebook"></div>
        {/* <SvgIcon viewBox="0 3 24 24" htmlColor="white" component={FacebookOutlined} /> */}
      </Link>

      <Link href="https://breakchain-protocol.medium.com/" target="_blank">
      <div class="fa-brands fa-medium"></div>
        {/* <SvgIcon viewBox="-2 0 24 24" htmlColor="white" component={Medium} /> */}
      </Link>

      <Link href="https://github.com/breakchain" target="_blank">
      <div class="fa-brands fa-github"></div>
        {/* <SvgIcon viewBox="-2 0 24 24" htmlColor="white" component={GitHub} /> */}
      </Link>

      <Link href="https://t.me/+HQItttSpH29iZWIx " target="_blank">
      <div class="fa-brands fa-telegram"></div>
        {/* <SvgIcon viewBox="0 3 24 24" color="white" component={Telegram} /> */}
      </Link>
    </div>
  );
}
