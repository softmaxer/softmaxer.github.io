import gitIcon from "../public/icons/icon_github.svg";
import xIcon from "../public/icons/icons8-twitterx-250.svg";
import instaIcon from "../public/icons/icon_insta.svg";
import { SocialMediaIcon } from "./icons/sm-icon";

export default function SocialMediaTray() {
  return (
    <footer>
      <div className="flex flex-row gap-12  items-center justify-center">
        <SocialMediaIcon
          name="github"
          link="https://www.github.com/softmaxer"
          svgPath={gitIcon}
        />
        <SocialMediaIcon
          name="X"
          link="https://www.x.com/sriram_vad"
          svgPath={xIcon}
        />
        <SocialMediaIcon
          name="Instagram"
          link="https://www.instagram.com/srir4mvad"
          svgPath={instaIcon}
        />
      </div>
    </footer>
  );
}
