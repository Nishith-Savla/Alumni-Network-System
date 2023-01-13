import React from "react";

import { Img, Input, Text, Grid, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import AlumniCard from "components/AlumniCard/index.js";

const AlumniDirectoryPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
              <ul className="flex flex-row items-center">
                <li className="w-[7%] sm:w-[100%] sm:my-[10px] rounded-radius50">
                  <Img
                    src="images/img_logo.png"
                    className="sm:h-[45px] md:h-[58px] h-[83px] rounded-radius50"
                    alt="logo"
                  />
                </li>
                <li className="w-[43%] mt-[14px] mb-[15px] ml-[208px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[143px] md:mb-[10px] md:mt-[9px]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal not-italic p-[0] sm:text-[25px] md:text-[27px] text-[29px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                    wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[43%]"
                    name="GroupSixteen"
                    placeholder="Search an Alumni"
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-[9px] mr-[27px] sm:mr-[14px] sm:ml-[4px] md:mr-[18px] md:ml-[6px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#adb5c0"
                          className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                  ></Input>
                </li>
                <li className="w-[4%] mt-[16px] mb-[13px] ml-[236px] sm:ml-[125px] sm:w-[100%] sm:my-[10px] md:ml-[162px] md:mb-[8px] md:mt-[11px] rounded-radius50">
                  <Img
                    src="images/img_logo_54X54.png"
                    className="sm:h-[29px] md:h-[38px] h-[54px] rounded-radius50"
                    alt="logo One"
                  />
                </li>
                <li className="w-[auto] ml-[13px] sm:ml-[6px] sm:w-[100%] sm:my-[10px] md:ml-[8px] md:my-[17px] my-[25px]">
                  <a
                    href="#"
                    className="cursor-pointer font-normal not-italic sm:text-[23px] md:text-[25px] text-[27px] text-black_900"
                    rel="noreferrer"
                  >
                    Nishith Savla{" "}
                  </a>
                </li>
                <li className="w-[2%] mt-[36px] mb-[37px] ml-[14px] sm:ml-[7px] sm:w-[100%] sm:my-[10px] md:ml-[9px] md:mb-[25px] md:mt-[24px] max-w-[100%]">
                  <Img
                    src="images/img_arrowdown.svg"
                    className="max-w-[100%]"
                    alt="arrowdown"
                  />
                </li>
              </ul>
            </div>
          </header>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1368px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start md:ml-[33px] ml-[48px] sm:mt-[29px] md:mt-[37px] mt-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Text
                className="font-bold ml-[1px] text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Directory
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                  <Img
                    src="images/img_arrowdown_gray_500.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="arrowdown Two"
                  />
                  <Text
                    className="flex-grow not-italic text-gray_501"
                    variant="body8"
                  >
                    Branch
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                  <Img
                    src="images/img_arrowdown_gray_500.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="arrowdown Three"
                  />
                  <Text
                    className="flex-grow not-italic text-gray_501"
                    variant="body8"
                  >
                    2021-22
                  </Text>
                </div>
              </div>
              <Grid className="sm:gap-[27px] md:gap-[35px] gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                <AlumniCard
                  name="Jane Doe"
                  position="Sr. Developer"
                  company="Google"
                  location="LA"
                />
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumniDirectoryPage;
