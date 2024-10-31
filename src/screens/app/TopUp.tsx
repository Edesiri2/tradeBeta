import React from "react";
import { Screen } from "../Screen";
import { RegularText } from "@src/components/shared/text";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation";

export const TopUp = ({}: RootStackScreenProps<appScreenNames.TOP_UP>) => {
  return (
    <Screen>
      <RegularText>Top Up</RegularText>
    </Screen>
  );
};
