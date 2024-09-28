import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '580e029754ea4445846f4c514a2f4657';

const RecipeFetcher = ({ onFavorite, favorites }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=10`
      );
      setRecipes(response.data.results);
    } catch (err) {
      setError('Failed to fetch recipes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecipeDetails = async (id) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      setSelectedRecipe(response.data);
    } catch (err) {
      setError('Failed to fetch recipe details');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchRecipes(searchTerm);
    } else {
      alert('Please enter a search term.');
    }
  };

  const handleViewRecipe = (recipeId) => {
    fetchRecipeDetails(recipeId);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Recipe Suggestions</h2>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full max-w-lg"
        />
        <button
          onClick={handleSearch}
          className="ml-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => {
          const isFavorited = favorites.some((fav) => fav.id === recipe.id);

          return (
            <div
              key={recipe.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {recipe.title}
                </h3>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => handleViewRecipe(recipe.id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  >
                    View Recipe
                  </button>
                  <button
                    onClick={() => {
                      if (!isFavorited) {
                        onFavorite(recipe);
                      }
                    }}
                    className={`px-4 py-2 rounded ${
                      isFavorited
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-yellow-500 hover:bg-yellow-600'
                    } text-white transition duration-300`}
                    disabled={isFavorited}
                  >
                    {isFavorited ? 'Added' : 'Add to Favorites'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedRecipe && (
        <div className="mt-8 p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold mb-4">{selectedRecipe.title}</h3>
          <img
            src={selectedRecipe.image}
            alt={selectedRecipe.title}
            className="w-full h-72 object-cover mb-4 rounded-lg"
          />
          <h4 className="font-semibold text-lg">Ingredients:</h4>
          <ul className="list-disc pl-5 mb-4">
            {selectedRecipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          <h4 className="font-semibold text-lg">Instructions:</h4>
          <p>{selectedRecipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeFetcher;
