import React, { useState } from 'react';
import RecipeFetcher from './components/RecipeFetcher';
import Favorites from './components/Favorites';
import RecipeModal from './components/RecipeModal';
import { loadFavorites, saveFavorites } from './utils/localStorageUtils';
import './styles/App.css';

function App() {
    const [favorites, setFavorites] = useState(loadFavorites());
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRecipe(null);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 ">
            <div className="flex-grow">
                <RecipeFetcher
                    onFavorite={addToFavorites}
                    favorites={favorites}
                    onSelectRecipe={handleSelectRecipe}
                />
            </div>

            <Favorites
                favorites={favorites}
                onSelectRecipe={handleSelectRecipe}
                onRemoveFromFavorites={removeFromFavorites}
            />

            <RecipeModal 
                recipe={selectedRecipe} 
                isOpen={isModalOpen} 
                onClose={closeModal} 
            />
        </div>
    );
}

export default App;
