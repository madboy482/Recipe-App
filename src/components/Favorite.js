import React from 'react';
import RecipeCard from './RecipeCard';

const Favorites = ({ favorites, onSelectRecipe, onRemoveFromFavorites }) => {
    return (
        <div className="bg-gray-100 dark:bg-dark-background p-4 rounded-lg shadow-lg mt-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-4">
                Your Favorites
            </h2>
            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favorites.map((recipe) => (
                        <div key={recipe.id} className="relative">
                            <RecipeCard 
                                recipe={recipe} 
                                onFavorite={onRemoveFromFavorites} 
                                isFavorite={true} 
                                onSelect={onSelectRecipe} 
                            />
                            <button
                                onClick={() => onRemoveFromFavorites(recipe)}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition duration-200"
                                title="Remove from Favorites"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 dark:text-dark-muted text-center">
                    No favorites yet! Add some delicious recipes to your favorites.
                </p>
            )}
        </div>
    );
};

export default Favorites;
