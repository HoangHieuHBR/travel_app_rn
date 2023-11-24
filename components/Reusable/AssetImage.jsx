import { Image } from "react-native";

const AssetImage = ({ data, width, height, mode }) => {
  return (
    <Image
      source={data}
      style={{
        resizeMode: mode,
        width: width,
        height: height,
      }}
    />
  );
};

export default AssetImage;
