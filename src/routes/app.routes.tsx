import React from 'react';
import { Platform } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Service } from '@/screens/service';
import { Services } from '@/screens/services';
import { SchedulesEmpty } from '@/screens/schedulesEmpty';
import { Schedules } from '@/screens/schedules';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '@/theme/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export type RootStackParamList = {
    Home: undefined;
    Schedules: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}


const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.colors.white,
                    borderTopWidth: 0,
                    height: Platform.OS === 'ios' ? 85 : 70,
                    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
                },
                tabBarIcon: (color) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = "home"
                    } else if (route.name === 'Schedules') {
                        iconName = "event"
                    }

                    return <Icon name={iconName as any} size={32} color={theme.colors.primary} />
                },
            })}

            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={Services} />
            <Tab.Screen name="Schedules" component={Schedules} />
            {/* <Tab.Screen name="notification" component={() => null} />
            <Tab.Screen name="message" component={() => null} /> */}

        </Tab.Navigator>
    )
}

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomTabs'>
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="Service" component={Service} />
                <Stack.Screen name="schedulesEmpty" component={SchedulesEmpty} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
