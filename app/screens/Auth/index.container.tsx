import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
export type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppState } from "../../redux/app.reducers";
import { setUsersInfo, setAuthUser } from "../../redux/app.actions";
import { RootStackScreenProps } from "@utils/types";

export default function Authenticate({
  navigation,
}: RootStackScreenProps<"Auth">) {
  const dispatch = useDispatch();
  const users = useSelector(({ App }: { App: AppState }) => App.users);
  const [username, setUsername] = React.useState("");

  const onSubmit = async () => {
    if (username) {
      const user = users.find((user) => user.name === username.toLowerCase());
      const newUser = {
        id: users.length + 1,
        name: username.toLowerCase(),
        events: [],
      };
      if (!user) dispatch(setUsersInfo(newUser));
      dispatch(setAuthUser(user || newUser));
      navigation.navigate("Events");
      setUsername("");
    } else Alert.alert("Invalid", "Fill you name first!");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          paddingHorizontal: 20,
          width: "100%",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Enter your name"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={{
            borderWidth: 1,
            padding: 10,
            width: "100%",
            height: 50,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity
          onPress={onSubmit}
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "blue",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#fff" }}>Submit</Text>
        </TouchableOpacity>
        <Text style={{ color: "grey", marginTop: 10 }}>
          Login to access your tracking.
        </Text>
      </View>
    </SafeAreaView>
  );
}
