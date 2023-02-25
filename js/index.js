
const loadMeals = async (searchMeal) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
        const data = await response.json();
        displayMeals(data.meals);
    }
    catch (error) {
        console.log(error)
    }
}

const displayMeals = meals => {
    // 1. Where to add : get the parent element
    meals.forEach(meal => {
        console.log(meal)
        // 2. What to add : create child
        const mealDiv = document.createElement("div")
        mealDiv.classList.add("");
        // 3. Set innerHtml 
        mealDiv.innerHTML = `
        
        `
        // 4. Append Child to the parent element
    })
}


const searchItem = () => {
    const searchValue = document.getElementById("searchItem").value;
    loadMeals(searchValue);
}
loadMeals("fish")

