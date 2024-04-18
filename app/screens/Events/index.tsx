import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { FlatList, Image } from "@components/NativeCustomComponent";
import FloatingButton from "./FloatingButton";

import { EventData, IProp } from "./utils";

export default function Home({
  eventsData,
  isListView,
  onListItemPress,
  onListViewChange,
  flatListKey,
}: IProp) {
  const renderItem = ({ item }: { item: EventData }) => (
    <TouchableOpacity
      onPress={() => onListItemPress(item)}
      style={!isListView && [{ width: "50%" }]}
    >
      <View style={{ flexDirection: "row", padding: 10 }}>
        <Image
          source={item.image}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <View>
          <Text style={!isListView && [styles.eventText]} numberOfLines={1}>
            Name : {item.name}
          </Text>
          <Text style={!isListView && [styles.eventText]} numberOfLines={1}>
            Location : {item.location}
          </Text>
          <Text style={!isListView && [styles.eventText]} numberOfLines={1}>
            Entry Type : {item.entryType === "paid" ? "Paid" : "Free"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={eventsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={!isListView ? 2 : 1}
          key={flatListKey}
        />
      </View>
      <FloatingButton onPress={onListViewChange} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  eventText: { width: "80%", marginVertical: 2 },
});
