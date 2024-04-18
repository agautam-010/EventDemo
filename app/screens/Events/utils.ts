export interface EventData {
  id: number;
  name: string;
  location: string;
  entryType: "free" | "paid";
  entryFee?: number;
  image: string;
}

export interface IProp {
  eventsData: EventData[];
  isListView: boolean;
  onListItemPress: (event: EventData) => void;
  onListViewChange: () => void;
  flatListKey: string;
}
