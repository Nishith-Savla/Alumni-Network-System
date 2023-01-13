import React from "react";

import { Img, Input, Text, List, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const GroupsPage = () => {
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
                      name="GroupEight"
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
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1404px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <aside className="md:hidden sm:hidden w-[20%]">
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
                  <div className="bg-indigo_A200 flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] rounded-radius7 w-[100%]">
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
                  <div className="flex flex-col justify-start sm:mb-[216px] md:mb-[279px] mb-[406px] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[35%]">
                      <Img
                        src="images/img_libuilding_8.svg"
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
            <div className="bg-blue_52 flex flex-col sm:mb-[29px] md:mb-[38px] mb-[56px] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[23px] rounded-radius25 sm:w-[100%] w-[35%]">
              <Text
                className="font-bold sm:ml-[20px] md:ml-[26px] ml-[39px] sm:mr-[168px] md:mr-[217px] mr-[316px] md:mt-[11px] mt-[16px] sm:mt-[8px] text-black_900 w-[auto]"
                variant="body7"
              >
                Groups
              </Text>
              <div className="flex flex-col items-center justify-start sm:mb-[208px] md:mb-[269px] mb-[391px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                <List
                  className="sm:gap-[14px] md:gap-[19px] gap-[28px] grid min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex flex-col items-center justify-start my-[0] sm:px-[0] w-[100%]">
                    <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center p-[12px] sm:p-[6px] md:p-[8px] rounded-radius25 w-[100%]">
                      <Img
                        src="images/img_profile.png"
                        className="sm:h-[37px] md:h-[47px] h-[68px] mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 w-[18%]"
                        alt="profile"
                      />
                      <div className="flex flex-col md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Group Name
                        </Text>
                        <Text
                          className="font-normal ml-[1px] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                          variant="body11"
                        >
                          Sender: Recent message
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col justify-start my-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius25 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Img
                        src="images/img_profile.png"
                        className="sm:h-[37px] md:h-[47px] h-[68px] rounded-radius50 w-[23%]"
                        alt="profile One"
                      />
                      <div className="flex flex-col md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Group Name
                        </Text>
                        <Text
                          className="font-normal ml-[1px] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                          variant="body11"
                        >
                          Sender: Recent message
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col justify-start my-[0] p-[12px] sm:p-[6px] md:p-[8px] rounded-radius25 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Img
                        src="images/img_profile.png"
                        className="sm:h-[37px] md:h-[47px] h-[68px] rounded-radius50 w-[23%]"
                        alt="profile Two"
                      />
                      <div className="flex flex-col md:ml-[4px] ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                        <Text
                          className="not-italic text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Group Name
                        </Text>
                        <Text
                          className="font-normal ml-[1px] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                          variant="body11"
                        >
                          Sender: Recent message
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
              <div className="bg-blue_51 flex flex-col justify-start md:p-[15px] sm:p-[15px] p-[22px] rounded-radius25 w-[100%]">
                <Text
                  className="font-bold sm:ml-[3px] md:ml-[4px] ml-[6px] text-black_900 w-[auto]"
                  variant="body7"
                >
                  Pending Group Requests
                </Text>
                <List
                  className="sm:gap-[11px] md:gap-[14px] gap-[21px] grid min-h-[auto] ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:w-[100%] w-[93%]"
                  orientation="vertical"
                >
                  <div className="bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius25 sm:w-[100%] w-[99%]">
                    <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_profile.png"
                          className="max-w-[100%] rounded-radius195 w-[10%]"
                          alt="profile Three"
                        />
                        <Text
                          className="ml-[13px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Group name
                        </Text>
                        <Img
                          src="images/img_checkmark.svg"
                          className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[116px] sm:ml-[61px] md:ml-[79px] sm:w-[21px] md:w-[27px] w-[40px]"
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
                        Created by
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
                  <div className="bg-white_A700 flex flex-col items-center justify-start sm:mx-[0] p-[10px] sm:p-[5px] md:p-[6px] rounded-radius25 sm:w-[100%] w-[99%]">
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
                          Group name
                        </Text>
                        <Img
                          src="images/img_checkmark.svg"
                          className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] ml-[116px] sm:ml-[61px] md:ml-[79px] sm:w-[21px] md:w-[27px] w-[40px]"
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
                        Created by
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
                </List>
              </div>
              <div className="bg-blue_52 flex flex-col items-center justify-end sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 sm:w-[100%] w-[96%]">
                <div className="flex flex-col justify-start mb-[4px] sm:mt-[11px] md:mt-[15px] mt-[22px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-bold sm:ml-[10px] md:ml-[13px] ml-[20px] text-black_900 w-[auto]"
                    variant="body7"
                  >
                    Create new group
                  </Text>
                  <Img
                    src="images/img_camera.svg"
                    className="max-w-[100%] sm:ml-[106px] md:ml-[137px] ml-[200px] md:mt-[10px] mt-[15px] sm:mt-[7px] w-[11%]"
                    alt="camera"
                  />
                  <Text
                    className="font-bold md:ml-[120px] ml-[175px] sm:ml-[93px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-black_900 w-[auto]"
                    variant="body11"
                  >
                    Add Photo
                  </Text>
                  <div className="flex flex-col justify-start md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Text
                        className="not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Group Name
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                        wrapClassName="sm:mx-[0] sm:w-[100%] w-[67%]"
                        type="text"
                        name="GroupEleven"
                        placeholder="grp name"
                        shape="CircleBorder22"
                        size="md"
                        variant="FillWhiteA702"
                      ></Input>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[12px] mt-[18px] sm:mt-[9px] sm:px-[0] w-[100%]">
                      <Text
                        className="leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[33%]"
                        variant="body9"
                      >
                        Group <br />
                        Description
                      </Text>
                      <Input
                        className="font-normal not-italic p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                        wrapClassName="mb-[4px] sm:mx-[0] sm:w-[100%] w-[67%]"
                        type="text"
                        name="GroupTen"
                        placeholder="grp name"
                        shape="CircleBorder22"
                        size="sm"
                        variant="FillWhiteA702"
                      ></Input>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                      <Text
                        className="not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Add Members
                      </Text>
                      <Button className="cursor-pointer font-normal min-w-[51%] sm:ml-[23px] md:ml-[30px] ml-[45px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                        Select
                      </Button>
                    </div>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[21px] md:mt-[27px] mt-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                      <Text
                        className="font-normal not-italic text-black_900 w-[auto]"
                        variant="body11"
                      >
                        Discard
                      </Text>
                      <Button className="cursor-pointer font-normal min-w-[54%] ml-[14px] sm:ml-[7px] md:ml-[9px] not-italic text-[20px] text-center text-white_A700 w-[max-content]">
                        Create
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupsPage;
