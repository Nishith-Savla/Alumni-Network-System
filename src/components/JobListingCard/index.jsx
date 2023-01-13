import { Button, Img, Text } from "components";

const JobListingCard = ({ imgSrc, name, description, dueDate, salary, location }) => {
    return (
        <div
            className="bg-white_A700 flex flex-row items-center justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius26 shadow-bs1 w-[100%]">
            <div
                className="flex flex-row justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <div className="flex flex-col items-start m-5">
                    <div
                        className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                        <div
                            className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                            <Img src={imgSrc}
                                className="sm:h-[22px] md:h-[29px] h-[41px] rounded-radius50 sm:w-[21px] md:w-[28px] w-[41px]"
                                alt="ListeeProfile" />
                            <Text className="flex-grow font-normal sm:ml-[11px] md:ml-[14px] ml-[21px] not-italic text-black_900"
                                variant="body11">
                                {name}
                            </Text>
                        </div>
                    </div>
                    <div
                        className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[70%]">
                        <Text className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]" variant="body14">
                            {description}
                        </Text>
                    </div>
                </div>
                <div
                    className="flex flex-col justify-start sm:mb-[23px] md:mb-[30px] mb-[44px] md:ml-[14px] ml-[21px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">

                    <div
                        className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                        <Img src="images/img_calendar_20X20.svg"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="calendar One" />
                        <Text className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] not-italic text-black_900"
                            variant="body16">
                            {dueDate}
                        </Text>
                    </div>
                    <div className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] pr-[1px] py-[1px] w-[100%]">
                        <div
                            className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                            <Img src="images/img_clock.svg"
                                className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                alt="clock One" />
                            <Text className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                                variant="body16">
                                {salary}
                            </Text>
                        </div>
                    </div>

                    <div
                        className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[91%]">
                        <Img src="images/img_location_20X20.svg"
                            className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                            alt="location One" />
                        <Text className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                            variant="body16">
                            {location}
                        </Text>

                    </div>
                    <Button
                        className="cursor-pointer font-normal min-w-[12%] md:ml-[11px] ml-[17px] sm:ml-[9px] mt-[20px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                        Apply
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default JobListingCard