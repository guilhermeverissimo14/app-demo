import React from 'react';
import { Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faFile, faHome, faMessage } from '@fortawesome/free-solid-svg-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Service } from '@/screens/serviceScreen';
import { Home } from '@/screens/home';
import { Schedules } from '@/screens/schedules';
import { NavigationContainer } from '@react-navigation/native';
import { Notification } from '@/screens/notification';
import { Messages } from '@/screens/messages';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export type RootStackParamList = {
    Home: undefined;
    Schedules: undefined;
    Service: any;
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
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#ffffff",
                    borderTopWidth: 0,
                    height: Platform.OS === 'ios' ? 85 : 70,
                    paddingBottom: Platform.OS === 'ios' ? 20 : 10,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = faHome;
                    } else if (route.name === 'Schedules') {
                        iconName = faFile;
                    } else if (route.name === 'notification') {
                        iconName = faBell;
                    } else if (route.name === 'message') {
                        iconName = faMessage;
                    }

                    return <FontAwesomeIcon icon={iconName as any} size={24} color={focused ? "#6759FF" : "#535763"} />
                },
            })}

            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Schedules" component={Schedules} />
            <Tab.Screen name="notification" component={Notification} />
            <Tab.Screen name="message" component={Messages} />

        </Tab.Navigator>
    )
}

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomTabs'>
                <Stack.Screen name="BottomTabs" component={BottomTabs} />
                <Stack.Screen name="Service" component={Service} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
