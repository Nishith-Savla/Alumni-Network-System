import { Button, Img, Text } from "components";

const JobListingCard = ({
  imgSrc,
  name,
  description,
  dueDate,
  salary,
  location,
}) => {
  return (
    <div className="bg-white_A700 flex flex-row items-center justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius26 shadow-bs1 w-[100%]">
      <div className="flex flex-row justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
        <div className="flex flex-col items-start m-5">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
              <Img
                src={
                  imgSrc ??
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBCQkJ9H19piIgHPU_JNyHdFiRcDSGjbhDRCBkVHg&s"
                }
                className="sm:h-[22px] md:h-[29px] h-[41px] rounded-radius50 sm:w-[21px] md:w-[28px] w-[41px]"
                alt="ListeeProfile"
              />
              <Text
                className="flex-grow font-normal sm:ml-[11px] md:ml-[14px] ml-[21px] not-italic text-black_900"
                variant="body11"
              >
                {name}
              </Text>
            </div>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[70%]">
            <Text
              className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
              variant="body14"
            >
              {description}
            </Text>
          </div>
        </div>
        <div className="flex flex-col justify-start sm:mb-[23px] md:mb-[30px] mb-[44px] md:ml-[14px] ml-[21px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
            <Img
              src="images/img_calendar_20X20.svg"
              className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
              alt="calendar One"
            />
            <Text
              className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] not-italic text-black_900"
              variant="body16"
            >
              {dueDate.getDate()}
            </Text>
          </div>
          <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] pr-[1px] py-[1px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
              <Img
                src="data:image/png;base64,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"
                className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                alt="clock One"
              />
              <Text
                className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                variant="body16"
              >
                {salary ?? "1,00,000"}
              </Text>
            </div>
          </div>

          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[91%]">
            <Img
              src="images/img_location_20X20.svg"
              className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
              alt="location One"
            />
            <Text
              className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
              variant="body16"
            >
              {location}
            </Text>
          </div>
          <Button className="cursor-pointer font-normal min-w-[12%] md:ml-[11px] ml-[17px] sm:ml-[9px] mt-[20px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobListingCard;
