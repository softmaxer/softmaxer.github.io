import gitIcon from "../public/icons/icon_github.svg";
import xIcon from "../public/icons/icons8-twitterx-250.svg";
import instaIcon from "../public/icons/icon_insta.svg";
import Image from "next/image";

export default function SocialMediaTray() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Image src={gitIcon} alt="github" width={30} height={30} />
        <Image src={xIcon} alt="github" width={30} height={30} />
        <Image src={instaIcon} alt="github" width={30} height={30} />
      </div>
    </>
  );
}
