import { Tabs } from "expo-router";
import { Play, User } from "lucide-react-native";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <Play color="black" />
          ),
          tabBarShowLabel: false,
          title: "Home"
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <User color="black" />
          ),
          tabBarShowLabel: false,
          title: "Profile"
        }}
      />
    </Tabs>
  );
}