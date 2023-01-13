import React from "react";

import { Stack, Text, Img, List, Button } from "components";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] md:py-[11px] sm:py-[15px] py-[17px] w-[100%]">
        <div className="flex flex-col items-center justify-start sm:mb-[12px] md:mb-[16px] mb-[24px] w-[100%]">
          <Stack className="h-[71px] max-w-[864px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] relative w-[100%]">
            <div className="absolute bottom-[0] sm:h-[28px] md:h-[36px] h-[52px] w-[100%]"></div>
            <Text
              className="absolute text-black_900 w-[auto]"
              as="h1"
              variant="h1"
            >
              VJTI ALUMNI ASSOCIATION
            </Text>
          </Stack>
          <div className="flex flex-col justify-start w-[100%]">
            <Img
              src="images/img_vjtiimage.png"
              className="max-w-[100%] w-[100%]"
              alt="VJTIImage"
            />
            <Text
              className="sm:ml-[41px] md:ml-[52px] ml-[77px] sm:mt-[34px] md:mt-[44px] mt-[64px] text-black_900 text-shadow-ts w-[auto]"
              as="h2"
              variant="h2"
            >
              Our Notable Alumni
            </Text>
            <List
              className="sm:gap-[18px] md:gap-[24px] gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[1357px] min-h-[auto] sm:ml-[15px] md:ml-[20px] ml-[auto] mr-[auto] sm:mt-[48px] md:mt-[62px] mt-[91px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-blue_300_96 flex flex-col items-center justify-end md:p-[11px] sm:p-[15px] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                <Img
                  src="images/img_profilephoto.png"
                  className="max-w-[100%] sm:mt-[17px] md:mt-[22px] mt-[32px] rounded-radius135 sm:w-[100%] w-[64%]"
                  alt="Ellipse"
                />
                <Text
                  className="sm:mt-[13px] md:mt-[17px] mt-[25px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Greta Thunberg
                </Text>
                <Text
                  className="sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-black_900 w-[auto]"
                  variant="body4"
                >
                  Junior Environmentalist
                </Text>
                <div className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                  <Text
                    className="font-normal not-italic text-gray_700 w-[auto]"
                    variant="body7"
                  >
                    Earth Movers
                  </Text>
                  <Button className="cursor-pointer font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic sm:text-[19px] md:text-[21px] text-[23px] text-center text-white_A700 w-[100%]">
                    View Profile
                  </Button>
                </div>
              </div>
              <div className="bg-blue_300_96 flex flex-col items-center justify-end md:p-[11px] sm:p-[15px] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                <Img
                  src="images/img_profilephoto.png"
                  className="max-w-[100%] sm:mt-[17px] md:mt-[22px] mt-[32px] rounded-radius135 sm:w-[100%] w-[64%]"
                  alt="Ellipse One"
                />
                <Text
                  className="sm:mt-[13px] md:mt-[17px] mt-[25px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Greta Thunberg
                </Text>
                <Text
                  className="sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-black_900 w-[auto]"
                  variant="body4"
                >
                  Junior Environmentalist
                </Text>
                <div className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                  <Text
                    className="font-normal not-italic text-gray_700 w-[auto]"
                    variant="body7"
                  >
                    Earth Movers
                  </Text>
                  <Button className="cursor-pointer font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic sm:text-[19px] md:text-[21px] text-[23px] text-center text-white_A700 w-[100%]">
                    View Profile
                  </Button>
                </div>
              </div>
              <div className="bg-blue_300_96 flex flex-col items-center justify-end md:p-[11px] sm:p-[15px] p-[16px] rounded-radius25 shadow-bs2 w-[100%]">
                <Img
                  src="images/img_profilephoto.png"
                  className="max-w-[100%] sm:mt-[17px] md:mt-[22px] mt-[32px] rounded-radius135 sm:w-[100%] w-[64%]"
                  alt="Ellipse Two"
                />
                <Text
                  className="sm:mt-[13px] md:mt-[17px] mt-[25px] text-black_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Greta Thunberg
                </Text>
                <Text
                  className="sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-black_900 w-[auto]"
                  variant="body4"
                >
                  Junior Environmentalist
                </Text>
                <div className="flex flex-col items-center justify-start mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                  <Text
                    className="font-normal not-italic text-gray_700 w-[auto]"
                    variant="body7"
                  >
                    Earth Movers
                  </Text>
                  <Button className="cursor-pointer font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic sm:text-[19px] md:text-[21px] text-[23px] text-center text-white_A700 w-[100%]">
                    View Profile
                  </Button>
                </div>
              </div>
            </List>
            <Text
              className="font-extrabold sm:ml-[43px] md:ml-[55px] ml-[81px] sm:mt-[29px] md:mt-[37px] mt-[55px] text-black_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Events
            </Text>
            <List
              className="sm:gap-[44px] md:gap-[57px] gap-[84px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 max-w-[1249px] min-h-[auto] sm:ml-[53px] md:ml-[68px] ml-[auto] mr-[auto] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-white_A700 flex flex-col items-center justify-start md:pb-[12px] sm:pb-[15px] pb-[18px] rounded-radius26 shadow-bs1 w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Img
                    src="images/img_image3.png"
                    className="max-w-[100%] w-[100%]"
                    alt="imageThree"
                  />
                  <Text
                    className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-black_900 w-[auto]"
                    variant="body12"
                  >
                    Looking for sugar (Profile)
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Img
                        src="images/img_calendar_20X20.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="calendar"
                      />
                      <Text
                        className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] not-italic text-black_900"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                    <div className="flex flex-col justify-start md:ml-[6px] ml-[9px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[52%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Img
                          src="images/img_clock.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="clock"
                        />
                        <Text
                          className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                          variant="body16"
                        >
                          10 am
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start ml-[125px] md:ml-[86px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[1px] py-[1px] w-[100%]">
                      <Img
                        src="images/img_location_20X20.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="location"
                      />
                      <Text
                        className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                        variant="body16"
                      >
                        GB Road
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-normal min-w-[96%] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-[20px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start md:pb-[12px] sm:pb-[15px] pb-[18px] rounded-radius26 shadow-bs1 w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Img
                    src="images/img_image3.png"
                    className="max-w-[100%] w-[100%]"
                    alt="imageThree One"
                  />
                  <Text
                    className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-black_900 w-[auto]"
                    variant="body12"
                  >
                    Looking for sugar (Profile)
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Img
                        src="images/img_calendar_20X20.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="calendar One"
                      />
                      <Text
                        className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] not-italic text-black_900"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                    <div className="flex flex-col justify-start md:ml-[6px] ml-[9px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[52%]">
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
                          10 am
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start ml-[125px] md:ml-[86px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[1px] py-[1px] w-[100%]">
                      <Img
                        src="images/img_location_20X20.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="location One"
                      />
                      <Text
                        className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                        variant="body16"
                      >
                        GB Road
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-normal min-w-[96%] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-[20px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start md:pb-[12px] sm:pb-[15px] pb-[18px] rounded-radius26 shadow-bs1 w-[100%]">
                <div className="flex flex-col justify-start w-[100%]">
                  <Img
                    src="images/img_image3.png"
                    className="max-w-[100%] w-[100%]"
                    alt="imageThree Two"
                  />
                  <Text
                    className="font-normal sm:ml-[29px] md:ml-[38px] ml-[56px] sm:mt-[19px] md:mt-[24px] mt-[36px] not-italic text-black_900 w-[auto]"
                    variant="body12"
                  >
                    Looking for sugar (Profile)
                  </Text>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                      <Img
                        src="images/img_calendar_20X20.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="calendar Two"
                      />
                      <Text
                        className="flex-grow ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[4px] not-italic text-black_900"
                        variant="body16"
                      >
                        24/12/2023
                      </Text>
                    </div>
                    <div className="flex flex-col justify-start md:ml-[6px] ml-[9px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[52%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
                        <Img
                          src="images/img_clock.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="clock Two"
                        />
                        <Text
                          className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                          variant="body16"
                        >
                          10 am
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start ml-[125px] md:ml-[86px] mt-[11px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[1px] py-[1px] w-[100%]">
                      <Img
                        src="images/img_location_20X20.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="location Two"
                      />
                      <Text
                        className="flex-grow ml-[11px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic text-black_900"
                        variant="body16"
                      >
                        GB Road
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-normal min-w-[96%] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-[20px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </List>
            <Stack className="h-[1282px] sm:mt-[46px] md:mt-[60px] mt-[88px] relative w-[100%]">
              <Stack className="absolute bottom-[2%] h-[1258px] w-[100%]">
                <div className="absolute bg-blue_300 flex flex-col items-center justify-start sm:p-[15px] md:p-[17px] p-[26px] top-[0] w-[100%]">
                  <div className="flex flex-col items-center justify-start mb-[137px] sm:mb-[72px] md:mb-[94px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                    <div className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-extrabold sm:ml-[13px] md:ml-[17px] ml-[26px] text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Gallery
                      </Text>
                      <List
                        className="sm:gap-[31px] md:gap-[40px] gap-[59px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]"
                        orientation="horizontal"
                      >
                        <div className="bg-white_A701 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[28px] rounded-radius25 w-[100%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[0] sm:w-[100%] w-[98%]">
                            <Img
                              src="images/img_coverimg.png"
                              className="max-w-[100%] rounded-radius3 sm:w-[100%] w-[98%]"
                              alt="CoverImg"
                            />
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900 w-[auto]"
                                variant="body11"
                              >
                                Tuesday, 16th January 2022
                              </Text>
                              <Text
                                className="mt-[2px] not-italic text-black_900 w-[auto]"
                                variant="body16"
                              >
                                10 items
                              </Text>
                            </div>
                            <Text
                              className="font-normal md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                              variant="body11"
                            >
                              Description of the event{" "}
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A701 flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[28px] rounded-radius25 w-[100%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[0] sm:w-[100%] w-[98%]">
                            <Img
                              src="images/img_coverimg.png"
                              className="max-w-[100%] rounded-radius3 sm:w-[100%] w-[98%]"
                              alt="CoverImg One"
                            />
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900 w-[auto]"
                                variant="body11"
                              >
                                Tuesday, 16th January 2022
                              </Text>
                              <Text
                                className="mt-[2px] not-italic text-black_900 w-[auto]"
                                variant="body16"
                              >
                                10 items
                              </Text>
                            </div>
                            <Text
                              className="font-normal md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                              variant="body11"
                            >
                              Description of the event{" "}
                            </Text>
                          </div>
                        </div>
                        <div className="bg-white_A701 flex flex-col items-center justify-start sm:p-[15px] md:p-[17px] p-[26px] rounded-radius25 w-[100%]">
                          <div className="flex flex-col justify-start sm:mx-[0] sm:my-[3px] md:my-[4px] my-[7px] sm:px-[0] sm:w-[100%] w-[98%]">
                            <Img
                              src="images/img_coverimg.png"
                              className="max-w-[100%] rounded-radius3 sm:w-[100%] w-[98%]"
                              alt="CoverImg Two"
                            />
                            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-black_900 w-[auto]"
                                variant="body11"
                              >
                                Tuesday, 16th January 2022
                              </Text>
                              <Text
                                className="mt-[2px] not-italic text-black_900 w-[auto]"
                                variant="body16"
                              >
                                10 items
                              </Text>
                            </div>
                            <Text
                              className="font-normal md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                              variant="body11"
                            >
                              Description of the event{" "}
                            </Text>
                          </div>
                        </div>
                      </List>
                      <Text
                        className="font-normal sm:ml-[18px] md:ml-[23px] ml-[34px] mt-[145px] sm:mt-[77px] md:mt-[99px] not-italic text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Contacts
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-bluegray_100 bottom-[0] flex flex-col justify-start left-[2%] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[22px] rounded-radius62 sm:w-[100%] w-[42%]">
                  <Text
                    className="font-normal sm:mb-[199px] md:mb-[258px] mb-[375px] ml-[12px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Contact Info
                  </Text>
                </div>
              </Stack>
              <Text
                className="absolute bottom-[0] leading-[24.00px] md:leading-[normal] sm:leading-[normal] left-[5%] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[38%]"
                variant="body3"
              >
                <span className="text-black_900 text-[31px] font-inter font-normal sm:text-[27px] md:text-[29px]">
                  VJTI, H. R. Mahajani Road, Matunga, <br />
                  <br />
                  Mumbai -400019
                  <br />
                  <br />
                  <br />
                  VJTI AA Office: +91 7045597831 <br />
                  <br />
                  Chairman AA: +91 9820077666
                  <br />
                  <br />
                  <br />
                </span>
                <a
                  href="javascript:"
                  className="text-black_900 text-[31px] font-inter font-normal sm:text-[27px] md:text-[29px] underline"
                >
                  https://vjtialumni.com
                  <br />
                  <br />
                </a>
                <a
                  href="javascript:"
                  className="text-black_900 text-[31px] font-inter font-normal sm:text-[27px] md:text-[29px] underline"
                >
                  vjtialumni@gmail.com
                </a>
              </Text>
            </Stack>
            <Text
              className="sm:ml-[170px] md:ml-[220px] ml-[320px] sm:mt-[168px] md:mt-[218px] mt-[317px] not-italic text-black_900 w-[auto]"
              variant="body3"
            >
              <a
                href="javascript:"
                className="text-black_900 text-[31px] font-inter font-semibold sm:text-[27px] md:text-[29px] underline"
              >
                Home |{" "}
              </a>
              <a
                href="javascript:"
                className="text-black_900 text-[31px] font-inter font-semibold sm:text-[27px] md:text-[29px] underline"
              >
                About |{" "}
              </a>
              <a
                href="javascript:"
                className="text-black_900 text-[31px] font-inter font-semibold sm:text-[27px] md:text-[29px] underline"
              >
                Contact |{" "}
              </a>
              <a
                href="javascript:"
                className="text-black_900 text-[31px] font-inter font-semibold sm:text-[27px] md:text-[29px] underline"
              >
                SITEMAP |{" "}
              </a>
              <a
                href="javascript:"
                className="text-black_900 text-[31px] font-inter font-semibold sm:text-[27px] md:text-[29px] underline"
              >
                Terms |{" "}
              </a>
              <a
                href="javascript:"
                className="text-black_900 text-[31px] font-inter font-semibold sm:text-[27px] md:text-[29px] underline"
              >
                Privacy
              </a>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
