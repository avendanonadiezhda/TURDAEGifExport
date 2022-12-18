import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
    
const [inputValue,setInputValue] =  useState('');

const onInputValue = ({target}) =>{
    setInputValue(target.value)
}

const onSubmit = (event) =>{
    event.preventDefault();

    const inputValue_trim = inputValue.trim();
    if(inputValue_trim.length<=1) return;

    onNewCategory(inputValue_trim);
    setInputValue('');
}

  return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputValue}
        />
    </form>
  )
}
