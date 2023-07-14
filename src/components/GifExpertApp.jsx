import { useState } from "react"
import { AddCategory } from "./AddCategory"
import { GifGrid } from "./GifGrid"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (NewCategory) => {

        if (categories.includes(NewCategory)) return 

        console.log(NewCategory);
        setCategories([NewCategory,...categories])
    }

  return (
    <>
        <h1>Buscador de Gifs</h1>

        <AddCategory onNewCategory={onAddCategory} />

        {categories.map(category => (
            <GifGrid key={category} category={category}/> 
        ))}
 
    </>
  )
}
