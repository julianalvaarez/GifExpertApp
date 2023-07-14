import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  function onInputChange(e) {
    setInputValue(e.target.value)
  } 

  function onSubmitForm(e) {
    e.preventDefault()
    if (inputValue.trim().length <= 1 ) return
    
    //* Hace un callback de categories para copiar el array anterior
    onNewCategory(inputValue.trim())
    setInputValue('')
  }
  
  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={inputValue} onChange={onInputChange} placeholder="Buscar categoria"/>
      </form>

    </div>
  )
}
