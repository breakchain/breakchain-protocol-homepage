import { SvgIcon, Link } from "@mui/material";
import { ReactComponent as GitHub } from "./assets/icons/github.svg";
import { ReactComponent as Medium } from "./assets/icons/medium.svg";
import { ReactComponent as Twitter } from "./assets/icons/twitter.svg";
// import { ReactComponent as Facebook } from "./assets/icons/facebook2.svg";
// import { ReactComponent as Telegram } from "./assets/icons/telegram2.svg";
import { FacebookOutlined } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";

export default function Social() {
  return (
    <div className="social-row">
      <Link href="https://twitter.com/breakchainx" target="_blank">
        <SvgIcon viewBox="-4 0 24 24" color="primary" component={Twitter} />
      </Link>

      <Link href="https://www.facebook.com/BreakChainX" target="_blank">
        <SvgIcon viewBox="0 3 24 24" color="primary" component={FacebookOutlined} />
      </Link>

      <Link href="https://breakchain-protocol.medium.com/" target="_blank">
        <SvgIcon viewBox="-2 0 24 24" color="primary" component={Medium} />
      </Link>

      <Link href="https://github.com/breakchain" target="_blank">
        <SvgIcon viewBox="-2 0 24 24" color="primary" component={GitHub} />
      </Link>

      <Link href="https://t.me/+HQItttSpH29iZWIx " target="_blank">
        <SvgIcon viewBox="0 3 24 24" color="primary" component={Telegram} />
      </Link>
    </div>
  );
}
