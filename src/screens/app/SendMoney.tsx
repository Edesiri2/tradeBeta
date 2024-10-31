import React from "react";
import { Screen } from "../Screen";
import { RegularText } from "@src/components/shared/text";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export const SendMoney =
  ({}: RootStackScreenProps<appScreenNames.SEND_MONEY>) => {
    return (
      <Screen>
        <RegularText>Send Money</RegularText>
      </Screen>
    );
  };
