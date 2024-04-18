import { Alert } from "react-native";

import { EventData } from "@screens/Events/utils";
import { store } from "../redux/store";
import { setUserEvent } from "../redux/app.actions";

export const markEvents = (
  userEvent: number[],
  event: EventData,
  isTrackedAlready: boolean
) => {
  const events = userEvent?.length ? [...userEvent] : [];
  if (isTrackedAlready) {
    let index = events.indexOf(event.id);
    if (index !== -1) events.splice(index, 1);
  } else events.push(event.id);
  store.dispatch(setUserEvent(events));
  Alert.alert(
    "Success",
    `${event.name} is ${
      isTrackedAlready ? "removed from" : "added to"
    } track list`
  );
};
