import "expo-router/entry";

import messaging from "@react-native-firebase/messaging";

// Handle push notifications when the app is in the background
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log("Message handled in the background! index.ts", remoteMessage);
  // alert(
  //   "Message handled in the background!: " + remoteMessage?.notification?.title
  // )
});
