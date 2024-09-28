import React, { useState } from 'react';
import RecipeFetcher from './components/RecipeFetcher';
import Favorites from './components/Favorites';
import RecipeDetails from './components/RecipeDetails';
import { loadFavorites, saveFavorites } from './utils/localStorageUtils';
import './styles/App.css';

function App() {
    const [favorites, setFavorites] = useState(loadFavorites());
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const addToFavorites = (recipe) => {
        const updatedFavorites = [...favorites, recipe];
        setFavorites(updatedFavorites);
        saveFavorites(updatedFavorites);
    };

    const removeFromFavorites = (recipeToRemove) => {
        const updatedFavorites = favorites.filter(recipe => recipe.id !== recipeToRemove.id);
        setFavorites(updatedFavorites);
        saveFavorites(updatedFavorites);
    };

    const handleSelectRecipe = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <div className="flex-grow">
                <RecipeFetcher
                    onFavorite={addToFavorites}
                    favorites={favorites} // Pass the favorites array
                />
                
                {selectedRecipe && (
                    <RecipeDetails recipe={selectedRecipe} />
                )}
            </div>

            <Favorites
                favorites={favorites}
                onSelectRecipe={handleSelectRecipe}
                onRemoveFromFavorites={removeFromFavorites} // Pass the remove function
            />
        </div>
    );
}

export default App;
