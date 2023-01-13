import { Button } from "components/Button";
import { Img } from "components/Img";
import { Text } from "components/Text";

const EventCard = ({ date, location, time, title, description, imgSrc }) => {
    return (
        <div className="bg-white_A700 flex flex-col items-center justify-end md:p-[11px] sm:p-[15px] p-[16px] rounded-radius26 shadow-bs1 w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Img
                    src={imgSrc}
                    className="max-w-[100%] sm:mb-[20px] md:mb-[26px] mb-[39px] w-[24%]"
                    alt="imageThree One"
                />
                <div className="flex flex-col justify-start sm:mb-[23px] md:mb-[30px] mb-[44px] md:ml-[14px] ml-[21px] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                    <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body12"
                    >
                        {title}
                    </Text>
                    <Text
                        className="leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[11px] md:mt-[15px] mt-[22px] not-italic text-black_900 w-[100%]"
                        variant="body17"
                    >
                        {description}
                    </Text>
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
                            {date}
                        </Text>
                    </div>
                    <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] pr-[1px] py-[1px] w-[100%]">
                        <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                            <Img
                                src="images/img_clock.svg"
                                className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                alt="clock One"
                            />
                            <Text
                                className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                                variant="body16"
                            >
                                {time}
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
                        View
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default EventCard;