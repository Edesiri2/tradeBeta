export const getIconComponent = async (iconFamily: string) => {
  switch (iconFamily) {
    case "AntDesign":
      return (await import("@expo/vector-icons")).AntDesign;
    case "FontAwesome":
      return (await import("@expo/vector-icons")).FontAwesome;
    case "FontAwesome5":
      return (await import("@expo/vector-icons")).FontAwesome5;
    case "MaterialIcons":
      return (await import("@expo/vector-icons")).MaterialIcons;
    case "Entypo":
      return (await import("@expo/vector-icons")).Entypo;
    case "FontAwesome":
      return (await import("@expo/vector-icons")).FontAwesome;
    case "MaterialCommunityIcons":
      return (await import("@expo/vector-icons")).MaterialCommunityIcons;
    case "Foundation":
      return (await import("@expo/vector-icons")).Foundation;
    case "Feather":
      return (await import("@expo/vector-icons")).Feather;
    case "Fontisto":
      return (await import("@expo/vector-icons")).Fontisto;
    // Add other icon families as needed
    default:
      throw new Error(`Unknown icon family: ${iconFamily}`);
  }
};
