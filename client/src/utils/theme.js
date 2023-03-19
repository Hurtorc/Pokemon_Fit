// create a function that changes the theme based on what pokemon is selected
const changeTheme = (pokemon) => {
    // get the pokemon name and convert it to lowercase
    const pokemonName = pokemon.toLowerCase();
    // get the theme object
    const theme = themes[pokemonName];
    // get the root element
    const root = document.documentElement;
    // set the root element's css variables to the theme object's values
    root.style.setProperty('--background-color', theme.backgroundColor);
    root.style.setProperty('--text-color', theme.textColor);
    root.style.setProperty('--accent-color', theme.accentColor);
    }
    

export default changeTheme;
