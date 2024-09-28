const RecipeCard = ({ recipe, onFavorite, isFavorite, onSelect }) => {
    return (
        <div className="bg-white dark:bg-dark-background rounded-lg shadow-lg transition-transform transform hover:scale-105" onClick={() => onSelect(recipe)}>
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 rounded-t-lg object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-dark-text">{recipe.title}</h2>
                <p className="text-gray-600 dark:text-dark-muted">{recipe.description}</p>
                <button
                    onClick={(e) => { e.stopPropagation(); onFavorite(recipe); }}
                    className={`mt-2 w-full py-2 rounded-lg transition duration-200 ${
                        isFavorite ? 'bg-red-500 text-white' : 'bg-primary text-white'
                    }`}
                >
                    {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;
