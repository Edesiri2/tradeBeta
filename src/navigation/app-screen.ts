import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./naviagtion-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import { ChatMessage, SendMoney, TopUp, WithDraw } from "@src/screens/app";
import { AddBank } from "@src/screens/app/AddBank";
import { ViewBank } from "@src/screens/app/ViewBank";
import { BankDetails } from "@src/screens/app/BankDetails";
import { Security } from "@src/screens/app/Security";
import { ChangePassword } from "@src/screens/app/ChangePassword";
import { NewPassword } from "@src/screens/app/NewPassword";
import { NotificationSettings } from "@src/screens/app/NotificationSettings";
import { EditProfile } from "@src/screens/app/EditProfile";
import TransactionDetails from "@src/screens/app/TransactionDetails";
import AllTransactions from "@src/screens/app/AllTransactions";
import { PaymentMethod } from "@src/screens/app/PaymentMethod";
import { BankTransfer } from "@src/screens/app/BankTransfer";
import { PayWithBank } from "@src/screens/app/PayWithBank";

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
  {
    screenName: appScreenNames.NEW_PASSWORD,
    component: NewPassword,
  },
  {
    screenName: appScreenNames.NOTIFICATION_SETTINGS,
    component: NotificationSettings,
  },
  {
    screenName: appScreenNames.EDIT_PROFILE,
    component: EditProfile,
  },
  {
    screenName: appScreenNames.TRANSACTION_DETAILS,
    component: TransactionDetails,
  },
  {
    screenName: appScreenNames.ALL_TRANSACTIONS,
    component: AllTransactions,
  },
  {
    screenName: appScreenNames.TOP_UP,
    component: TopUp,
  },
  {
    screenName: appScreenNames.PAYMENT_METHOD,
    component: PaymentMethod,
  },
  {
    screenName: appScreenNames.BANK_TRANSFER,
    component: BankTransfer,
  },
  {
    screenName: appScreenNames.PAY_WITH_BANK,
    component: PayWithBank,
  },
];
