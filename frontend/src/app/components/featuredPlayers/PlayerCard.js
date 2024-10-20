import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";
const SocialMediaIcon = ({ icon, title, link }) => {
  //   console.log(icon);
  return (
    <>
      <Link href={link} title={title} target="_blank">
        <span className="text-2xl">{icon}</span>{" "}
      </Link>
    </>
  );
};
const PlayerCard = ({
  playName,
  position,
  country,
  flagImg,
  sport,
  playImg,
  age,
  winRecord,
  Team,
  topAchievement,
  socialMediaLink,
}) => {
  return (
    <div className="relative bg-colorFive w-[20rem] rounded-2xl text-revTextColor py-4 px-2 shadow-xl">
      <span className="absolute top-0 left-0 rounded-tl-2xl bg-colorSix px-4 py-1 text-lg">
        Football
      </span>
      <span className="top-[3rem] left-2 absolute text-primary bg-revTextColor rounded-sm  px-2 py-1 font-semibold">
        Position
      </span>

      <div className="absolute top-2 right-2">
        <span className=" bg-colorSix rounded-full border-[1px] border-solid border-revTextColor h-[4rem] w-[4rem] flex items-center justify-center ">
          Badge
        </span>
        <div className="flex flex-col justify-center items-center mt-3">
          <Image
            src="/images/player/flag.png"
            height={30}
            width={30}
            alt="coutnryFlag"
          />
          <span className="text-lg">Nepal</span>
        </div>
      </div>

      <div className="mt-[5rem] flex flex-col justify-center items-center">
        <Image
          src="/images/player/profile.jpeg"
          height={90}
          width={90}
          alt="playerprofile"
          className="border-2 border-primary rounded-full border-solid"
        />
        <span className="text-2xl  capitalize">Player Name</span>
      </div>
      <div className="text-left text-lg">
        <p>Age: 23</p>
        <p>Win/Loss Ratio: </p>
        <p>Team: </p>
        <p>Top Achievemenet:</p>
        <div className="flex gap-x-6 mt-4">
          <SocialMediaIcon icon={<FaInstagram />} link={" "} />
          <SocialMediaIcon icon={<FaSquareFacebook />} link={" "} />
          <SocialMediaIcon icon={<BsTwitterX />} link={" "} />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
