import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./naviagtion-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import { ChatMessage } from "@src/screens/app";
// import { Notification } from "@src/screens/app/Notification";

export const appScreen: appScreenTypes[] = [
  {
    screenName: appScreenNames.BOTTOM_TAB,
    component: BottomTabStack,
  },
  {
    screenName: appScreenNames.CHAT_MESSAGE,
    component: ChatMessage,
  },
  // {
  //   screenName: appScreenNames.NOTIFICATION,
  //   component:  Notification,
  // }
];
