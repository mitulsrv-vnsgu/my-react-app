import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const MessagePage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar className="!sticky !w-[302px] bg-gray_50 border-gray_100 border-r border-solid flex h-screen justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-row gap-3.5 items-center justify-center md:ml-[0] ml-[34px] mr-[92px] mt-[34px] w-[59%]">
            <Img
              src="images/img_ellipse1015.png"
              className="h-14 md:h-auto rounded-[50%] w-14"
              alt="Ellipse1015"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="font-semibold text-black_900 text-left tracking-[0.18px]"
                as="h1"
                variant="h1"
              >
                Kevin Cranel
              </Text>
              <Text
                className="font-normal mt-1 not-italic text-gray_500 text-left tracking-[0.14px]"
                as="h1"
                variant="h1"
              >
                @kecrane
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start mt-[50px] px-[18px] w-full">
            <div className="flex flex-col gap-[13px] justify-start w-full">
              <Text
                className="font-medium ml-4 md:ml-[0] text-black_900 text-left tracking-[0.12px]"
                as="h1"
                variant="h1"
              >
                GENERAL
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] pr-0.5 w-[55%] md:w-full">
                    <Img
                      src="images/img_clock_1.svg"
                      className="h-6 w-6"
                      alt="clock"
                    />
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Dashboard
                    </Text>
                  </div>
                </div>
                <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-end p-2 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[46%] md:w-full">
                    <Img
                      src="images/img_user_1.svg"
                      className="h-6 w-6"
                      alt="user"
                    />
                    <Text
                      className="font-medium mt-0.5 text-gray_900 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Message
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col font-urbanist items-start justify-end p-2 w-full"
                  onClick={() => navigate("/settings")}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[44%] md:w-full">
                    <Img
                      src="images/img_settings.svg"
                      className="h-6 w-6"
                      alt="settings"
                    />
                    <Text
                      className="font-medium mt-[3px] text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Settings
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[13px] justify-start w-full">
              <Text
                className="font-medium ml-4 md:ml-[0] text-gray_901 text-left tracking-[0.12px]"
                as="h1"
                variant="h1"
              >
                MARKETPLACE
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/market")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[42%] md:w-full">
                    <Img
                      src="images/img_user.svg"
                      className="h-6 w-6"
                      alt="user One"
                    />
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Market
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/activebid")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[51%] md:w-full">
                    <Img
                      src="images/img_judge.svg"
                      className="h-6 w-6"
                      alt="judge"
                    />
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Active Bid
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/saved")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] w-[39%] md:w-full">
                    <Img
                      src="images/img_clock.svg"
                      className="h-6 w-6"
                      alt="clock One"
                    />
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Saved
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[13px] justify-start w-full">
              <Text
                className="font-medium ml-4 md:ml-[0] text-gray_901 text-left tracking-[0.12px]"
                as="h1"
                variant="h1"
              >
                MY PROFILE
              </Text>
              <div className="flex flex-col gap-2 items-center justify-start w-full">
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/myprofilecollection")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] pr-0.5 w-[51%] md:w-full">
                    <Img
                      src="images/img_user_24x24.svg"
                      className="h-6 w-6"
                      alt="user Two"
                    />
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Collection
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-start p-2.5 w-full"
                  onClick={() => navigate("/myprofilewallet")}
                >
                  <div className="flex flex-row gap-[18px] items-center justify-start ml-1.5 md:ml-[0] pr-[3px] w-[39%] md:w-full">
                    <Img
                      src="images/img_computer.svg"
                      className="h-6 w-6"
                      alt="computer"
                    />
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Wallet
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-end p-2 w-full"
                  onClick={() => navigate("/myprofilehistory")}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] pr-1 w-[41%] md:w-full">
                    <Img
                      src="images/img_clock_24x24.svg"
                      className="h-6 w-6"
                      alt="clock Two"
                    />
                    <Text
                      className="font-medium mt-[3px] text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      History
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-urbanist h-[258px] md:h-[293px] mt-[50px] mx-auto relative w-[78%]">
            <div className="absolute bg-gray_900 bottom-[0] h-[233px] inset-x-[0] mx-auto rounded-[15px] w-[234px]"></div>
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[91%]">
              <Button
                className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                size="lgIcn"
                variant="icbOutlineGray5003f"
              >
                <Img
                  src="images/img_question.svg"
                  className="h-6"
                  alt="question"
                />
              </Button>
              <Text
                className="font-semibold mt-4 text-left text-white_A700 tracking-[0.18px]"
                as="h1"
                variant="h1"
              >
                Help Center
              </Text>
              <div className="flex flex-col gap-[30px] items-center justify-start mt-2.5 w-full">
                <Text
                  className="font-normal leading-[180.00%] not-italic text-center text-gray_400 tracking-[0.14px]"
                  as="h1"
                  variant="h1"
                >
                  <>
                    Having trouble in Enefti?
                    <br />
                    Please contact us for more question
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[206px] text-center text-gray_900 text-sm tracking-[0.14px]"
                  shape="RoundedBorder10"
                  size="md"
                  variant="FillWhiteA700"
                >
                  Go To Help Center
                </Button>
              </div>
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly md:px-5 w-full">
          <div className="md:h-[1074px] h-[1076px] relative w-[34%] md:w-full">
            <div className="absolute bg-white_A700 flex flex-col h-max inset-[0] items-center justify-center m-auto outline outline-gray_100 p-6 sm:px-5 w-full">
              <Input
                value={searchinputvalue}
                onChange={(e) => setSearchinputvalue(e)}
                wrapClassName="flex mb-[974px] w-[94%]"
                className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-sm tracking-[0.14px] w-full"
                name="SearchInput"
                placeholder="Search chat"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer my-3.5 mx-4"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    fillColor="#93989a"
                    className="cursor-pointer my-auto"
                    onClick={() => setSearchinputvalue("")}
                    style={{
                      visibility:
                        searchinputvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                  />
                }
                shape="srcRoundedBorder15"
                size="mdSrc"
                variant="srcFillGray50"
              ></Input>
            </div>
            <List
              className="absolute bottom-[0] flex-col font-urbanist gap-[0.5px] grid inset-x-[0] items-center mx-auto w-full"
              orientation="vertical"
            >
              <div className="bg-gray_900_67 flex flex-1 flex-col items-center justify-start my-0 p-5 w-full">
                <div className="flex flex-row items-center justify-between w-[93%] md:w-full">
                  <div className="flex flex-row gap-3.5 items-center justify-between w-[48%]">
                    <Img
                      src="images/img_ellipse1018_7.png"
                      className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                      alt="Ellipse1018"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start pt-0.5">
                      <Text
                        className="font-semibold text-black_900 text-left tracking-[0.16px]"
                        as="h1"
                        variant="h1"
                      >
                        Jenny Wilson
                      </Text>
                      <Text
                        className="font-medium text-gray_500 text-left tracking-[0.14px]"
                        as="h1"
                        variant="h1"
                      >
                        How are you?
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-right tracking-[0.12px]"
                    as="h1"
                    variant="h1"
                  >
                    16:00
                  </Text>
                </div>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[63%]">
                  <Img
                    src="images/img_ellipse1018_8.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 One"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Kristin Watson
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  18:00
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[63%]">
                  <Img
                    src="images/img_ellipse1018_9.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Two"
                  />
                  <div className="flex flex-col gap-1.5 items-center justify-start">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Darlene Robertson
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      Wow, this is really epic
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  08:00
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[51%]">
                  <Img
                    src="images/img_ellipse1018_10.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Three"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Arlene McCoy
                    </Text>
                    <Text
                      className="font-medium mt-1 text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      perfect!
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  11:00
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[59%]">
                  <Img
                    src="images/img_ellipse1018_11.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Four"
                  />
                  <div className="flex flex-col items-start justify-end">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Ralph Edwards
                    </Text>
                    <Text
                      className="font-medium mt-[3px] text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      <>I&#39;ll be there in 2 mins</>
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  11:30
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[67%]">
                  <Img
                    src="images/img_ellipse1018_12.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Five"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Darrell Steward
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      <>Haha that&#39;s terrifying 😂</>
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  13:00
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[56%]">
                  <Img
                    src="images/img_ellipse1018_13.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Six"
                  />
                  <div className="flex flex-col items-start justify-end">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Kathryn Murphy
                    </Text>
                    <Text
                      className="font-medium mt-[3px] text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      woohoooo
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  09:30
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-3/5">
                  <Img
                    src="images/img_ellipse1018_14.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Seven"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Eleanor Pena
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      omg, this is amazing
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  09:00
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[46%]">
                  <Img
                    src="images/img_ellipse1018_15.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Eight"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Cody Fisher
                    </Text>
                    <Text
                      className="font-medium mt-1 text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      aww
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  12:00
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-1/2">
                  <Img
                    src="images/img_ellipse1018_16.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Nine"
                  />
                  <div className="flex flex-col gap-[5px] items-start justify-start">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Wade Warren
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      Haha oh man
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  12:30
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-[13px] items-center justify-between w-[65%]">
                  <Img
                    src="images/img_ellipse1018_17.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Ten"
                  />
                  <div className="flex flex-col gap-1.5 items-start justify-start">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Theresa Webb
                    </Text>
                    <Text
                      className="font-medium text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      just ideas for next time
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  14:00
                </Text>
              </div>
              <Line className="self-center h-px bg-gray_100 w-[83%]" />
              <div className="flex md:flex-1 flex-row items-center justify-between mx-[33px] my-0 w-[83%] md:w-full">
                <div className="flex flex-row gap-3.5 items-center justify-between w-[63%]">
                  <Img
                    src="images/img_ellipse1018_18.png"
                    className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
                    alt="Ellipse1018 Eleven"
                  />
                  <div className="flex flex-col items-start justify-start pt-0.5">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.16px]"
                      as="h1"
                      variant="h1"
                    >
                      Albertus Marque
                    </Text>
                    <Text
                      className="font-medium mt-1 text-gray_500 text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      Hahahaha, Impossible
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-medium text-gray_500 text-right tracking-[0.12px]"
                  as="h1"
                  variant="h1"
                >
                  14:00
                </Text>
              </div>
            </List>
          </div>
          <div className="bg-gray_50 flex md:flex-1 flex-col font-urbanist items-center justify-start mb-0.5 w-[67%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-white_A700 flex md:flex-col flex-row md:gap-5 items-center justify-start outline outline-gray_100 p-[27px] sm:px-5 w-full">
                <div className="flex flex-col items-start justify-end md:ml-[0] ml-[7px]">
                  <Text
                    className="font-semibold text-black_900 text-left tracking-[0.18px]"
                    as="h1"
                    variant="h1"
                  >
                    Jenny Wilson
                  </Text>
                  <Text
                    className="font-medium mt-0.5 text-green_600 text-left tracking-[0.14px]"
                    as="h1"
                    variant="h1"
                  >
                    Online
                  </Text>
                </div>
                <Img
                  src="images/img_search.svg"
                  className="h-6 md:ml-[0] ml-[473px] w-6"
                  alt="search"
                />
                <Img
                  src="images/img_clock_2.svg"
                  className="h-6 ml-5 md:ml-[0] w-6"
                  alt="clock Three"
                />
                <Img
                  src="images/img_overflowmenu.svg"
                  className="h-6 ml-5 md:ml-[0] w-6"
                  alt="overflowmenu"
                />
              </div>
              <div className="flex flex-col gap-7 items-start justify-start mt-[50px] w-[92%] md:w-full">
                <div className="flex flex-col gap-3.5 items-start justify-start w-[56%] md:w-full">
                  <div className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start p-2.5 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-gray_900_ab text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      <>
                        Amateurs think about how much money they can make.
                        <br />
                        Professionals think about how much money they could lose
                      </>
                    </Text>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left tracking-[0.12px]"
                    as="h1"
                    variant="h1"
                  >
                    4:32 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-end justify-start md:ml-[0] ml-[105px] w-[85%] md:w-full">
                  <div className="bg-gray_900 flex flex-col items-center justify-start p-3.5 rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] w-full">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-left text-white_A700_ab tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      <>
                        The price of a commodity will never go to zero. When you
                        invest in commodities futures,
                        <br />
                        you are not buying a piece of paper that says you own an
                        intangible of the company that
                        <br />
                        can go bankrupt 😌.{" "}
                      </>
                    </Text>
                  </div>
                  <CheckBox
                    className="font-medium text-gray_500 text-left text-xs tracking-[0.12px]"
                    inputClassName="mr-[5px]"
                    name="410Am"
                    id="410Am"
                    label="4:10 Am"
                    size="sm"
                  ></CheckBox>
                </div>
                <div className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start p-2.5 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-gray_900_ab text-left tracking-[0.14px]"
                    as="h1"
                    variant="h1"
                  >
                    <>
                      Amateurs think about how much money they can make.
                      <br />
                      Professionals think about how much money they could lose
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start w-[90%] md:w-full">
                  <div className="bg-gray_100 border border-gray_300 border-solid flex flex-col items-center justify-start p-2.5 rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-gray_900_ab text-left tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      <>
                        It&#39;s not always easy to do what&#39;s not popular,
                        but that&#39;s where you make your money.
                        <br />
                        Buy stocks that look bad to less careful investors and
                        hang on until their real value is recognized.
                      </>
                    </Text>
                  </div>
                  <Text
                    className="font-medium text-gray_500 text-left tracking-[0.12px]"
                    as="h1"
                    variant="h1"
                  >
                    4:26 Am
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-end justify-start md:ml-[0] ml-[87px] w-[88%] md:w-full">
                  <div className="bg-gray_900 flex flex-col items-center justify-start p-3.5 rounded-bl-[12px] rounded-tl-[12px] rounded-tr-[12px] w-full">
                    <Text
                      className="font-normal leading-[180.00%] not-italic text-left text-white_A700_ab tracking-[0.14px]"
                      as="h1"
                      variant="h1"
                    >
                      <>
                        99%+ of traders don&#39;t care about Ferraris and
                        yachts. They just want to pay their bills, save a<br />
                        little extra money, and sleep well at night. The only
                        way to do that is to bat 70% or more.
                        <br />
                        Anything less, and these goals are nothing more than
                        fantasy.
                      </>
                    </Text>
                  </div>
                  <CheckBox
                    className="font-medium text-gray_500 text-left text-xs tracking-[0.12px]"
                    inputClassName="mr-[5px]"
                    name="522Am"
                    id="522Am"
                    label="5:22 Am"
                    size="sm"
                  ></CheckBox>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-col font-outfit items-center justify-start mt-[188px] outline outline-gray_100 p-4 w-full">
                <Input
                  wrapClassName="flex w-[96%]"
                  className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-sm tracking-[0.14px] w-full"
                  name="typingfield"
                  placeholder="Write message"
                  prefix={
                    <Img
                      src="images/img_map.svg"
                      className="ml-3.5 mr-4 my-3"
                      alt="map"
                    />
                  }
                  suffix={
                    <Img
                      src="images/img_videocamera.svg"
                      className="ml-[35px] mr-[22px] my-3"
                      alt="video_camera"
                    />
                  }
                  shape="RoundedBorder15"
                  size="sm"
                  variant="FillGray50"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
