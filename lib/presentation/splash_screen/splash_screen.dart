import 'controller/splash_controller.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application173/core/app_export.dart';

// ignore_for_file: must_be_immutable
class SplashScreen extends GetWidget<SplashController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        backgroundColor: ColorConstant.deepOrange300,
        body: Container(
          width: double.maxFinite,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              CustomImageView(
                svgPath: ImageConstant.imgGroup47,
                height: getVerticalSize(
                  147,
                ),
                width: getHorizontalSize(
                  208,
                ),
                alignment: Alignment.centerLeft,
                margin: getMargin(
                  bottom: 5,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
