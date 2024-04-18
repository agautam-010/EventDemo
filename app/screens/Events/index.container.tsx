import React, { useState } from "react";

import Home from ".";
import { EventData } from "./utils";
import { RootStackScreenProps } from "@utils/types";

export const eventsData: EventData[] = [
  {
    id: 1,
    name: "Metallica Concert",
    location: "Palace Grounds",
    entryType: "paid",
    entryFee: 10,
    image: "https://picsum.photos/200",
  },
  {
    id: 2,
    name: "Saree Exhibition",
    location: "Malleswaram Grounds",
    entryType: "free",
    image: "https://picsum.photos/200",
  },
  {
    id: 3,
    name: "Wine Tasting Event",
    location: "Links Brewery",
    entryType: "paid",
    entryFee: 10,
    image: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Food Festival",
    location: "City Center",
    entryType: "free",
    image: "https://picsum.photos/200",
  },
  {
    id: 5,
    name: "Art Exhibition",
    location: "Art Gallery",
    entryType: "free",
    image: "https://picsum.photos/200",
  },
  {
    id: 6,
    name: "Fashion Show",
    location: "Convention Center",
    entryType: "paid",
    entryFee: 15,
    image: "https://picsum.photos/200",
  },
  {
    id: 7,
    name: "Tech Conference",
    location: "Tech Park",
    entryType: "paid",
    entryFee: 20,
    image: "https://picsum.photos/200",
  },
  {
    id: 8,
    name: "Film Festival",
    location: "Cinema Plaza",
    entryType: "paid",
    entryFee: 12,
    image: "https://picsum.photos/200",
  },
  {
    id: 9,
    name: "Yoga Retreat",
    location: "Mountain Resort",
    entryType: "paid",
    entryFee: 30,
    image: "https://picsum.photos/200",
  },
  {
    id: 10,
    name: "Live Comedy Show",
    location: "Comedy Club",
    entryType: "paid",
    entryFee: 15,
    image: "https://picsum.photos/200",
  },
];

export default function EventsContainer({
  navigation,
}: RootStackScreenProps<"Events">) {
  const [isListView, setIsListView] = useState(true);
  const [flatListKey, setFlatListKey] = useState("listView");

  const onListViewChange = () => {
    setIsListView((prevView) => !prevView);
    setFlatListKey((prevKey) =>
      prevKey === "listView" ? "gridView" : "listView"
    );
  };
  const onListItemPress = (event: EventData) =>
    navigation.navigate("EventDetails", { event });

  return (
    <Home
      {...{
        eventsData,
        isListView,
        onListItemPress,
        onListViewChange,
        flatListKey,
      }}
    />
  );
}
