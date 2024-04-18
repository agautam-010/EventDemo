import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { View, Text, TouchableOpacity } from "react-native";
import DraggableFlatList, {
  DragEndParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { Image } from "@components/NativeCustomComponent";

import { EventData } from "@screens/Events/utils";

export default function UserEvent({
  eventsData,
  onListItemPress,
  onReordered,
}: {
  eventsData: EventData[];
  onListItemPress: (type: "untrack" | "details", event: EventData) => void;
  onReordered: (events: DragEndParams<EventData>) => void;
}) {
  const renderItem = ({
    item,
    drag,
    isActive,
  }: {
    item: EventData;
    drag: any;
    isActive: boolean;
  }) => (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        onPress={() => onListItemPress("details", item)}
        style={[isActive && { backgroundColor: "red" }]}
      >
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Image
            source={item.image}
            style={{ width: 50, height: 50, marginRight: 10 }}
          />
          <View>
            <Text>{item.name}</Text>
            <Text>{item.location}</Text>
            <Text>
              {item.entryType === "paid" ? "Paid Entry" : "Free Entry"}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => onListItemPress("untrack", item)}
              style={{
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 30, color: "red" }}>⛒</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </ScaleDecorator>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          style={{ height: "100%" }}
          ListEmptyComponent={
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                minHeight: 300,
              }}
            >
              <Text>No data avaialble!</Text>
            </View>
          }
          data={eventsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={1}
          onDragEnd={onReordered}
        />
      </View>
    </SafeAreaView>
  );
}
