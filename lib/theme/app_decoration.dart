import 'package:flutter/material.dart';
import 'package:mitul_s_application173/core/app_export.dart';

class AppDecoration {
  static BoxDecoration get fillDeeporange300 => BoxDecoration(
        color: ColorConstant.deepOrange300,
      );
  static BoxDecoration get outlineGray300 => BoxDecoration(
        border: Border.all(
          color: ColorConstant.gray300,
          width: getHorizontalSize(
            1,
          ),
        ),
      );
  static BoxDecoration get fillWhiteA700 => BoxDecoration(
        color: ColorConstant.whiteA700,
      );
}

class BorderRadiusStyle {
  static BorderRadius roundedBorder5 = BorderRadius.circular(
    getHorizontalSize(
      5,
    ),
  );
}

// Comment/Uncomment the below code based on your Flutter SDK version.

// For Flutter SDK Version 3.7.2 or greater.

double get strokeAlignInside => BorderSide.strokeAlignInside;

double get strokeAlignCenter => BorderSide.strokeAlignCenter;

double get strokeAlignOutside => BorderSide.strokeAlignOutside;

// For Flutter SDK Version 3.7.1 or less.

// StrokeAlign get strokeAlignInside => StrokeAlign.inside;
//
// StrokeAlign get strokeAlignCenter => StrokeAlign.center;
//
// StrokeAlign get strokeAlignOutside => StrokeAlign.outside;
