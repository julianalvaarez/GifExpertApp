import  GiftCard  from "./GiftCard"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = (  {category} ) => {

    const {images, isLoading} = useFetchGifs(category)
    
  return (
    <>
      {isLoading && <h2>Cargando...</h2>}
      <h3>{category}</h3>
      <div className="card-grid">
          {images.map((image) => <GiftCard key={image.id} category={category} {...image}/>)}
      </div>
    </>
  )
}
