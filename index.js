import { Expo } from "expo-server-sdk";

const expo = new Expo();

const TOKEN = process.argv[2];

const sendNotification = async (token) => {
  if (Expo.isExpoPushToken(token)) {
    const notificationResponse = await expo.sendPushNotificationsAsync([
      {
        to: token,
        title: "hello !",
        body: "this is expo notification",
        data: {
          greeting: "greeting!",
        },
      },
    ]);
    console.log("notification send : ", notificationResponse);
  } else {
    console.log(`${token} this is not an expo token`);
  }
};

sendNotification(TOKEN);
