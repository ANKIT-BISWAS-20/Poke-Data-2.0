import React,{useState,useEffect} from 'react'
import axios from 'axios'

function TinyCard({id}) {
    const [name,Setname] = useState('')
    const [type,Settype] = useState('')
    const [img,Setimg] = useState('')
    const [color,Setcolor] = useState('')

    const colorMap = {
        normal: 'bg-gray-300',
        fire: 'bg-red-300',
        water: 'bg-blue-300',
        electric: 'bg-yellow-200',
        grass: 'bg-green-300',
        ice: 'bg-blue-100',
        fighting: 'bg-red-800',
        poison: 'bg-purple-300',
        ground: 'bg-yellow-800',
        flying: 'bg-blue-200',
        psychic: 'bg-pink-300',
        bug: 'bg-green-800',
        rock: 'bg-gray-800',
        ghost: 'bg-indigo-300',
        dragon: 'bg-indigo-800',
        dark: 'bg-gray-800',
        steel: 'bg-gray-400',
        fairy: 'bg-pink-100'
    }
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                const data = response.data;
                Setname(data.name);
                Settype(data.types[0].type.name);
                Setimg(data.sprites.other.dream_world.front_default);
                Setcolor(data.types[0].type.name);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id])
  return (
    <div className={`max-w-xs min-w-60 h-80 shadow-lg rounded-lg hidden lg:block opacity-50 ${colorMap[color]}`}>
            <div className='flex justify-center items-center'>
                <img 
                    src={img} 
                    className='h-[190px] w-full max-w-60 ' 
                    alt="Card Image"
                />
            </div>
            <div className='p-4  bg-amber-300'>
                <p className='font-bold text-lg text-gray-700 mb-2'>ID: <span className='font-normal'>{id}</span></p>
                <p className='font-bold text-lg text-gray-700 mb-2'>Name: <span className='font-normal'>{name}</span></p>
                <p className='font-bold text-lg text-gray-700'>Type: <span className='font-normal'>{type}</span></p>
            </div>
        </div>
  )
}

export default TinyCard