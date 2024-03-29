import React from "react";

import { Img, Input, Text, Button, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const PhotoGallerySubPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-center justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap max-w-[1384px] md:ml-[16px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list">
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
                      name="GroupFour"
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
            </div>
          </header>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">

            <div className="flex flex-col max-w-[1160px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Button
                className="cursor-pointer font-normal min-w-[13%] sm:ml-[36px] md:ml-[47px] ml-[69px] sm:mr-[504px] md:mr-[652px] mr-[948px] not-italic text-[15px] text-center text-white_A700 w-[max-content]"
                size="lg"
              >
                Add Photos
              </Button>
              <div className="bg-white_A700 flex flex-col items-center justify-end sm:mt-[21px] md:mt-[27px] mt-[40px] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                <List
                  className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid min-h-[auto] mt-[3px] sm:w-[100%] w-[90%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageFive"
                    />
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageSix"
                    />
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageSeven"
                    />
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageEight"
                    />
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageNine"
                    />
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageTen"
                    />
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageEleven"
                    />
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageTwelve"
                    />
                    <Img
                      src="images/img_coverimg.png"
                      className="max-w-[100%] rounded-radius25 w-[32%]"
                      alt="imageThirteen"
                    />
                  </div>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallerySubPage;
