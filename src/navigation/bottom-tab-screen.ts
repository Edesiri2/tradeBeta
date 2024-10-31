import { bottomTabScreenTypes } from "@src/types/types";
import { bottomTabScreenNames } from "./naviagtion-names";
import { Chat, Home, Settings, Transaction } from "@src/screens/app/bottom-tab";

export const bottomTabScreen: bottomTabScreenTypes[] = [
  {
    screenName: bottomTabScreenNames.HOME,
    component: Home,
  },
  {
    screenName: bottomTabScreenNames.TRANSACTION,
    component: Transaction,
  },
  {
    screenName: bottomTabScreenNames.CHAT,
    component: Chat,
  },
  {
    screenName: bottomTabScreenNames.SETTINGS,
    component: Settings,
  },
];
