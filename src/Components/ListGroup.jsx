import React, { useContext } from 'react'
import ListItem from './ListItem';
import GlobalContext from '../Context/GlobalContext';

function ListGroup() {
    const {todos}=useContext(GlobalContext)
  return (
    <ul className="list-group mt-5 container">
        {
            todos.map(item=> <ListItem key={item.id} item={item}/>)
        }
    </ul>
  );
}

export default ListGroup