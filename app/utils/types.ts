import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { EventData } from "@screens/Events/utils";

export type RootStackParamList = {
  Auth: undefined;
  Events: undefined;
  EventDetails: { event: EventData };
  UserEvents: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;
