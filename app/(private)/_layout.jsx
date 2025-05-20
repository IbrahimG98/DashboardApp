import { router, Stack } from "expo-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { selectUserToken } from "../../features/dashboardSlice";
import { useEffect } from "react";
import { isTokenValid } from "../../utils/utils";

// import messaging from "@react-native-firebase/messaging";

export default function PrivateLayout() {
  //check if valid, yes continue no redirect to login
  const userToken = useSelector(selectUserToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userToken || !isTokenValid(userToken)) {
      router.navigate("home"); // route to index by "/"
    }
    if (userToken) {
      dispatch(retrieveDashboard());
      dispatch(retrieveAvailableSurveys());
      dispatch(retrieveRewardHistory());
      dispatch(retrieveSurveyHistory());
      dispatch(retrieveRewards());
    }
  }, [dispatch, userToken]);
  // fetch push token and send to BE
  // useEffect(() => {
  //   if (!validToken) return;
  //   requestUserPermission().then((granted) => {
  //     if (granted) {
  //       dispatch(updateNotificationEnabledStatus(!!granted));
  //       messaging()
  //         .getToken()
  //         .then((token) => {
  //           console.log("PUSH TOKEN", token);
  //           // copyToClipboard(token)
  //           // dispatch(updatePushToken(token)); //save push token route on BE
  //         });
  //     }
  //   });

  //   // Handle user opening the app from a notification (when the app is in the background)
  //   messaging().onNotificationOpenedApp((remoteMessage) => {
  //     console.log(
  //       "Notification caused app to open from background state:",
  //       remoteMessage
  //     );
  //     if (remoteMessage) {
  //       // alert(
  //       //   "Notification caused app to open from background state: " +
  //       //     remoteMessage?.notification?.title
  //       // )
  //     }
  //   });

  //   // Handle push notifications when the app is in the foreground
  //   const unsubscribe = messaging().onMessage((remoteMessage) => {
  //     console.log(
  //       "Message handled in the foreground!",
  //       remoteMessage,
  //       pushNotificationsEnabled
  //     );

  //     if (pushNotificationsEnabled && remoteMessage?.notification?.title) {
  //       // alert(
  //       //   "Message handled in the foreground!: " +
  //       //     remoteMessage?.notification?.title
  //       // )
  //       Notifications.scheduleNotificationAsync({
  //         content: {
  //           title: remoteMessage.notification.title,
  //           body: remoteMessage.notification.body,
  //         },
  //         trigger: null,
  //       });
  //     }
  //   });

  //   // NOT SURE IF NEEDED. KEEP IT COMMENTED FOR NOW
  //   // messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //   //   console.log("Message handled in the background!", remoteMessage)
  //   //   if (remoteMessage) {
  //   //     alert(
  //   //       "Message handled in the background!: " +
  //   //         remoteMessage?.notification?.title
  //   //     )
  //   //   }
  //   // })

  //   // Check if the app was opened from a notification (when the app was completely quit)
  //   messaging()
  //     .getInitialNotification()
  //     .then((remoteMessage) => {
  //       console.log(
  //         "Notification caused app to open from quit state:",
  //         remoteMessage
  //       );
  //       if (remoteMessage) {
  //         // alert(
  //         //   "Notification caused app to open from quit state: " +
  //         //     remoteMessage?.notification?.title
  //         // )
  //       }
  //     });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [pushNotificationsEnabled, validToken]);
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          contentStyle: {
            position: "relative",
          },
        }}
      >
        <Stack.Screen
          name="home"
          options={{
            headerShown: true,
            headerBackTitle: "", // Hides the back title on iOS
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="history"
          options={{
            headerShown: true,
            headerBackTitle: "", // Hides the back title on iOS
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="rewards"
          options={{
            headerShown: true,
            headerBackTitle: "", // Hides the back title on iOS
            headerTitle: "",
          }}
        />
      </Stack>
    </Provider>
  );
}
