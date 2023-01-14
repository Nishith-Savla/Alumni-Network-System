import React from "react";

import { Img, Input, Text, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";
import FeedPost from "components/FeedPost/index.jsx";
import { useQuery } from "react-query";

const fetchPosts = async () => {};

const AlumniFeedPage = () => {
  const { data: posts } = useQuery("posts", fetchPosts);
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="h-screen bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-end sticky w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
              <div className="flex-row md:flex-wrap sm:flex-wrap inline max-w-[1384px] md:ml-[16px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list common-row-list common-row-list">
                <ul className="flex flex-row items-center">
                  <li className="w-[7%] sm:w-[100%] sm:my-[10px] rounded-radius50">
                    <Img
                      src="images/img_logo.png"
                      className="sm:h-[45px] md:h-[58px] h-[83px] rounded-radius50"
                      alt="LOGO"
                    />
                  </li>
                  <li className="w-[43%] mt-[14px] mb-[15px] ml-[208px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[143px] md:mb-[10px] md:mt-[9px]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] sm:text-[25px] md:text-[27px] text-[29px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[43%]"
                      name="GroupTwentyEight"
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
                      alt="Avatar"
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
          <div className="flex flex-row md:flex-wrap sm:flex-wrap h-[px] items-start justify-start max-w-[px] ml-[auto] mr-[auto] sm:mx-[0] p-[0] pb-[0] pl-[0] sm:pl-[15px] pr-[0] sm:pr-[15px] pt-[0] w-[100%]">
            <div className="flex flex-col justify-start ml-[106px] md:ml-[72px] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
              <Text
                className="font-bold sm:ml-[2px] md:ml-[3px] ml-[5px] text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Feed
              </Text>
              <List
                className="sm:gap-[17px] md:gap-[22px] gap-[33px] grid min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]"
                orientation="vertical"
              >
                <FeedPost
                  imgSrc="https://www.utica.edu/images/instadvance/marketingcomm/commence-500b.jpg"
                  avatar="https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916__340.png"
                  name="John Doe"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam adipisci nobis fuga vitae. Laborum iste inventore perspiciatis mollitia quidem dignissimos officia vitae, cum fugiat et qui fuga! At, similique cum."
                />
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumniFeedPage;
