import 'package:mitul_s_application173/core/app_export.dart';
import 'package:mitul_s_application173/presentation/add_update_subscription_screen/models/add_update_subscription_model.dart';
import 'package:flutter/material.dart';

class AddUpdateSubscriptionController extends GetxController {
  TextEditingController itemoneoneController = TextEditingController();

  Rx<AddUpdateSubscriptionModel> addUpdateSubscriptionModelObj =
      AddUpdateSubscriptionModel().obs;

  SelectionPopupModel? selectedDropDownValue;

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
    itemoneoneController.dispose();
  }

  onSelected(dynamic value) {
    selectedDropDownValue = value as SelectionPopupModel;
    addUpdateSubscriptionModelObj.value.dropdownItemList.value
        .forEach((element) {
      element.isSelected = false;
      if (element.id == value.id) {
        element.isSelected = true;
      }
    });
    addUpdateSubscriptionModelObj.value.dropdownItemList.refresh();
  }
}
