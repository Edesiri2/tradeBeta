import { LightText, SemiBoldText } from "@src/components/shared/text";
import { colors } from "@src/resources/colors";
import {
  DVH,
  moderateScale,
  screenHeight,
  screenWidth,
  verticalScale,
} from "@src/resources/scaling";
import React from "react";
import { StyleSheet, TouchableOpacity, View, FlatList } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export interface IOnSelected {
  modalOpened: boolean;
  selectedValue: string;
}

type selectionModalProps = {
  data: any[];
  modalOpened: boolean;
  setModalOpened: (value: boolean) => void;
  closeModal: () => void;
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  title: string;
};

export const SelectionModal: React.FC<selectionModalProps> = ({
  data,
  modalOpened,
  setModalOpened,
  closeModal,
  selectedValue,
  setSelectedValue,
  title,
}) => {
  return (
    <>
      {modalOpened ? (
        <Animated.View
          style={styles.container}
          entering={FadeIn}
          exiting={FadeOut}>
          <View style={styles.contentContainer}>
            {title && (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: DVH(1),
                }}>
                <SemiBoldText sizeMedium black>
                  {title}
                </SemiBoldText>
                <TouchableOpacity onPress={() => closeModal()}>
                  <Ionicons
                    name='close'
                    color={colors.darkGray}
                    size={moderateScale(25)}
                  />
                </TouchableOpacity>
              </View>
            )}
            <FlatList
              data={data && data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  style={styles.categoryItemBtn}
                  onPress={() => {
                    setModalOpened(false);
                    setSelectedValue(item);
                  }}>
                  <LightText>{item}</LightText>
                  <FontAwesome
                    name={"check-circle"}
                    color={
                      item === selectedValue
                        ? colors.main_color
                        : colors.darkGray
                    }
                    size={moderateScale(20)}
                  />
                </TouchableOpacity>
              )}
              showsVerticalScrollIndicator={false}
              maxToRenderPerBatch={2}
              initialNumToRender={2}
              windowSize={2}
              updateCellsBatchingPeriod={100}
            />
          </View>
        </Animated.View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.modalBg,
    width: screenWidth,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 20,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentContainer: {
    width: "90%",
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    height: DVH(25),
    padding: moderateScale(15),
  },
  categoryItemBtn: {
    paddingVertical: verticalScale(5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
