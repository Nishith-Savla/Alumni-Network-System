import React from "react";

import { Img, Input, Text, Grid, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const MembershipPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] md:pb-[112px] sm:pb-[15px] pb-[164px] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[3px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap max-w-[1395px] md:ml-[12px] ml-[auto] mr-[auto] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list">
                <ul className="flex flex-row items-center">
                  <li className="w-[7%] sm:w-[100%] sm:my-[10px] rounded-radius50">
                    <Img
                      src="images/img_logo.png"
                      className="sm:h-[45px] md:h-[58px] h-[83px] rounded-radius50"
                      alt="LogoImg"
                    />
                  </li>
                  <li className="w-[43%] mt-[9px] mb-[20px] ml-[219px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[150px] md:mb-[13px] md:mt-[6px]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] sm:text-[25px] md:text-[27px] text-[29px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[43%]"
                      name="GroupFourteen"
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
                  <li className="w-[4%] mt-[11px] mb-[18px] ml-[236px] sm:ml-[125px] sm:w-[100%] sm:my-[10px] md:ml-[162px] md:mb-[12px] md:mt-[7px] rounded-radius50">
                    <Img
                      src="images/img_logo_54X54.png"
                      className="sm:h-[29px] md:h-[38px] h-[54px] rounded-radius50"
                      alt="logo"
                    />
                  </li>
                  <li className="w-[auto] mt-[20px] mb-[30px] ml-[13px] sm:ml-[6px] sm:w-[100%] sm:my-[10px] md:ml-[8px] md:mb-[20px] md:mt-[13px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic sm:text-[23px] md:text-[25px] text-[27px] text-black_900"
                      rel="noreferrer"
                    >
                      Nishith Savla{" "}
                    </a>
                  </li>
                  <li className="w-[2%] mt-[31px] mb-[42px] ml-[14px] sm:ml-[7px] sm:w-[100%] sm:my-[10px] md:ml-[9px] md:mb-[28px] md:mt-[21px] max-w-[100%]">
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
          <div className="flex flex-col justify-start max-w-[1069px] md:ml-[32px] ml-[auto] mr-[auto] sm:mt-[33px] md:mt-[43px] mt-[63px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-bold text-black_900 w-[auto]"
              as="h6"
              variant="h6"
            >
              Become a member{" "}
            </Text>
            <div className="flex flex-col items-center justify-start md:ml-[50px] ml-[74px] sm:mt-[28px] md:mt-[36px] mt-[53px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
              <Grid className="sm:gap-[26px] md:gap-[33px] gap-[49px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                <div className="bg-white_A700 flex flex-col justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius26 shadow-bs1 w-[100%]">
                  <Text
                    className="font-normal md:ml-[10px] ml-[15px] sm:ml-[7px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 w-[auto]"
                    variant="body12"
                  >
                    Indian Citizen Life-time Membership{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[10px] ml-[15px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[97%]"
                    variant="body19"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum...
                  </Text>
                  <Button className="cursor-pointer font-normal sm:mb-[3px] md:mb-[4px] mb-[6px] min-w-[36%] ml-[142px] sm:ml-[75px] md:ml-[97px] sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                    Pay ₹3000
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius26 shadow-bs1 w-[100%]">
                  <Text
                    className="font-normal md:ml-[10px] ml-[15px] sm:ml-[7px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 w-[auto]"
                    variant="body12"
                  >
                    Foreign Citizen Life-time Membership{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[10px] ml-[15px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[97%]"
                    variant="body19"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum...
                  </Text>
                  <Button className="cursor-pointer font-normal sm:mb-[3px] md:mb-[4px] mb-[6px] min-w-[36%] ml-[142px] sm:ml-[75px] md:ml-[97px] sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                    Pay ₹12000
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius26 shadow-bs1 w-[100%]">
                  <Text
                    className="font-normal md:ml-[10px] ml-[15px] sm:ml-[7px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 w-[auto]"
                    variant="body12"
                  >
                    Student Life-time Membership{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[10px] ml-[15px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[97%]"
                    variant="body19"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum...
                  </Text>
                  <Button className="cursor-pointer font-normal sm:mb-[3px] md:mb-[4px] mb-[6px] min-w-[36%] ml-[142px] sm:ml-[75px] md:ml-[97px] sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                    Pay ₹1500
                  </Button>
                </div>
                <div className="bg-white_A700 flex flex-col justify-start md:p-[10px] p-[15px] sm:p-[7px] rounded-radius26 shadow-bs1 w-[100%]">
                  <Text
                    className="font-normal md:ml-[10px] ml-[15px] sm:ml-[7px] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 w-[auto]"
                    variant="body12"
                  >
                    Faculty Life-time Membership{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[10px] ml-[15px] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[97%]"
                    variant="body19"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum...
                  </Text>
                  <Button className="cursor-pointer font-normal sm:mb-[3px] md:mb-[4px] mb-[6px] min-w-[36%] ml-[142px] sm:ml-[75px] md:ml-[97px] sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                    Pay ₹3000
                  </Button>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MembershipPage;
