import type { FC } from "react";

interface heroSectionProps {}

const HeroSection: FC<heroSectionProps> = ({}) => {
  return (
    <div className=" font-display text-8xl ">
      <p className="w-fit text-[#FE5610] -rotate-2">creatiev block?</p>
      <p className="w-fit text-[#9F67F5] rotate-6">forget!</p>
      <p className="w-fit text-[#C7EB00] -rotate-2">forget!</p>
    </div>
  );
};
export default HeroSection;
