import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/pages/Home/HomeScreen';
import CategoriesScreen from './src/pages/Categories/CategoriesScreen';
import CartScreen from './src/pages/Cart/CartScreen';
import FavoritesScreen from './src/pages/Favorites/FavoritesScreen';
import MoreScreen from './src/pages/More/MoreScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const iconColorActive = '#ED1C24';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          tabBarActiveTintColor: iconColorActive,
          headerStatusBarHeight: StatusBar.currentHeight
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerShown:false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            )
          }} 
        />
        <Tab.Screen name="Categorias" component={CategoriesScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen name="Carrinho" component={CartScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name="shoppingcart" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen name="Favoritos" component={FavoritesScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesignIcon name="hearto" color={color} size={size} />
            ),
          }} 
        />
        <Tab.Screen name="More" component={MoreScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ellipsis-horizontal-outline" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconActive: {
    color: '#ED1C24'
  }
})