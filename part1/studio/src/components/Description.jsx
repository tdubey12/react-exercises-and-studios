import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor(){
   let authorLink="https://sugarspunrun.com/best-cheesecake-recipe/";
   let authorPhoto="https://sugarspunrun.com/wp-content/uploads/2019/03/sugar-spun-run-1-of-1-2.jpg";
   let authorName="Sam";
   return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Cheesecake</a> 
       </div>
    </div>
 );

}
class RecipeDescription extends React.Component{
    render(){
        <div> 
   <div>
      <h1>Recipe Title</h1>
      <p>Short recipe description</p>
   </div>
   <RecipeAuthor />
</div>
    }

}
export default RecipeDescription;