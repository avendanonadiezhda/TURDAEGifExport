import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

const {images,isLoading} = useFetchGifs(category);
  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && <p>Cargado...</p>
        }
        <ol>
            {
                images.map((image)=>( 
                    <GifItem 
                    key={image.id}
                    {...image}

                    />
                 ))
            }
        </ol>
    </>
  )
}
