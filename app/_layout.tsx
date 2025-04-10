import tamaguiConfig from '@/tamagui.config';

import { Stack } from "expo-router";
import { TamaguiProvider } from "tamagui";

export default function Layout() {
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="light">
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            title: "Home"
          }}
        />
      </Stack>
    </TamaguiProvider>
  );
}