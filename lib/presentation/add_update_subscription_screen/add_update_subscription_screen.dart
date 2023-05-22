import 'controller/add_update_subscription_controller.dart';
import 'package:flutter/material.dart';
import 'package:mitul_s_application173/core/app_export.dart';
import 'package:mitul_s_application173/widgets/app_bar/appbar_image.dart';
import 'package:mitul_s_application173/widgets/app_bar/custom_app_bar.dart';
import 'package:mitul_s_application173/widgets/custom_button.dart';
import 'package:mitul_s_application173/widgets/custom_drop_down.dart';
import 'package:mitul_s_application173/widgets/custom_text_form_field.dart';

class AddUpdateSubscriptionScreen
    extends GetWidget<AddUpdateSubscriptionController> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
        child: Scaffold(
            resizeToAvoidBottomInset: false,
            backgroundColor: ColorConstant.whiteA700,
            appBar: CustomAppBar(
                height: getVerticalSize(52),
                leadingWidth: 40,
                leading: AppbarImage(
                    height: getSize(24),
                    width: getSize(24),
                    svgPath: ImageConstant.imgArrowleft,
                    margin: getMargin(left: 16, top: 14, bottom: 14),
                    onTap: () {
                      onTapArrowleftone();
                    }),
                centerTitle: true,
                title: AppbarImage(
                    height: getVerticalSize(42),
                    width: getHorizontalSize(136),
                    svgPath: ImageConstant.imgVector)),
            body: Container(
                width: double.maxFinite,
                padding: getPadding(left: 16, top: 29, right: 16, bottom: 29),
                child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Align(
                          alignment: Alignment.center,
                          child: Text("msg_add_update_subscription".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtSFProTextMedium20)),
                      Padding(
                          padding: getPadding(top: 32),
                          child: Text("lbl_item".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtSFProTextSemibold14)),
                      CustomTextFormField(
                          focusNode: FocusNode(),
                          autofocus: true,
                          controller: controller.itemoneoneController,
                          hintText: "lbl_item".tr,
                          margin: getMargin(top: 9),
                          textInputAction: TextInputAction.done),
                      Padding(
                          padding: getPadding(top: 26),
                          child: Text("lbl_item_type".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtSFProTextSemibold14)),
                      CustomDropDown(
                          focusNode: FocusNode(),
                          autofocus: true,
                          icon: Container(
                              margin: getMargin(left: 30, right: 12),
                              child: CustomImageView(
                                  svgPath: ImageConstant.imgArrowdown)),
                          hintText: "msg_select_item_type".tr,
                          margin: getMargin(top: 8),
                          items: controller.addUpdateSubscriptionModelObj.value
                              .dropdownItemList.value,
                          onChanged: (value) {
                            controller.onSelected(value);
                          }),
                      Padding(
                          padding: getPadding(top: 25),
                          child: Text("lbl_unit_price".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtSFProTextSemibold14)),
                      Container(
                          margin: getMargin(top: 9),
                          padding: getPadding(
                              left: 12, top: 4, right: 12, bottom: 4),
                          decoration: AppDecoration.outlineGray300.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder5),
                          child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                    padding:
                                        getPadding(left: 4, top: 9, bottom: 9),
                                    child: Text("lbl_00".tr,
                                        overflow: TextOverflow.ellipsis,
                                        textAlign: TextAlign.left,
                                        style: AppStyle.txtSFProTextRegular14)),
                                Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: [
                                      CustomImageView(
                                          svgPath:
                                              ImageConstant.imgTrianglesolid,
                                          height: getSize(16),
                                          width: getSize(16)),
                                      CustomImageView(
                                          svgPath:
                                              ImageConstant.imgTriangleoutline,
                                          height: getSize(16),
                                          width: getSize(16),
                                          margin: getMargin(top: 4))
                                    ])
                              ])),
                      Padding(
                          padding: getPadding(top: 26),
                          child: Text("lbl_quantity".tr,
                              overflow: TextOverflow.ellipsis,
                              textAlign: TextAlign.left,
                              style: AppStyle.txtSFProTextSemibold14)),
                      Container(
                          margin: getMargin(top: 8),
                          padding: getPadding(
                              left: 12, top: 4, right: 12, bottom: 4),
                          decoration: AppDecoration.outlineGray300.copyWith(
                              borderRadius: BorderRadiusStyle.roundedBorder5),
                          child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Padding(
                                    padding:
                                        getPadding(left: 4, top: 9, bottom: 9),
                                    child: Text("lbl_00".tr,
                                        overflow: TextOverflow.ellipsis,
                                        textAlign: TextAlign.left,
                                        style: AppStyle.txtSFProTextRegular14)),
                                Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    children: [
                                      CustomImageView(
                                          svgPath:
                                              ImageConstant.imgTrianglesolid,
                                          height: getSize(16),
                                          width: getSize(16)),
                                      CustomImageView(
                                          svgPath:
                                              ImageConstant.imgTriangleoutline,
                                          height: getSize(16),
                                          width: getSize(16),
                                          margin: getMargin(top: 4))
                                    ])
                              ])),
                      CustomButton(
                          height: getVerticalSize(37),
                          width: getHorizontalSize(121),
                          text: "lbl_total_4000".tr,
                          margin: getMargin(top: 24)),
                      CustomButton(
                          height: getVerticalSize(52),
                          text: "msg_update_subscription".tr,
                          margin: getMargin(top: 32, bottom: 5),
                          variant: ButtonVariant.FillDeeporange300,
                          shape: ButtonShape.RoundedBorder10,
                          padding: ButtonPadding.PaddingAll15,
                          fontStyle: ButtonFontStyle.SFProTextMedium18)
                    ]))));
  }

  onTapArrowleftone() {
    Get.back();
  }
}
