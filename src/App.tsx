import { FC } from 'react';

import './style.css';
import {useState} from 'react';
import Button from './../components/Button.jsx';

export const App: FC<{ name: string }> = ({ name }) => {
  const myTitle='ReactDemo v1.01';
  const [displayList,setDisplayList]=useState(false);
  const courseList=[
  {lecture:'lecture-1', name:'Intro'},
  {lecture:'lecture-2', name:'React Basics'},
  {lecture:'lecture-3', name:'React App'}];
  
  function handleDisplayList(){
    setDisplayList(true);
  }
  
  return (
    <div>
      <h1 className="title">{myTitle}</h1>
      <p>Start editing to see some magic happen :)</p>
      {/*<button onClick={()=>handleDisplayList()}>Click me</button>*/}
      <Button handleClick={()=>handleDisplayList()}/> 
      <ul>
      {displayList && courseList.map((listItem)=>(
      <li>
        {listItem.lecture}:{listItem.name}
        </li>
        ))}
      </ul>
    </div>

  );
};
