import 'package:mitul_s_application173/presentation/splash_screen/splash_screen.dart';
import 'package:mitul_s_application173/presentation/splash_screen/binding/splash_binding.dart';
import 'package:mitul_s_application173/presentation/add_update_subscription_screen/add_update_subscription_screen.dart';
import 'package:mitul_s_application173/presentation/add_update_subscription_screen/binding/add_update_subscription_binding.dart';
import 'package:mitul_s_application173/presentation/app_navigation_screen/app_navigation_screen.dart';
import 'package:mitul_s_application173/presentation/app_navigation_screen/binding/app_navigation_binding.dart';
import 'package:get/get.dart';

class AppRoutes {
  static const String splashScreen = '/splash_screen';

  static const String addUpdateSubscriptionScreen =
      '/add_update_subscription_screen';

  static const String appNavigationScreen = '/app_navigation_screen';

  static const String initialRoute = '/initialRoute';

  static List<GetPage> pages = [
    GetPage(
      name: splashScreen,
      page: () => SplashScreen(),
      bindings: [
        SplashBinding(),
      ],
    ),
    GetPage(
      name: addUpdateSubscriptionScreen,
      page: () => AddUpdateSubscriptionScreen(),
      bindings: [
        AddUpdateSubscriptionBinding(),
      ],
    ),
    GetPage(
      name: appNavigationScreen,
      page: () => AppNavigationScreen(),
      bindings: [
        AppNavigationBinding(),
      ],
    ),
    GetPage(
      name: initialRoute,
      page: () => SplashScreen(),
      bindings: [
        SplashBinding(),
      ],
    )
  ];
}
