import {Stack} from "expo-router";
import React from "react";
import {ROUTES} from "@constants/app-router";

export default function AuthLayout() {
    return (
        <Stack>
            <Stack.Screen name={ROUTES.AUTH.SIGN_IN} options={{title: "Вхід в систему", headerTitleAlign: 'center'}}/>
            <Stack.Screen name={ROUTES.AUTH.SIGN_UP} options={{title: "Реєстрація", headerTitleAlign: 'center'}}/>
        </Stack>
    );
}
