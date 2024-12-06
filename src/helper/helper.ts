export const getIconComponent = async (iconFamily: string) => {
  switch (iconFamily) {
    case "AntDesign":
      return (await import("@expo/vector-icons")).AntDesign;
    case "FontAwesome":
      return (await import("@expo/vector-icons")).FontAwesome;
    case "FontAwesome5":
      return (await import("@expo/vector-icons")).FontAwesome5;
    case "FontAwesome6":
      return (await import("@expo/vector-icons")).FontAwesome6;
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

export const formatAmount = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const returnFileName = (filePath: string) => {
  // Get the file name with extension
  const fileName = filePath.split("/").pop();
  return fileName && fileName;
};

export const returnFileType = (filePath: string) => {
  // Get the file name with extension
  const fileType = filePath.split("/").pop();
  // Extract and return the file extension
  return fileType && fileType.split(".").pop();
};
