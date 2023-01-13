import { Img } from "components/Img";
import { Text } from "components/Text";

const FeedPost = ({ imgSrc, avatar, name, description }) => {
  return (
    <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius25 w-[50%]">
      <div className="flex flex-col items-center justify-start w-[100%]">
        <Img
          src={imgSrc}
          className="max-w-[100%] w-[100%] rounded-t-3xl"
          alt="image"
        />
        <div className="flex flex-col items-center justify-start md:mt-[11px] mt-[17px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
            <Img
              src={avatar}
              className="sm:h-[29px] md:h-[38px] h-[54px] max-w-[100%] rounded-radius50 sm:w-[28px] md:w-[37px] w-[54px]"
              alt="avatar One"
            />
            <Text
              className="ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
              variant="body5"
            >
              {name}
            </Text>
            <Img
              src="images/img_favorite.svg"
              className="sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] md:ml-[120px] ml-[175px] sm:ml-[93px] sm:w-[15px] md:w-[20px] w-[30px]"
              alt="favorite"
            />
          </div>
          <Text
            className="leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-black_900 w-[100%]"
            variant="body15"
          >
            {description}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
