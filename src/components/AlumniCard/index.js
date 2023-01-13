import { Button } from "components/Button";
import { Img } from "components/Img";
import { Text } from "components/Text";

const AlumniCard = ({ name, position, company, location }) => {
  return (
    <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
      <Img
        src="images/img_profilephoto.png"
        className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
        alt="ProfilePhoto Six"
      />
      <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
        <Text className="font-bold text-black_900 w-[auto]" variant="body12">
          {name}
        </Text>
        <Text
          className="mt-[4px] not-italic text-black_900 w-[auto]"
          variant="body17"
        >
          {position}
        </Text>
        <Text
          className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
          variant="body18"
        >
          {company}
        </Text>
        <Text
          className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
          variant="body20"
        >
          {location}
        </Text>
        <Button
          className="cursor-pointer font-normal min-w-[98%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
          size="md"
        >
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default AlumniCard;
