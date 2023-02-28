
import { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
const GlobalContext =createContext()
export const GlobalProvider =({children}) =>{
    const initialState = {
        todos:[],
        edit:{
            todo:{},
            isEdit:false,
        }
     }
    const [state,dispatch]=useReducer(GlobalReducer,initialState)

    //Savetodo
    const save=(text)=>{
        const newText={
            id:crypto.randomUUID(),
            text,
        }
       dispatch({
        type:"SAVE",
        payload:newText,
       })
    };

    //delete
    const deleteTodo= (id)=> {
        console.log(id)
        dispatch({
            type:"DELETE",
            payload:id
        })
    };
    
    // editTodo
    const editTodo=(todo)=>{
        dispatch({
            type:'EDIT',
            payload:todo
        })
    }

    //update
    const update=(id,text)=>{
        dispatch({
            type:'UPDATE',
            payload: {id,text},
        })
    }
    return(
        <GlobalContext.Provider value={{
            todos: state.todos,
            edit: state.edit,
            save,
            deleteTodo,
            editTodo,
            update,
             }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContext;   
