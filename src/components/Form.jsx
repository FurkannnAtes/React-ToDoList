import React from 'react'
import { useState } from 'react';

function Form({inputText,setInputText,todos,setTodos,setStatus}) {
    
    const [alertWarning,setAlertWarning] = useState(false);
    const [alertSuccess,setAlertSuccess] = useState(false);



    function inputTextHandler (e) {
        setInputText(e.target.value)

    }

    function handleSubmit (e){
            e.preventDefault();
            const isEmpty = str => !str.trim().length;
            if(isEmpty(inputText)){
                setAlertWarning(true);
                setTimeout(()=>{
                    setAlertWarning(false);
                },1000)
                
            }else{
               
                setTodos([
                    ...todos,
                    {text: inputText,completed: false , id: Math.random()}
                ]);
                setAlertSuccess(true);
                setTimeout(()=>{
                    setAlertSuccess(false);
                },1000);
            }
            
            setInputText("")
    }
    function statusHandler (e){
        setStatus(e.target.value)

    }
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search">
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Add..."/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-circle"></i>
            </button>
        </div>

        <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        <div className="alert-wrapper">
            {alertWarning ? <div className="alert-warning">
            <div>Input alanı boş geçilemez!</div>
        </div> : null}
        {alertSuccess ?  <div className="alert-success">
            <div>Ekleme Başarılı.</div>
        </div> :null}
       
        
    </div>
    </form>
    </div>
  )
}
export default Form;