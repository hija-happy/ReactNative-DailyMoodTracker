    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
    import React from 'react'
    import HomeScreen from '../screens/HomeScreen';
    import Settings from '../screens/Settings';
import HistoryScreen from '../screens/HistoryScreen';
import MoodScreen from '../screens/MoodScreen';

    const Tab = createBottomTabNavigator();

    export default function MainTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Add Mood" component={MoodScreen} />
            <Tab.Screen name="History" component={HistoryScreen} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
    }
