import 'dart:ui';
import 'package:flutter/material.dart';

class ColorConstant {
  static Color gray500 = fromHex('#aaaaaa');

  static Color blueGray50 = fromHex('#eaecf0');

  static Color black900 = fromHex('#000000');

  static Color blueGray400 = fromHex('#888888');

  static Color deepOrange300 = fromHex('#ff7a59');

  static Color blueGray900 = fromHex('#262b35');

  static Color whiteA700 = fromHex('#ffffff');

  static Color gray300 = fromHex('#dddddd');

  static Color fromHex(String hexString) {
    final buffer = StringBuffer();
    if (hexString.length == 6 || hexString.length == 7) buffer.write('ff');
    buffer.write(hexString.replaceFirst('#', ''));
    return Color(int.parse(buffer.toString(), radix: 16));
  }
}
