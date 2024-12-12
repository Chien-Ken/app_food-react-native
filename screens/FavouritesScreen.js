import { Text, StyleSheet, View } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { useContext } from 'react';
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';

function FavoritesScreen() {
 const FavouriteMealCtx =  useContext(FavouritesContext);
 const FavourteMeal = MEALS.filter(meal => FavouriteMealCtx.ids.includes(meal.id) )
  
 if(FavourteMeal.length === 0) {
  return <View style = {styles.container}>
      <Text style = {styles.text}>
        No favourite meal found
      </Text>
  </View>
 }

  return <MealsList items={FavourteMeal}/>
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  }
}
)

export default FavoritesScreen;

