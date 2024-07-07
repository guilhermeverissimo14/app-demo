import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { Service } from '../screens/service';
import { Schedule } from '../screens/schedule';
import { Services } from '../screens/services';
import { SchedulesEmpty } from '../screens/schedulesEmpty';
import { Schedules } from '../screens/schedules';

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Tab.Screen name="Services" component={Services} />
                <Tab.Screen name="Service" component={Service} />
                <Tab.Screen name="schedule" component={Schedule} />
                <Tab.Screen name="schedulesEmpty" component={SchedulesEmpty} />
                <Tab.Screen name="schedules" component={Schedules} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
