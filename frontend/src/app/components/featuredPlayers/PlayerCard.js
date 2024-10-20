import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";
const SocialMediaIcon = ({ icon, title, link }) => {
  //   console.log(icon);
  return (
    <>
      {link ? (
        <Link href={link} title={title} target="_blank">
          <span className="text-2xl">{icon}</span>{" "}
        </Link>
      ) : null}
    </>
  );
};
const PlayerCard = ({
  playerName,
  badge,
  position,
  country,
  flagImg,
  sport,
  playerImg,
  age,
  winRecord,
  team,
  topAchievement,
  socialMedia,
}) => {
  return (
    <div className="relative bg-colorFive w-[20rem] rounded-2xl text-revTextColor py-4 px-2 shadow-xl">
      <span className="absolute top-0 left-0 rounded-tl-2xl bg-colorSix px-4 py-1 text-lg">
        {sport}
      </span>
      <span className="top-[3rem] left-2 absolute text-primary bg-revTextColor rounded-sm  px-2 py-1 font-semibold capitalize">
        {position}
      </span>

      <div className="absolute top-2 right-2">
        <span className=" bg-colorSix rounded-full border-[1px] border-solid border-revTextColor h-[4rem] w-[4rem] flex items-center justify-center ">
          {badge}
        </span>
        <div className="flex flex-col justify-center items-center mt-3">
          <Image src={flagImg} height={30} width={30} alt="coutnryFlag" />
          <span className="text-lg">{country}</span>
        </div>
      </div>

      <div className="mt-[5rem] flex flex-col justify-center items-center">
        <Image
          src={playerImg}
          height={90}
          width={90}
          alt="playerprofile"
          className="border-2 border-primary rounded-full border-solid"
        />
        <span className="text-2xl  capitalize">{playerName}</span>
      </div>
      <div className="text-left text-lg">
        <p>Age: {age}</p>
        <p>Win/Loss Ratio: {winRecord} </p>
        {team ? <p>Team: {team}</p> : null}

        <p>Top Achievemenet: {topAchievement}</p>
        <div className="flex gap-x-6 mt-4">
          <SocialMediaIcon
            icon={<FaInstagram />}
            link={socialMedia.instagram}
          />
          <SocialMediaIcon
            icon={<FaSquareFacebook />}
            link={socialMedia.facebook}
          />
          <SocialMediaIcon icon={<BsTwitterX />} link={socialMedia.x} />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
