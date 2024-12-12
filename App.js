import { StatusBar } from 'expo-status-bar';
import { StyleSheet , View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import FavoritesScreen from './screens/FavouritesScreen';
import MealsListScreen from './screens/MealsListScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesContextProvider from './store/context/favourites-context';
import { Colors } from './constant/Colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabNavigator (){
  return (
   <Tab.Navigator 
   initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        labelStyle={{ fontSize: 12 }}
        screenOptions={{ 
          headerStyle: { backgroundColor: 'black'}, // Moved inside the object
          tabBarStyle: { backgroundColor: 'black' },        
        }}
   >
    <Tab.Screen name="Category" component={CategoriesScreen}
       options={{       
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>                   
            <Text style={styles.headerTitleText2}>Category Screen</Text>          
          </View>
        ),
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        headerRight: () => <MaterialCommunityIcons name = 'view-grid' color= 'white' size={26} style={{ paddingRight: 10 }} />,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      
      />
      <Tab.Screen name="Favourite" component={FavoritesScreen}
       options={{
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        tabBarStyle: {
          backgroundColor: '#f4511e', // Background color of the tab bar
          borderTopWidth: 1, // Top border width of the tab bar
          borderTopColor: '#CCCCCC', // Top border color of the tab bar
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>                    
            <Text style={styles.headerTitleText2}>Favourite Screen</Text>          
          </View>
        ),
        headerRight: () => <MaterialCommunityIcons name = 'heart' color= 'white' size={26} style={{ paddingRight: 10 }} />,
        tabBarLabel: 'Favourite',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" color={color} size={26} />
        ),
      }}
      />


   </Tab.Navigator>
  )
}


export default function App(){
  return (
    <>
     <StatusBar style="light" />
     <FavouritesContextProvider>   
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' },
        }}
      >
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="MealsListview" component={MealsListScreen} />
        <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the Meal',
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </FavouritesContextProvider>
    </>
    
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitleText: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white', // Adjust the color according to your preference
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleText2: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  }
});


