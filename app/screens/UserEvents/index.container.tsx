import React from "react";
import { useDispatch, useSelector } from "react-redux";

import UserEvent from ".";
import { EventData } from "../Events/utils";
import { eventsData } from "@screens/Events/index.container";
import { AppState } from "../../redux/app.reducers";
import { markEvents } from "@utils/functions";
import { DragEndParams } from "react-native-draggable-flatlist";
import { setUserEvent } from "../../redux/app.actions";
import { RootStackScreenProps } from "@utils/types";

export default function UserEventsContainer({
  navigation,
}: RootStackScreenProps<"UserEvents">) {
  const dispatch = useDispatch();
  const userEventsIds =
    useSelector(
      ({ App }: { App: AppState }) =>
        App.users.find((user) => user.id === App.user?.id)?.events
    ) || [];

  const filteredEvents = userEventsIds.map((id) =>
    eventsData.find((event) => event.id === id)
  );
  const onListItemPress = (type: string, item: EventData) => {
    if (type === "untrack") markEvents(userEventsIds, item, true);
    else navigation.navigate("EventDetails", { event: item });
  };

  const onReordered = (dragEvent: DragEndParams<EventData>) => {
    const userEvtIds = dragEvent.data.map((item) => item.id);
    dispatch(setUserEvent(userEvtIds));
  };

  return (
    <UserEvent
      {...{
        eventsData: filteredEvents as EventData[],
        onListItemPress,
        onReordered,
      }}
    />
  );
}
