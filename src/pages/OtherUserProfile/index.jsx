import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OtherUserProfilePage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");
  const [searchinputonevalue, setSearchinputonevalue] = React.useState("");

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
                className="font-medium ml-4 md:ml-[0] text-gray_901 text-left tracking-[0.12px]"
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
                <div
                  className="common-pointer flex flex-col items-start justify-end p-2 w-full"
                  onClick={() => navigate("/message")}
                >
                  <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[46%] md:w-full">
                    <Img
                      src="images/img_car.svg"
                      className="h-6 w-6"
                      alt="car"
                    />
                    <Text
                      className="font-medium mt-[3px] text-gray_500 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Message
                    </Text>
                  </div>
                </div>
                <div
                  className="common-pointer flex flex-col items-start justify-end p-2 w-full"
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
                      alt="user"
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
                      alt="user One"
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
          <div className="font-urbanist h-[258px] md:h-[292px] mt-[49px] mx-auto relative w-[78%]">
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
        <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
          <div className="bg-white_A700 flex md:flex-col flex-row md:gap-10 items-center justify-between outline outline-gray_100 p-[34px] sm:px-5 w-full">
            <Input
              value={searchinputvalue}
              onChange={(e) => setSearchinputvalue(e)}
              wrapClassName="flex md:flex-1 md:mt-0 my-0.5 w-[45%] md:w-full"
              className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-sm tracking-[0.14px] w-full"
              name="SearchInput"
              placeholder="Search items, collections, and users"
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
              variant="srcOutlineGray300"
            ></Input>
            <div className="flex md:flex-1 flex-row font-urbanist gap-[30px] items-center justify-center md:mt-0 my-0.5 w-[32%] md:w-full">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[137px]"
                leftIcon={
                  <Img
                    src="images/img_sort.svg"
                    className="ml-4 mr-2.5 my-3.5"
                    alt="sort"
                  />
                }
                shape="RoundedBorder10"
                size="lg"
                variant="OutlineGray100"
              >
                <div className="font-medium text-base text-black_900 text-left tracking-[0.16px]">
                  3,421 ETH
                </div>
              </Button>
              <Button
                className="flex h-[52px] items-center justify-center w-[52px]"
                shape="icbCircleBorder25"
                size="lgIcn"
                variant="icbOutlineGray100"
              >
                <Img src="images/img_lock.svg" className="h-6" alt="lock" />
              </Button>
              <SelectBox
                className="w-[27%] sm:w-full"
                placeholderClassName=""
                indicator={
                  <Img
                    src="images/img_ellipse1020.png"
                    className="h-[52px] mr-[35px] w-[52px] rounded-[50%]"
                    alt="Ellipse 1020"
                  />
                }
                isMulti={false}
                name="user Two"
                options={userTwoOptionsList}
                isSearchable={false}
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-col font-urbanist relative w-full">
            <Img
              src="images/img_rectangle2057.png"
              className="h-[260px] mx-auto object-cover w-full"
              alt="Rectangle2057"
            />
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between mt-[-84px] mx-auto w-[95%] z-[1]">
              <div className="bg-white_A700 flex flex-col gap-6 items-center justify-center mb-[272px] p-[18px] rounded-[15px] shadow-bs1 w-[23%] md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start mt-4 w-[87%] md:w-full">
                  <Img
                    src="images/img_ellipse1022.png"
                    className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                    alt="Ellipse1022"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="font-semibold text-black_900 text-left tracking-[0.20px]"
                      as="h1"
                      variant="h1"
                    >
                      Eleanor Pena
                    </Text>
                    <div className="flex flex-row gap-1.5 items-start justify-between mt-1 w-full">
                      <Text
                        className="font-medium mt-0.5 text-gray_500 text-left tracking-[0.12px]"
                        as="h1"
                        variant="h1"
                      >
                        0x864784f44ajf84bskw4w...
                      </Text>
                      <Img
                        src="images/img_lock_18x18.svg"
                        className="h-[18px] w-[18px]"
                        alt="lock One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-[9px] w-full">
                  <Text
                    className="font-normal leading-[180.00%] not-italic text-center text-gray_500 tracking-[0.14px] w-full"
                    as="h1"
                    variant="h1"
                  >
                    Dedicated to create amazing for art exhibition information
                    please check link below:
                  </Text>
                  <div className="flex flex-row gap-1.5 items-center justify-center mt-[22px] py-0.5 w-[45%] md:w-full">
                    <Img
                      src="images/img_globe_18x18.svg"
                      className="h-[18px] w-[18px]"
                      alt="globe"
                    />
                    <Text
                      className="font-normal not-italic text-black_900 text-left tracking-[0.12px]"
                      as="h1"
                      variant="h1"
                    >
                      artistictea.io
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-between mt-[22px] w-[87%] md:w-full">
                    <Button
                      className="cursor-pointer font-medium min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                      shape="RoundedBorder10"
                      size="sm"
                      variant="FillGray900"
                    >
                      Follow
                    </Button>
                    <Button
                      className="flex h-8 items-center justify-center w-8"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_reply.svg"
                        className="h-[18px]"
                        alt="reply"
                      />
                    </Button>
                    <Button
                      className="flex h-8 items-center justify-center w-8"
                      shape="icbRoundedBorder8"
                      size="smIcn"
                      variant="icbOutlineGray100"
                    >
                      <Img
                        src="images/img_camera_32x32.svg"
                        className="h-[18px]"
                        alt="camera"
                      />
                    </Button>
                  </div>
                  <Line className="bg-gray_100 h-px mt-6 w-full" />
                  <Text
                    className="font-normal mt-7 not-italic text-center text-gray_500 tracking-[0.14px]"
                    as="h1"
                    variant="h1"
                  >
                    Joined April 2021
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[34px] items-center justify-start md:mt-0 mt-[118px] w-3/4 md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                  <div className="flex sm:flex-1 flex-row gap-3 items-center justify-between w-[44%] sm:w-full">
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[107px]"
                      leftIcon={
                        <Img
                          src="images/img_grid.svg"
                          className="ml-3 mr-2.5 my-2"
                          alt="grid"
                        />
                      }
                      shape="CircleBorder18"
                      size="md"
                      variant="FillBlack900"
                    >
                      <div className="font-medium text-left text-sm text-white_A700 tracking-[0.14px]">
                        Created
                      </div>
                    </Button>
                    <div className="flex flex-row gap-2.5 items-center justify-center p-2">
                      <Img
                        src="images/img_folderadd.svg"
                        className="h-5 ml-1 w-5"
                        alt="folderadd"
                      />
                      <Text
                        className="font-medium mr-1 text-gray_500 text-left tracking-[0.14px]"
                        as="h1"
                        variant="h1"
                      >
                        Collection
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 items-center justify-center p-[7px]">
                      <Img
                        src="images/img_clock_24x24.svg"
                        className="h-5 ml-1 w-5"
                        alt="clock Three"
                      />
                      <Text
                        className="font-medium mr-1 text-gray_500 text-left tracking-[0.14px]"
                        as="h1"
                        variant="h1"
                      >
                        History
                      </Text>
                    </div>
                  </div>
                  <Input
                    value={searchinputonevalue}
                    onChange={(e) => setSearchinputonevalue(e)}
                    wrapClassName="flex sm:flex-1 w-[26%] sm:w-full"
                    className="font-normal not-italic p-0 placeholder:text-gray_500 text-gray_500 text-left text-xs tracking-[0.12px] w-full"
                    name="SearchInput One"
                    placeholder="Search by name"
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer my-[9px] mx-3.5"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#93989a"
                        className="cursor-pointer my-auto"
                        onClick={() => setSearchinputonevalue("")}
                        style={{
                          visibility:
                            searchinputonevalue?.length <= 0
                              ? "hidden"
                              : "visible",
                        }}
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                      />
                    }
                    shape="srcRoundedBorder8"
                    size="smSrc"
                    variant="srcOutlineGray300_1"
                  ></Input>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                    <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div className="h-[140px] relative w-full">
                        <Img
                          src="images/img_rectangle2044_13.png"
                          className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                          alt="Rectangle2044"
                        />
                        <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px]"
                              alt="favorite"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                        <div className="flex flex-col items-start justify-start pt-0.5">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            Person Melirik Kesamping
                          </Text>
                          <Text
                            className="font-medium mt-1 text-gray_500 text-left tracking-[0.12px]"
                            as="h1"
                            variant="h1"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col font-outfit items-start justify-start">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.10px]"
                              as="h1"
                              variant="h1"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                              <Img
                                src="images/img_sort.svg"
                                className="h-4 w-4"
                                alt="sort"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-[0.14px]"
                                as="h1"
                                variant="h1"
                              >
                                2,42 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            onClick={() => navigate("/marketdetail")}
                            shape="RoundedBorder10"
                            size="sm"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div className="h-[140px] relative w-full">
                        <Img
                          src="images/img_rectangle2044_14.png"
                          className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                          alt="Rectangle2044 One"
                        />
                        <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px]"
                              alt="heart"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            Building Reflection Xd
                          </Text>
                          <Text
                            className="font-medium mt-1 text-gray_500 text-left tracking-[0.12px]"
                            as="h1"
                            variant="h1"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col font-outfit items-start justify-start">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.10px]"
                              as="h1"
                              variant="h1"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                              <Img
                                src="images/img_sort.svg"
                                className="h-4 w-4"
                                alt="sort One"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-[0.14px]"
                                as="h1"
                                variant="h1"
                              >
                                52,12 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            onClick={() => navigate("/marketdetail")}
                            shape="RoundedBorder10"
                            size="sm"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div className="h-[140px] relative w-full">
                        <Img
                          src="images/img_rectangle2044_15.png"
                          className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                          alt="Rectangle2044 Two"
                        />
                        <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Text
                            className="bg-gray_900_26 font-medium h-7 pl-2.5 sm:pr-5 pr-[30px] py-1.5 rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                            as="h1"
                            variant="h1"
                          >
                            Ended
                          </Text>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px]"
                              alt="heart One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            Natural Atomic Circle
                          </Text>
                          <Text
                            className="font-medium text-gray_500 text-left tracking-[0.12px]"
                            as="h1"
                            variant="h1"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col font-outfit items-start justify-start">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.10px]"
                              as="h1"
                              variant="h1"
                            >
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                              <Img
                                src="images/img_sort.svg"
                                className="h-4 w-4"
                                alt="sort Two"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-[0.14px]"
                                as="h1"
                                variant="h1"
                              >
                                22,52 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            onClick={() => navigate("/marketdetail")}
                            shape="RoundedBorder10"
                            size="sm"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div className="h-[140px] relative w-full">
                        <Img
                          src="images/img_rectangle2044_17.png"
                          className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                          alt="Rectangle2044 Three"
                        />
                        <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Text
                            className="bg-gray_900_26 font-medium h-7 pl-2.5 sm:pr-5 pr-[30px] py-1.5 rounded-[14px] text-left text-white_A700 tracking-[0.12px] w-[75px]"
                            as="h1"
                            variant="h1"
                          >
                            Ended
                          </Text>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px]"
                              alt="heart Two"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            Uowaw Your Face is Good
                          </Text>
                          <Text
                            className="font-medium text-gray_500 text-left tracking-[0.12px]"
                            as="h1"
                            variant="h1"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col font-outfit items-start justify-start">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.10px]"
                              as="h1"
                              variant="h1"
                            >
                              Fixed Price
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                              <Img
                                src="images/img_sort.svg"
                                className="h-4 w-4"
                                alt="sort Three"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-[0.14px]"
                                as="h1"
                                variant="h1"
                              >
                                1,32 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            onClick={() => navigate("/marketdetail")}
                            shape="RoundedBorder10"
                            size="sm"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div className="h-[140px] relative w-full">
                        <Img
                          src="images/img_rectangle2044_18.png"
                          className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                          alt="Rectangle2044 Four"
                        />
                        <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_heart.svg"
                              className="h-[18px]"
                              alt="heart Three"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-start">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            One Blooded Hand
                          </Text>
                          <Text
                            className="font-medium text-gray_500 text-left tracking-[0.12px]"
                            as="h1"
                            variant="h1"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col font-outfit items-start justify-start">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.10px]"
                              as="h1"
                              variant="h1"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                              <Img
                                src="images/img_sort.svg"
                                className="h-4 w-4"
                                alt="sort Four"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-[0.14px]"
                                as="h1"
                                variant="h1"
                              >
                                5,52 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            onClick={() => navigate("/marketdetail")}
                            shape="RoundedBorder10"
                            size="sm"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 flex-col gap-5 items-center justify-start p-1.5 rounded-[15px] shadow-bs1 w-full">
                      <div className="h-[140px] relative w-full">
                        <Img
                          src="images/img_rectangle2044_16.png"
                          className="h-[140px] m-auto object-cover rounded-[12px] w-full"
                          alt="Rectangle2044 Five"
                        />
                        <div className="absolute flex flex-row gap-2 items-center justify-between right-[3%] top-[6%] w-[48%]">
                          <Button
                            className="cursor-pointer font-medium min-w-[75px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            shape="CircleBorder14"
                            size="sm"
                            variant="Outline"
                          >
                            2h 4m 32s
                          </Button>
                          <Button
                            className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                            size="smIcn"
                            variant="icbOutline"
                          >
                            <Img
                              src="images/img_favorite.svg"
                              className="h-[18px]"
                              alt="favorite One"
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start mb-3 w-[94%] md:w-full">
                        <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5">
                          <Text
                            className="font-semibold text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            Oldtown Artistic Alley
                          </Text>
                          <Text
                            className="font-medium mt-1 text-gray_500 text-left tracking-[0.12px]"
                            as="h1"
                            variant="h1"
                          >
                            By Eleanor Pena
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-between w-full">
                          <div className="flex flex-col font-outfit items-start justify-start">
                            <Text
                              className="font-normal not-italic text-gray_500 text-left tracking-[0.10px]"
                              as="h1"
                              variant="h1"
                            >
                              Current Bid
                            </Text>
                            <div className="flex flex-row font-urbanist gap-1.5 items-start justify-start mt-1 w-full">
                              <Img
                                src="images/img_sort.svg"
                                className="h-4 w-4"
                                alt="sort Five"
                              />
                              <Text
                                className="font-medium text-black_900 text-left tracking-[0.14px]"
                                as="h1"
                                variant="h1"
                              >
                                1,224 ETH
                              </Text>
                            </div>
                          </div>
                          <Button
                            className="common-pointer cursor-pointer font-medium font-urbanist min-w-[88px] text-center text-white_A700 text-xs tracking-[0.12px]"
                            onClick={() => navigate("/marketdetail")}
                            shape="RoundedBorder10"
                            size="sm"
                            variant="FillGray900"
                          >
                            Place a Bid
                          </Button>
                        </div>
                      </div>
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

export default OtherUserProfilePage;
