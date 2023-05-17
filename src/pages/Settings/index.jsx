import React from "react";

import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
  TextArea,
} from "components";

import { CloseSVG } from "../../assets/images";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SettingsPage = () => {
  const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <>
      <div className="bg-white_A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto pb-[34px] w-full">
        <Sidebar className="!sticky !w-[302px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
          <div className="flex flex-col gap-[50px] items-start justify-start my-[34px] w-full">
            <div className="flex flex-row gap-3.5 items-center justify-start md:ml-[0] ml-[34px] w-[59%] md:w-full">
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
            <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start px-[18px] w-full">
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
                    onClick={() => navigate("/message")}
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
                  <div className="bg-gray_900_5f flex flex-col font-outfit items-start justify-end p-2 rounded-[10px] w-full">
                    <div className="flex flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[7px] w-[43%] md:w-full">
                      <Img
                        src="images/img_settings_24x24.svg"
                        className="h-6 w-6"
                        alt="settings"
                      />
                      <Text
                        className="font-medium mt-0.5 text-gray_900 text-left tracking-[0.18px]"
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
            <div className="font-urbanist md:h-[243px] h-[258px] md:ml-[0] ml-[34px] relative w-[78%]">
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
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-5 w-full">
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
          <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start w-[95%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col gap-2.5 items-start justify-start pt-[3px]">
                <Text
                  className="font-semibold text-black_900 text-left"
                  as="h1"
                  variant="h1"
                >
                  General Settings
                </Text>
                <Text
                  className="font-medium text-gray_500 text-left tracking-[0.14px]"
                  as="h1"
                  variant="h1"
                >
                  Update your photo and personal details here.
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[43%] md:w-full">
                <Text
                  className="font-medium text-black_900 text-left tracking-[0.14px]"
                  as="h1"
                  variant="h1"
                >
                  Every changes automaticly saved
                </Text>
                <div className="flex flex-row gap-3 items-center justify-between w-1/2 sm:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[106px] text-center text-sm text-white_A700 tracking-[0.14px]"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillGray900"
                  >
                    Preview
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[106px] text-center text-gray_500 text-sm tracking-[0.14px]"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillGray100"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[66%] md:w-full">
                <div className="bg-white_A700 flex flex-col items-start justify-end outline outline-[0.5px] outline-gray_100 py-6 rounded-[15px] shadow-bs1 w-full">
                  <Text
                    className="font-medium ml-6 md:ml-[0] text-black_900 text-left tracking-[0.18px]"
                    as="h1"
                    variant="h1"
                  >
                    Personal Information
                  </Text>
                  <Line className="bg-gray_100 h-px mt-6 w-full" />
                  <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] mt-8 w-[94%] md:w-full">
                    <div className="flex flex-col gap-6 items-center justify-start w-full">
                      <div className="flex flex-col gap-6 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                            <Text
                              className="font-medium text-black_900 text-left tracking-[0.16px]"
                              as="h1"
                              variant="h1"
                            >
                              <span className="text-black_900 text-base font-urbanist">
                                First Name
                              </span>
                              <span className="text-red_600 text-base font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              wrapClassName="flex w-full"
                              className="font-normal not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm tracking-[0.14px] w-full"
                              name="SearchInput One"
                              placeholder="Kevin"
                              prefix={
                                <Img
                                  src="images/img_user_2.svg"
                                  className="mt-3.5 mb-[13px] ml-4 mr-3"
                                  alt="user"
                                />
                              }
                              shape="RoundedBorder8"
                              size="md"
                              variant="OutlineGray400"
                            ></Input>
                          </div>
                          <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                            <Text
                              className="font-medium text-black_900 text-left tracking-[0.16px]"
                              as="h1"
                              variant="h1"
                            >
                              <span className="text-black_900 text-base font-urbanist">
                                Last Name
                              </span>
                              <span className="text-red_600 text-base font-urbanist">
                                *
                              </span>
                            </Text>
                            <Input
                              wrapClassName="w-full"
                              className="font-normal not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm tracking-[0.14px] w-full"
                              name="SearchInput Two"
                              placeholder="Cranel"
                              shape="RoundedBorder8"
                              size="md"
                              variant="OutlineGray400"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-full">
                          <Text
                            className="font-medium text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            <span className="text-black_900 text-base font-urbanist">
                              Email Address
                            </span>
                            <span className="text-red_600 text-base font-urbanist">
                              *
                            </span>
                          </Text>
                          <Input
                            wrapClassName="flex w-full"
                            className="font-normal not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm tracking-[0.14px] w-full"
                            type="email"
                            name="email"
                            placeholder="hello.kevincranel@workmail.com"
                            prefix={
                              <Img
                                src="images/img_checkmark_24x24.svg"
                                className="mt-3.5 mb-[13px] ml-4 mr-3"
                                alt="checkmark"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="ml-[35px] mr-3.5 my-3.5"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            size="md"
                            variant="OutlineGray400"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-3 items-start justify-start w-full">
                          <Text
                            className="font-medium text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            Username
                          </Text>
                          <Input
                            wrapClassName="flex w-full"
                            className="p-0 w-full"
                            name="searchinput Three"
                            placeholder=""
                            prefix={
                              <Img
                                src="images/img_link.svg"
                                className="mt-3.5 mb-[13px] ml-4 mr-[35px]"
                                alt="link"
                              />
                            }
                            suffix={
                              <Img
                                src="images/img_checkmark_1.svg"
                                className="ml-[35px] mr-3.5 my-3.5"
                                alt="checkmark"
                              />
                            }
                            shape="RoundedBorder8"
                            variant="OutlineGray400_1"
                          ></Input>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start pt-0.5 w-full">
                          <Text
                            className="font-medium text-black_900 text-left tracking-[0.16px]"
                            as="h1"
                            variant="h1"
                          >
                            Biography
                          </Text>
                          <TextArea
                            className="font-normal not-italic placeholder:text-black_900 text-black_900 text-left text-sm tracking-[0.14px] w-full"
                            name="searchinput Four"
                            placeholder="Dedicated to create amazing for art exhibition information please check link below:"
                            shape="RoundedBorder8"
                            size="sm"
                            variant="OutlineGray400"
                          ></TextArea>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <Text
                          className="font-medium text-black_900 text-left tracking-[0.16px]"
                          as="h1"
                          variant="h1"
                        >
                          Website
                        </Text>
                        <Input
                          wrapClassName="flex w-full"
                          className="font-normal not-italic p-0 placeholder:text-black_900 text-black_900 text-left text-sm tracking-[0.14px] w-full"
                          name="weburl"
                          placeholder="weloveart.com/kevincranel"
                          prefix={
                            <Img
                              src="images/img_globe.svg"
                              className="mt-3.5 mb-[13px] ml-4 mr-3"
                              alt="globe"
                            />
                          }
                          shape="RoundedBorder8"
                          size="md"
                          variant="OutlineGray400"
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-8 items-center justify-start outline outline-[0.5px] outline-gray_100 py-[26px] rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-[22px] justify-start w-full">
                    <Text
                      className="font-medium ml-6 md:ml-[0] text-black_900 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Notification Settings
                    </Text>
                    <Line className="bg-gray_100 h-px w-full" />
                  </div>
                  <List
                    className="flex-col gap-[13.5px] grid items-center w-[94%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-start">
                        <Text
                          className="font-medium text-black_900 text-left tracking-[0.16px]"
                          as="h1"
                          variant="h1"
                        >
                          Item Sold
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.14px]"
                          as="h1"
                          variant="h1"
                        >
                          When someone purchased one of your items
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera.svg"
                        className="h-6"
                        alt="camera"
                      />
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="font-medium text-black_900 text-left tracking-[0.16px]"
                          as="h1"
                          variant="h1"
                        >
                          Auction Expirates
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.14px]"
                          as="h1"
                          variant="h1"
                        >
                          When a timed auction you created ends
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_24x40.svg"
                        className="h-6"
                        alt="camera One"
                      />
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col gap-[9px] items-start justify-start">
                        <Text
                          className="font-medium text-black_900 text-left tracking-[0.16px]"
                          as="h1"
                          variant="h1"
                        >
                          Owned Item Updates
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.14px]"
                          as="h1"
                          variant="h1"
                        >
                          When a significant update occurs for one of the items
                          you have purchased on Enefthy
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera_24x40.svg"
                        className="h-6"
                        alt="camera Two"
                      />
                    </div>
                    <Line className="self-center h-px bg-gray_100 w-full" />
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-start">
                        <Text
                          className="font-medium text-black_900 text-left tracking-[0.16px]"
                          as="h1"
                          variant="h1"
                        >
                          Successful Purchase
                        </Text>
                        <Text
                          className="font-normal not-italic text-gray_500 text-left tracking-[0.14px]"
                          as="h1"
                          variant="h1"
                        >
                          When you successfully buy an item
                        </Text>
                      </div>
                      <Img
                        src="images/img_camera.svg"
                        className="h-6"
                        alt="camera Three"
                      />
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[31%] md:w-full">
                <div className="bg-white_A700 flex flex-col gap-8 items-center justify-end outline outline-[0.5px] outline-gray_100 py-6 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-6 justify-start w-full">
                    <Text
                      className="font-medium ml-6 md:ml-[0] text-black_900 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Your Photo
                    </Text>
                    <Line className="bg-gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-6 items-start justify-start w-[86%] md:w-full">
                    <div className="flex flex-row gap-4 items-center justify-start w-[68%] md:w-full">
                      <Img
                        src="images/img_ellipse1023.png"
                        className="h-16 md:h-auto rounded-[50%] w-16"
                        alt="Ellipse1023"
                      />
                      <div className="flex flex-col gap-[9px] items-start justify-start pt-0.5 w-[58%]">
                        <Text
                          className="font-medium text-black_900 text-left tracking-[0.16px]"
                          as="h1"
                          variant="h1"
                        >
                          Edit your photo
                        </Text>
                        <div className="flex flex-row font-outfit gap-2.5 items-start justify-start w-[92%] md:w-full">
                          <Text
                            className="font-normal not-italic text-gray_500 text-left tracking-[0.14px]"
                            as="h1"
                            variant="h1"
                          >
                            Delete
                          </Text>
                          <Text
                            className="font-normal not-italic text-left text-red_600 tracking-[0.14px]"
                            as="h1"
                            variant="h1"
                          >
                            Update
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-col gap-4 items-center justify-start outline-[0.5px] outline-dashed outline-gray_901 p-3.5 rounded-[15px] w-full">
                      <Button
                        className="flex h-12 items-center justify-center w-12"
                        shape="icbCircleBorder25"
                        size="lgIcn"
                        variant="icbFillGray50"
                      >
                        <Img
                          src="images/img_cloud.svg"
                          className="h-[22px]"
                          alt="cloud"
                        />
                      </Button>
                      <div className="flex flex-col gap-[9px] items-center justify-start">
                        <Text
                          className="font-medium text-center text-gray_900 tracking-[0.14px]"
                          as="h1"
                          variant="h1"
                        >
                          Click to upload or drag and drop
                        </Text>
                        <Text
                          className="font-medium leading-[130.00%] text-center text-gray_500 tracking-[0.12px]"
                          as="h1"
                          variant="h1"
                        >
                          <>
                            PNG, JPG or Gif
                            <br />
                            Max 20Mb
                          </>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex flex-col gap-[31px] items-center justify-end outline outline-[0.5px] outline-gray_100 py-6 rounded-[15px] shadow-bs1 w-full">
                  <div className="flex flex-col gap-6 justify-start w-full">
                    <Text
                      className="font-medium ml-6 md:ml-[0] text-black_900 text-left tracking-[0.18px]"
                      as="h1"
                      variant="h1"
                    >
                      Social Linked
                    </Text>
                    <Line className="bg-gray_100 h-px w-full" />
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start w-[86%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Img
                        src="images/img_signal.svg"
                        className="h-7"
                        alt="signal"
                      />
                      <Button
                        className="cursor-pointer font-medium min-w-[96px] text-center text-sm text-white_A700 tracking-[0.14px]"
                        shape="RoundedBorder10"
                        size="sm"
                        variant="FillGreen600"
                      >
                        Connected
                      </Button>
                    </div>
                    <div className="flex flex-col gap-[9px] items-start justify-start">
                      <Text
                        className="font-medium text-black_900 text-left tracking-[0.16px]"
                        as="h1"
                        variant="h1"
                      >
                        Edit your photo
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] not-italic text-gray_500 text-left tracking-[0.14px]"
                        as="h1"
                        variant="h1"
                      >
                        <>
                          Use Google to sign in to your account.
                          <br />
                          Click here to learn more.
                        </>
                      </Text>
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

export default SettingsPage;
