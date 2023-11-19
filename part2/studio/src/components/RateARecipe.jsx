let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(rating) {
  function GiveRating() {
    return ( {rating >=1 && rating<=5 }<h3>{?stars[rating - 1] : null} </h3>;)
  }
  return stars;


export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
