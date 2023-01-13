import React from "react";

import { Img, Input, Stack, Text, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import { useGoogleLogin } from "@react-oauth/google";

const ProfilePage = () => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
  });

  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[15px] md:pb-[20px] pb-[30px] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[879px] md:ml-[16px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_logo.png"
                className="sm:h-[45px] md:h-[58px] h-[83px] rounded-radius50 w-[10%]"
                alt="imageOne"
              />
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal not-italic p-[0] sm:text-[25px] md:text-[27px] text-[29px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                wrapClassName="flex md:my-[9px] my-[14px] sm:mx-[0] sm:my-[7px] sm:w-[100%] w-[67%]"
                name="GroupTwentyFive"
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
            </div>
          </div>
          <Stack className="h-[292px] mt-[1px] relative w-[100%]">
            <div className="absolute bg-gradient  sm:h-[113px] md:h-[146px] h-[211px] top-[0] w-[100%]"></div>
            <Img
              src="images/img_ellipse.png"
              className="absolute bottom-[0] sm:h-[106px] md:h-[137px] h-[198px] inset-x-[0] mx-[auto] rounded-radius50 w-[14%]"
              alt="Ellipse"
            />
          </Stack>
          <div
            className="common-pointer flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1162px] md:ml-[50px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]"
            onClick={googleSignIn}
          >
            <Text className="text-black_900 w-[auto]" as="h4" variant="h4">
              Nishith Savla
            </Text>
            <Img
              src="images/img_trash_40X40.svg"
              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[347px] md:ml-[449px] ml-[653px] mt-[4px] sm:w-[21px] md:w-[27px] w-[40px]"
              alt="trash"
            />
            <a
              href={"https://www.linkedin.com/in/nishith-savla/"}
              target="_blank"
              className="font-normal md:ml-[12px] ml-[18px] sm:ml-[9px] not-italic sm:text-[33px] md:text-[35px] text-[37px] text-black_900 w-[auto]"
              rel="noreferrer"
            >
              Google
            </a>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end max-w-[1130px] md:ml-[50px] ml-[auto] mr-[auto] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-black_900 w-[auto]"
              variant="body6"
            >
              Student at VJTI | Python, JS & GoLang Enthusiast
            </Text>
            <Img
              src="images/img_mail.svg"
              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:mb-[3px] md:mb-[4px] mb-[7px] sm:ml-[198px] md:ml-[256px] ml-[373px] sm:w-[21px] md:w-[27px] w-[40px]"
              alt="mail"
            />
            <Text
              className="mb-[2px] sm:ml-[18px] md:ml-[24px] ml-[35px] not-italic text-black_900 w-[auto]"
              variant="body1"
            >
              VJTI
            </Text>
          </div>
          <Text
            className="sm:ml-[39px] md:ml-[50px] ml-[74px] not-italic text-black_900 w-[auto]"
            variant="body10"
          >
            Mumbai, Maharashtra, India
          </Text>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1062px] md:ml-[50px] ml-[auto] mr-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="mt-[4px] not-italic text-black_900 w-[auto]"
              variant="body10"
            >
              Branch: Computer Engineering
            </Text>
            <Text
              className="font-bold sm:ml-[351px] md:ml-[454px] ml-[660px] text-black_900 w-[auto]"
              variant="body2"
            >
              Skills
            </Text>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1283px] md:ml-[50px] ml-[auto] mr-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body10"
            >
              Batch: 1999 - 2000
            </Text>
            <Stack className="h-[28px] sm:ml-[413px] md:ml-[534px] ml-[776px] sm:mt-[12px] md:mt-[15px] mt-[23px] relative w-[7%]">
              <Text
                className="absolute not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Python
              </Text>
              <Text
                className="absolute not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Python
              </Text>
            </Stack>
            <Text
              className="ml-[108px] sm:ml-[57px] md:ml-[74px] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-black_900 w-[auto]"
              variant="body9"
            >
              Leadership
            </Text>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end max-w-[270px] ml-[auto] mr-[auto] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              variant="body9"
            >
              C++
            </Text>
            <Text
              className="ml-[138px] sm:ml-[73px] md:ml-[94px] not-italic text-black_900 w-[auto]"
              variant="body9"
            >
              GoLang
            </Text>
          </div>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1282px] md:ml-[47px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <div className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                variant="body10"
              >
                Marital Status: Unmarried
              </Text>
              <Text
                className="md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                variant="body10"
              >
                Gender: Male
              </Text>
              <Text
                className="md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                variant="body10"
              >
                Nationality: Indian
              </Text>
            </div>
            <Text
              className="sm:ml-[381px] md:ml-[493px] ml-[717px] sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-black_900 w-[auto]"
              variant="body9"
            >
              Java
            </Text>
            <Text
              className="ml-[134px] sm:ml-[71px] md:ml-[92px] sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-black_900 w-[auto]"
              variant="body9"
            >
              JavaScript
            </Text>
          </div>
          <Line className="bg-black_900 h-[5px] max-w-[466px] ml-[auto] mr-[auto] sm:mt-[50px] md:mt-[65px] mt-[95px] mx-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Img
            src="images/img_group4.svg"
            className="max-w-[371px] sm:ml-[284px] md:ml-[368px] ml-[auto] mr-[auto] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            alt="GroupFour"
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
