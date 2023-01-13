import React from "react";

import { Img, Input, Text, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const JobPortalPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-end mx-[auto] w-[100%]">
        <div className="flex flex-col justify-end w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap max-w-[1384px] md:ml-[16px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list common-row-list">
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
                      name="GroupTwentyThree"
                      placeholder="Search an Alumni"
                      prefix={
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer ml-[12px] mr-[27px] sm:mr-[14px] sm:ml-[6px] md:mr-[18px] md:ml-[8px] my-[auto]"
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
                      size="mdSrc"
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
                      href={"javascript:"}
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
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <aside className="md:hidden sm:hidden w-[24%]">
              <div className="">
                <div className="bg-blue_300 flex flex-col items-center justify-center md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                  <div className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[35%]">
                      <Img
                        src="images/img_settings.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] text-white_A700"
                        variant="body13"
                      >
                        Feed
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[58%]">
                      <Img
                        src="images/img_arrowdown_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="arrowdown One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[80%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Alumni Directory
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[3px] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Img
                        src="images/img_trash.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="trash"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Photo Gallery
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Professors
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Img
                        src="images/img_menu.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="menu"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Events
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 shadow-bs w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[65%]">
                      <Img
                        src="images/img_menu.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="menu One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Scholarships
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Donations
                      </Text>
                    </div>
                  </div>
                  <div className="bg-indigo_A200 flex flex-col justify-start sm:mb-[216px] md:mb-[279px] mb-[406px] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[35%]">
                      <Img
                        src="images/img_libuilding_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="libuilding"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Jobs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-col justify-start md:ml-[30px] ml-[45px] sm:mt-[27px] md:mt-[35px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
              <Text
                className="font-bold text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Job Listings
              </Text>
              <List
                className="sm:gap-[20px] md:gap-[26px] gap-[38px] grid min-h-[auto] sm:ml-[16px] md:ml-[21px] ml-[31px] sm:mt-[18px] md:mt-[23px] mt-[34px] sm:w-[100%] w-[97%]"
                orientation="vertical"
              >
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius26 shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                        <Img
                          src="images/img_listeeprofile.png"
                          className="sm:h-[22px] md:h-[29px] h-[41px] rounded-radius50 sm:w-[21px] md:w-[28px] w-[41px]"
                          alt="ListeeProfile"
                        />
                        <Text
                          className="flex-grow font-normal sm:ml-[11px] md:ml-[14px] ml-[21px] not-italic text-black_900"
                          variant="body11"
                        >
                          Looking for sugar (Profile)
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[23px]"
                          alt="location"
                        />
                        <Text
                          className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          GB Road
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[100%]">
                      <Text
                        className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                        variant="body14"
                      >
                        looking for 5 kilo grams of thick sugar. (Job
                        Description)
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 max-w-[100%] w-[21%]"
                          alt="sort"
                        />
                        <Text
                          className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] my-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          DEDH SAU
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="flex-shrink-0 max-w-[100%] w-[20%]"
                        alt="calendar"
                      />
                      <Text
                        className="flex-grow mb-[2px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_700"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius26 shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                        <Img
                          src="images/img_listeeprofile.png"
                          className="sm:h-[22px] md:h-[29px] h-[41px] rounded-radius50 sm:w-[21px] md:w-[28px] w-[41px]"
                          alt="ListeeProfile One"
                        />
                        <Text
                          className="flex-grow font-normal sm:ml-[11px] md:ml-[14px] ml-[21px] not-italic text-black_900"
                          variant="body11"
                        >
                          Looking for sugar (Profile)
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[23px]"
                          alt="location One"
                        />
                        <Text
                          className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          GB Road
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[100%]">
                      <Text
                        className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                        variant="body14"
                      >
                        looking for 5 kilo grams of thick sugar. (Job
                        Description)
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 max-w-[100%] w-[21%]"
                          alt="sort One"
                        />
                        <Text
                          className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] my-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          DEDH SAU
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="flex-shrink-0 max-w-[100%] w-[20%]"
                        alt="calendar One"
                      />
                      <Text
                        className="flex-grow mb-[2px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_700"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius26 shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                        <Img
                          src="images/img_listeeprofile.png"
                          className="sm:h-[22px] md:h-[29px] h-[41px] rounded-radius50 sm:w-[21px] md:w-[28px] w-[41px]"
                          alt="ListeeProfile Two"
                        />
                        <Text
                          className="flex-grow font-normal sm:ml-[11px] md:ml-[14px] ml-[21px] not-italic text-black_900"
                          variant="body11"
                        >
                          Looking for sugar (Profile)
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[23px]"
                          alt="location Two"
                        />
                        <Text
                          className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          GB Road
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[100%]">
                      <Text
                        className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                        variant="body14"
                      >
                        looking for 5 kilo grams of thick sugar. (Job
                        Description)
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 max-w-[100%] w-[21%]"
                          alt="sort Two"
                        />
                        <Text
                          className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] my-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          DEDH SAU
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="flex-shrink-0 max-w-[100%] w-[20%]"
                        alt="calendar Two"
                      />
                      <Text
                        className="flex-grow mb-[2px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_700"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius26 shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                        <Img
                          src="images/img_listeeprofile.png"
                          className="sm:h-[22px] md:h-[29px] h-[41px] rounded-radius50 sm:w-[21px] md:w-[28px] w-[41px]"
                          alt="ListeeProfile Three"
                        />
                        <Text
                          className="flex-grow font-normal sm:ml-[11px] md:ml-[14px] ml-[21px] not-italic text-black_900"
                          variant="body11"
                        >
                          Looking for sugar (Profile)
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[23px]"
                          alt="location Three"
                        />
                        <Text
                          className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          GB Road
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[100%]">
                      <Text
                        className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                        variant="body14"
                      >
                        looking for 5 kilo grams of thick sugar. (Job
                        Description)
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 max-w-[100%] w-[21%]"
                          alt="sort Three"
                        />
                        <Text
                          className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] my-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          DEDH SAU
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="flex-shrink-0 max-w-[100%] w-[20%]"
                        alt="calendar Three"
                      />
                      <Text
                        className="flex-grow mb-[2px] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-gray_700"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[13px] sm:p-[6px] md:p-[8px] rounded-radius26 shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                        <Img
                          src="images/img_listeeprofile.png"
                          className="sm:h-[22px] md:h-[29px] h-[41px] rounded-radius50 sm:w-[21px] md:w-[28px] w-[41px]"
                          alt="ListeeProfile Four"
                        />
                        <Text
                          className="flex-grow font-normal sm:ml-[11px] md:ml-[14px] ml-[21px] not-italic text-black_900"
                          variant="body11"
                        >
                          Looking for sugar (Profile)
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                        <Img
                          src="images/img_location.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[16px] h-[23px] max-w-[100%] sm:w-[12px] md:w-[15px] w-[23px]"
                          alt="location Four"
                        />
                        <Text
                          className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[4px] not-italic text-gray_700"
                          variant="body16"
                        >
                          GB Road
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Text
                        className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                        variant="body14"
                      >
                        looking for 5 kilo grams of thick sugar. (Job
                        Description)
                      </Text>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Img
                          src="images/img_sort.svg"
                          className="flex-shrink-0 max-w-[100%] w-[21%]"
                          alt="sort Four"
                        />
                        <Text
                          className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-gray_700"
                          variant="body16"
                        >
                          DEDH SAU
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] mt-[13px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <Img
                        src="images/img_calendar.svg"
                        className="flex-shrink-0 max-w-[100%] w-[19%]"
                        alt="calendar Four"
                      />
                      <Text
                        className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_700"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPortalPage;
