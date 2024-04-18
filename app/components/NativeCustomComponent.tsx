import React, { forwardRef } from "react";
import {
  ImageProps,
  ImageSourcePropType,
  FlatList as RNFlatList,
  Image as RNImage,
} from "react-native";

// Extra types for FlatList component
type FlatListExtraTypes = {
  noDataTitle?: string;
  noDataMsg?: string;
  onRetry?: () => void;
};
type FlatListTypes = RNFlatList["props"] & FlatListExtraTypes;

// FlatList component using forwardRef to forward refs
const FlatList = forwardRef((rest: FlatListTypes, ref) => {
  return (
    <RNFlatList
      ref={ref}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) =>
        item?.id ? item.id.toString() : `item_${index}`
      }
      {...rest} // Spread other props to RNFlatList
    />
  );
});

const Image = (
  props: ImageProps & { source: string | ImageSourcePropType }
) => {
  const uri =
    typeof props?.source === "string" ? { uri: props.source } : props.source; // Convert source to uri if it's a string
  return <RNImage {...props} source={uri} />;
};

export { FlatList, Image };
