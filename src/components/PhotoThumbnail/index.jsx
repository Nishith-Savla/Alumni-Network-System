import { Img } from "components/Img";
import { Text } from "components/Text";

const PhotoGalleryThumbnail = ({ imgSrc, date, count, description }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="bg-white_A701 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius25 w-[100%]">
      <div className="flex flex-col justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
        <Img
          src={imgSrc}
          className="max-w-[100%] rounded-radius3 w-[100%]"
          alt="CoverImg Three"
        />
        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
          <Text
            className="font-normal not-italic text-black_900 w-[auto]"
            variant="body11"
          >
            {date.toLocaleDateString("en-US", options)}
          </Text>
          <Text
            className="mt-[2px] not-italic text-black_900 w-[auto]"
            variant="body16"
          >
            {count} items
          </Text>
        </div>
        <Text
          className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-black_900 w-[auto]"
          variant="body11"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export default PhotoGalleryThumbnail;
