import React from "react";

import { Img, Input, Text, Stack, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AdminDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="h-screen bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
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
                      name="GroupThirtySix"
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
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1332px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="bg-blue_51 flex flex-col sm:mb-[192px] md:mb-[248px] mb-[361px] ml-[104px] md:ml-[71px] sm:mt-[36px] md:mt-[47px] mt-[69px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 sm:w-[100%] w-[29%]">
              <div className="flex flex-col items-end justify-start ml-[2px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                <Text
                  className="font-bold mr-[3px] text-black_900 w-[auto]"
                  variant="body7"
                >
                  Alumni Employment Stats
                </Text>
                <Stack className="h-[323px] mt-[12px] sm:mt-[6px] md:mt-[8px] relative sm:w-[100%] w-[92%]">
                  <div className="absolute bg-bluegray_101 border-black_900_db border-bw5 border-solid bottom-[2%] sm:h-[157px] md:h-[202px] h-[293px] rounded-radius50 sm:w-[156px] md:w-[201px] w-[293px]"></div>
                  <div className="absolute bg-green_A200 border-black_900 border-bw5 border-solid sm:h-[173px] md:h-[223px] h-[323px] rounded-radius1615 w-[100%]"></div>
                </Stack>
                <div className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <div className="bg-bluegray_101 border-black_900 border-bw3 border-solid sm:h-[15px] md:h-[19px] h-[27px] w-[30%]"></div>
                    <Text
                      className="font-bold sm:ml-[11px] md:ml-[14px] ml-[21px] text-black_900 w-[auto]"
                      variant="body11"
                    >
                      <span className="text-black_900 text-[20px] font-inter font-normal not-italic">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[20px] font-inter font-normal not-italic">
                        Unemployed{" "}
                      </span>
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[13px] md:mt-[17px] mt-[26px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                    <div className="bg-green_A200 border-black_900 border-bw3 border-solid sm:h-[13px] md:h-[17px] h-[24px] w-[35%]"></div>
                    <Text
                      className="font-bold sm:ml-[10px] md:ml-[13px] ml-[20px] text-black_900 w-[auto]"
                      variant="body11"
                    >
                      <span className="text-black_900 text-[20px] font-inter">
                        {" "}
                      </span>
                      <span className="text-black_900 text-[20px] font-inter font-normal not-italic">
                        Employed
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <List
              className="sm:gap-[38px] md:gap-[50px] gap-[73px] grid min-h-[auto] sm:ml-[27px] md:ml-[35px] ml-[51px] w-[39%]"
              orientation="vertical"
            >
              <div className="bg-blue_51 flex flex-col justify-start md:p-[15px] sm:p-[15px] p-[22px] rounded-radius25 w-[100%]">
                <Text
                  className="font-bold sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 w-[auto]"
                  variant="body7"
                >
                  Alumni Hiring Requests
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius25 sm:w-[100%] w-[92%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_profile.png"
                        className="max-w-[100%] rounded-radius195 w-[10%]"
                        alt="profile"
                      />
                      <Text
                        className="ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Dishank Nayak{" "}
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[46px] md:ml-[59px] ml-[87px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="checkmark"
                      />
                      <Img
                        src="images/img_close.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="close"
                      />
                    </div>
                    <Text
                      className="font-bold ml-[1px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-black_900 w-[auto]"
                      variant="body19"
                    >
                      Sr Software Engineer
                    </Text>
                    <Text
                      className="leading-[15.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-black_900 w-[100%]"
                      variant="body20"
                    >
                      abore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco{" "}
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start md:ml-[4px] ml-[6px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius25 sm:w-[100%] w-[92%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_profile.png"
                        className="max-w-[100%] rounded-radius195 w-[10%]"
                        alt="Ellipse"
                      />
                      <Text
                        className="ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Dishank Nayak{" "}
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[46px] md:ml-[59px] ml-[87px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="checkmark One"
                      />
                      <Img
                        src="images/img_close.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="close One"
                      />
                    </div>
                    <Text
                      className="font-bold ml-[1px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-black_900 w-[auto]"
                      variant="body19"
                    >
                      Sr Software Engineer
                    </Text>
                    <Text
                      className="leading-[15.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-black_900 w-[100%]"
                      variant="body20"
                    >
                      abore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-blue_51 flex flex-col justify-start md:p-[15px] sm:p-[15px] p-[22px] rounded-radius25 w-[100%]">
                <Text
                  className="font-bold sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 w-[auto]"
                  variant="body7"
                >
                  Scholarship Pending Request
                </Text>
                <div className="bg-white_A700 flex flex-col items-center justify-start ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius25 sm:w-[100%] w-[92%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_profile.png"
                        className="max-w-[100%] rounded-radius195 w-[10%]"
                        alt="profile One"
                      />
                      <Text
                        className="ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Dishank Nayak{" "}
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[46px] md:ml-[59px] ml-[87px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="checkmark One"
                      />
                      <Img
                        src="images/img_close.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="close One"
                      />
                    </div>
                    <Text
                      className="font-bold ml-[1px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-black_900 w-[auto]"
                      variant="body19"
                    >
                      Second Year Btech CS{" "}
                    </Text>
                    <Text
                      className="leading-[15.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-black_900 w-[100%]"
                      variant="body20"
                    >
                      abore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco{" "}
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start md:ml-[4px] ml-[6px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius25 sm:w-[100%] w-[92%]">
                  <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_profile.png"
                        className="max-w-[100%] rounded-radius195 w-[10%]"
                        alt="profile One"
                      />
                      <Text
                        className="ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Dishank Nayak{" "}
                      </Text>
                      <Img
                        src="images/img_checkmark.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[46px] md:ml-[59px] ml-[87px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="checkmark One One"
                      />
                      <Img
                        src="images/img_close.svg"
                        className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] sm:w-[21px] md:w-[27px] w-[40px]"
                        alt="close One One"
                      />
                    </div>
                    <Text
                      className="font-bold ml-[1px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-black_900 w-[auto]"
                      variant="body19"
                    >
                      Second Year Btech CS{" "}
                    </Text>
                    <Text
                      className="leading-[15.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-black_900 w-[100%]"
                      variant="body20"
                    >
                      abore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco{" "}
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
