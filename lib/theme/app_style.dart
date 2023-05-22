import 'package:flutter/material.dart';
import 'package:mitul_s_application173/core/app_export.dart';

class AppStyle {
  static TextStyle txtSFProTextMedium20 = TextStyle(
    color: ColorConstant.blueGray900,
    fontSize: getFontSize(
      20,
    ),
    fontFamily: 'SF Pro Text',
    fontWeight: FontWeight.w500,
  );

  static TextStyle txtRobotoRegular16 = TextStyle(
    color: ColorConstant.blueGray400,
    fontSize: getFontSize(
      16,
    ),
    fontFamily: 'Roboto',
    fontWeight: FontWeight.w400,
  );

  static TextStyle txtSFProTextRegular14 = TextStyle(
    color: ColorConstant.gray500,
    fontSize: getFontSize(
      14,
    ),
    fontFamily: 'SF Pro Text',
    fontWeight: FontWeight.w400,
  );

  static TextStyle txtSFProTextSemibold14 = TextStyle(
    color: ColorConstant.blueGray900,
    fontSize: getFontSize(
      14,
    ),
    fontFamily: 'SF Pro Text',
    fontWeight: FontWeight.w600,
  );

  static TextStyle txtRobotoRegular20 = TextStyle(
    color: ColorConstant.black900,
    fontSize: getFontSize(
      20,
    ),
    fontFamily: 'Roboto',
    fontWeight: FontWeight.w400,
  );
}
