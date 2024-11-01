import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./naviagtion-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import { ChatMessage, SendMoney, WithDraw } from "@src/screens/app";

export const appScreen: appScreenTypes[] = [
  {
    screenName: appScreenNames.BOTTOM_TAB,
    component: BottomTabStack,
  },
  {
    screenName: appScreenNames.CHAT_MESSAGE,
    component: ChatMessage,
  },
  {
    screenName: appScreenNames.SEND_MONEY,
    component: SendMoney,
  },
  {
    screenName: appScreenNames.WITH_DRAW,
    component: WithDraw,
  },
];
