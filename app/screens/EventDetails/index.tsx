import * as React from "react";

import { Button, Text, View } from "react-native";
import { Image } from "@components/NativeCustomComponent";
import { EventData } from "@screens/Events/utils";

interface IProps {
  event: EventData;
  onTrackEventPress: () => void;
  isTrackedAlready: boolean;
}

export default function EventDetails({
  event,
  onTrackEventPress,
  isTrackedAlready,
}: IProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={event.image}
        style={{ width: 200, height: 200, marginBottom: 10 }}
      />
      <Text>{event.name}</Text>
      <Text>{event.location}</Text>
      <Text>{event.entryType === "paid" ? "Paid Entry" : "Free Entry"}</Text>
      <Button
        title={`${isTrackedAlready ? "Untrack" : "Track"} Event`}
        onPress={onTrackEventPress}
      />
    </View>
  );
}
