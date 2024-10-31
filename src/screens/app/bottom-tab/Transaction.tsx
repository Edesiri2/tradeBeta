import React from "react";
import { Screen } from "../../Screen";
import { RegularText } from "@src/components/shared/text";
import { BottomTabBarScreenProps } from "@src/router/types";
import { bottomTabScreenNames } from "@src/navigation";

export const Transaction =
  ({}: BottomTabBarScreenProps<bottomTabScreenNames.TRANSACTION>) => {
    return (
      <Screen>
        <RegularText>Transaction</RegularText>
      </Screen>
    );
  };
