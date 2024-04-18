import React, { useRef } from "react";
import {
  GestureEvent,
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from "react-native-gesture-handler";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Authenticate from "@screens/Auth/index.container";
import EventsContainer from "@screens/Events/index.container";
import EventDetailsContainer from "@screens/EventDetails/index.container";
import UserEventsContainer from "@screens/UserEvents/index.container";

import { persistor, store } from "./redux/store";
import { Platform, UIManager, View } from "react-native";
import { RootStackParamList } from "@utils/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  const drawerRef = createNavigationContainerRef() as any;
  const goBackRef = useRef(true);

  const handleGestureEvent = (event: GestureEvent) => {
    const { nativeEvent } = event;
    if (
      nativeEvent.state === State.ACTIVE &&
      drawerRef?.isReady() &&
      drawerRef?.current?.getCurrentRoute()?.name !== "Auth"
    ) {
      if ((nativeEvent.translationX as number) < -50) {
        goBackRef.current = true;
        drawerRef?.current?.navigate("UserEvents");
      } else return;
    } else return;
  };

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <PanGestureHandler onGestureEvent={handleGestureEvent} enabled={true}>
            <View style={{ flex: 1 }}>
              <NavigationContainer ref={drawerRef}>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Auth"
                    component={Authenticate}
                    options={{ headerShown: false, gestureEnabled: false }}
                  />
                  <Stack.Screen
                    name="Events"
                    component={EventsContainer}
                    options={{ headerShown: false, gestureEnabled: false }}
                  />
                  <Stack.Screen
                    name="EventDetails"
                    component={EventDetailsContainer}
                    options={{
                      headerTitle: "Event Details",
                      gestureEnabled: false,
                    }}
                  />
                  <Stack.Screen
                    name="UserEvents"
                    component={UserEventsContainer}
                    options={{
                      headerTitle: "Your Events",
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </PersistGate>
    </ReduxProvider>
  );
}
