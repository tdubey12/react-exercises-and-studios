import React from 'react';
import classes from './ChoresList.module.css';
export default function ChoresList () {
   const chores = ["Cook Food", "Mop The Floor", "Load The Dishwasher"];
   return (
   <div>
      <h3 className = {classes.choresHeading}>Today's chores</h3>
      <ol>
         <li className={classes.choresText}>{chores[0]}</li>
         <li className={classes.choresText}>{chores[1]}</li>
         <li className={classes.choresText}>{chores[2]}</li>
      </ol>
   </div>
   );
}
