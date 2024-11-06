import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./naviagtion-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import { ChatMessage, SendMoney, WithDraw } from "@src/screens/app";
import { AddBank } from "@src/screens/app/AddBank";
import { ViewBank } from "@src/screens/app/ViewBank";
import { BankDetails } from "@src/screens/app/BankDetails";
import { Security } from "@src/screens/app/Security";
import { ChangePassword } from "@src/screens/app/ChangePassword";

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
  {
    screenName: appScreenNames.ADD_BANK,
    component: AddBank,
  },
  {
    screenName: appScreenNames.VIEW_BANK,
    component: ViewBank,
  },
  {
    screenName: appScreenNames.BANK_DETAILS,
    component: BankDetails,
  },
  {
    screenName: appScreenNames.SECURITY,
    component: Security,
  },
  {
    screenName: appScreenNames.CHANGE_PASSWORD,
    component: ChangePassword,
  },
];
