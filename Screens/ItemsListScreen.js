import React from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useCartFavorites } from '../Context/CartFavoritesContext';

const bookData = [
  {
    id: '1',
    title: '1984',
    author: 'George Orwell',
    price: '$15.00',
    cover: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
  },
  {
    id: '2',
    title: 'American Psycho',
    author: 'Bret Easton Ellis',
    price: '$12.00',
    cover: 'https://i.imgur.com/yZKwgMZ.jpg',
  },
  {
    id: '3',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    price: '$14.00',
    cover: 'https://i.imgur.com/W5JskDA.jpg',
  },
  {
    id: '4',
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    price: '$13.00',
    cover: 'https://i.imgur.com/p8H0bog.jpg',
  },
  {
    id: '5',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    price: '$16.00',
    cover: 'https://i.imgur.com/Cu6Cpuk.jpg',
  },
  {
    id: '6',
    title: 'The Shining',
    author: 'Stephen King',
    price: '$18.00',
    cover: 'https://i.imgur.com/slNMvEC.jpg',
  },
  {
    id: '7',
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    price: '$20.00',
    cover: 'https://i.imgur.com/0fWzfYF.jpg',
  },
  {
    id: '8',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: '$17.00',
    cover: 'https://i.imgur.com/1gpK5vF.jpg',
  },
  {
    id: '9',
    title: 'Sharp Objects',
    author: 'Gillian Flynn',
    price: '$13.00',
    cover: 'https://i.imgur.com/fc0r6ux.jpg',
  },
  {
    id: '10',
    title: 'Pet Sematary',
    author: 'Stephen King',
    price: '$15.00',
    cover: 'https://i.imgur.com/vHhxz4H.jpg',
  },
];

export default function ItemsListScreen({ navigation }) {
  const { addToCart, addToFavorites } = useCartFavorites();

  const handleAddToCart = (book) => {
    addToCart(book);
    Alert.alert('Added to Cart', `${book.title} has been added to your cart.`);
  };

  const handleAddToFavorite = (book) => {
    addToFavorites(book);
    Alert.alert('Added to Favorites', `${book.title} has been added to your favorites.`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.cover }} style={styles.coverImage} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>by {item.author}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Button title="Add to Favourite" onPress={() => handleAddToFavorite(item)} />
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/yhK0qil.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <FlatList
          data={bookData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
  },
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
  },
  coverImage: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
});
