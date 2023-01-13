import React from 'react'
import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import EventCard from "components/EventCard/index.js";

const DonationCard = ({imgSrc,name,description}) => {
  return (
    <div className="bg-white_A700 flex flex-col justify-start md:p-[14px] sm:p-[15px] p-[21px] rounded-radius26 shadow-bs1 w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mb-[18px] md:mb-[23px] mb-[34px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                    <Img
                      src={imgSrc}
                      className="max-w-[100%] w-[25%]"
                      alt="imageThree"
                    />
                    <div className="flex flex-col md:ml-[14px] ml-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body12"
                      >
                        {name}
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[11px] md:mt-[15px] mt-[22px] w-[100%]">
                        <Text
                          className="leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[59%]"
                          variant="body17"
                        >
                         {description}
                        </Text>
                        <Button
                          className="cursor-pointer font-normal sm:mb-[22px] md:mb-[29px] mb-[43px] min-w-[28%] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-[20px] text-center text-white_A700 w-[max-content]"
                          size="lg"
                        >
                          Contribute
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default DonationCard