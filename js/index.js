const loadMeals = async (searchMeal) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`);
        const data = await response.json();
        limitDisplayMeals(data.meals);
    }
    catch (error) {
        console.log(error)
    }
}

const limitDisplayMeals = meals =>{
    const limitedMeals = meals.slice(0,6);
    displayMeals(limitedMeals)

    document.getElementById("show-all-btn").addEventListener("click", function(){
        displayMeals(meals);
    })
}

const displayMeals = meals => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    meals.forEach(meal => {
        const mealDiv = document.createElement("div")
        mealDiv.classList.add("card", "md:card-side", "bg-base-100", "border");
        mealDiv.innerHTML = `
            <figure class="md:w-2/5"><img class="w-full md:h-72" src="${meal.strMealThumb}" alt="Album" /></figure>
            <div class="card-body md:w-3/5">
                <h2 class="card-title">${meal.strMeal}</h2>
                <p>${meal.strTags}</p>
                <div class="card-actions">
                    <button href="" onclick="loadModalData(${meal.idMeal})" class="text-yellow-400 font-bold underline underline-offset-4 "><label for="my-modal" class="cursor-pointer">View Details</label></button>
                </div>
            </div>
        `
        cardContainer.appendChild(mealDiv);
    })
}

const loadModalData = async(idMeal) =>{
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        setModalData(data.meals);
    }
    catch (error) {
        console.log(error)
    }
}

const setModalData = meal =>{
    console.log(meal[0]);
    document.getElementById("meal-title").innerText = meal[0].strMeal;
    document.getElementById("meal-img").setAttribute("src", `${meal[0].strMealThumb}`);
    document.getElementById("meal-catagory").innerText = meal[0].strCategory;
    document.getElementById("meal-area").innerText = meal[0].strArea;
    document.getElementById("meal-instruction").innerText = meal[0].strInstructions;
    document.getElementById("meal-tutorial").setAttribute("href", `${meal[0].strYoutube}`);
}

const searchItem = () => {
    const searchValue = document.getElementById("searchItem").value;
    loadMeals(searchValue);
}
loadMeals("fish")

