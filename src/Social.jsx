import { Link } from "@mui/material";

export default function Social() {
  return (
    <div className="social-row">
      <Link href="https://twitter.com/breakchainx" target="_blank">
      <div className="fa-brands fa-twitter social-icon"></div>
        {/* <SvgIcon viewBox="-4 0 24 24" htmlColor="white" component={Twitter} /> */}
      </Link>

      <Link href="https://www.facebook.com/BreakChainX" target="_blank">
      <div className="fa-brands fa-facebook"></div>
        {/* <SvgIcon viewBox="0 3 24 24" htmlColor="white" component={FacebookOutlined} /> */}
      </Link>

      <Link href="https://breakchain-protocol.medium.com/" target="_blank">
      <div className="fa-brands fa-medium"></div>
        {/* <SvgIcon viewBox="-2 0 24 24" htmlColor="white" component={Medium} /> */}
      </Link>

      <Link href="https://github.com/breakchain" target="_blank">
      <div className="fa-brands fa-github"></div>
        {/* <SvgIcon viewBox="-2 0 24 24" htmlColor="white" component={GitHub} /> */}
      </Link>

      <Link href="https://t.me/+HQItttSpH29iZWIx " target="_blank">
      <div className="fa-brands fa-telegram"></div>
        {/* <SvgIcon viewBox="0 3 24 24" color="white" component={Telegram} /> */}
      </Link>
    </div>
  );
}
