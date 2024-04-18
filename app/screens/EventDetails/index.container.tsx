import * as React from "react";
import { useSelector } from "react-redux";

import EventDetails from ".";
import { AppState } from "../../redux/app.reducers";
import { markEvents } from "@utils/functions";
import { RootStackScreenProps } from "@utils/types";

export default function EventDetailsContainer({
  route,
}: RootStackScreenProps<"EventDetails">) {
  const { event } = route.params;
  const userEvent =
    useSelector(({ App }: { App: AppState }) =>
      App.users.find((user) => user.id === App.user?.id)
    )?.events || [];

  const isTrackedAlready = userEvent?.includes(event.id);

  const onTrackEventPress = () =>
    markEvents(userEvent, event, isTrackedAlready);

  return <EventDetails {...{ event, onTrackEventPress, isTrackedAlready }} />;
}
