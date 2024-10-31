import React from "react";
import { Screen } from "../Screen";
import { RegularText } from "@src/components/shared/text";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export const WithDraw =
  ({}: RootStackScreenProps<appScreenNames.WITH_DRAW>) => {
    return (
      <Screen>
        <RegularText>Withdraw</RegularText>
      </Screen>
    );
  };
