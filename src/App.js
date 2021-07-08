
import './App.css';
import SearchPokemon from './components/SearchPokemon';
import PokemonItem from './components/PokemonItem';
import { useState, useEffect } from 'react';


function App() {

  const [data,setData] = useState(null)
  const [searchPokemon, setSearchPokemon] = useState("")
  const [tenPokemons, setTenPokemons] = useState([])  
  const [title, setTitle] = useState("")
  const [imgUrl, setImgUrl] = useState("")
  const [type, setType] = useState("")

  

  const [pokemonUrl, setPokemonUrl] = useState("")



  const [title2, setTitle2] = useState("")
  const [imgUrl2, setImgUrl2] = useState("")
  const [type2, setType2] = useState("")
  const [pokemonUrl2, setPokemonUrl2] = useState("")


  const [title3, setTitle3] = useState("")
  const [imgUrl3, setImgUrl3] = useState("")
  const [type3, setType3] = useState("")
  const [pokemonUrl3, setPokemonUrl3] = useState("")

  const [title4, setTitle4] = useState("")
  const [imgUrl4, setImgUrl4] = useState("")
  const [type4, setType4] = useState("")
  const [pokemonUrl4, setPokemonUrl4] = useState("")

  const [title5, setTitle5] = useState("")
  const [imgUrl5, setImgUrl5] = useState("")
  const [type5, setType5] = useState("")
  const [pokemonUrl5, setPokemonUrl5] = useState("")

  const [title6, setTitle6] = useState("")
  const [imgUrl6, setImgUrl6] = useState("")
  const [type6, setType6] = useState("")
  const [pokemonUrl6, setPokemonUrl6] = useState("")

  const [title7, setTitle7] = useState("")
  const [imgUrl7, setImgUrl7] = useState("")
  const [type7, setType7] = useState("")
  const [pokemonUrl7, setPokemonUrl7] = useState("")

  const [title8, setTitle8] = useState("")
  const [imgUrl8, setImgUrl8] = useState("")
  const [type8, setType8] = useState("")
  const [pokemonUrl8, setPokemonUrl8] = useState("")

  const [title9, setTitle9] = useState("")
  const [imgUrl9, setImgUrl9] = useState("")
  const [type9, setType9] = useState("")
  const [pokemonUrl9, setPokemonUrl9] = useState("")

  const [title10, setTitle10] = useState("")
  const [imgUrl10, setImgUrl10] = useState("")
  const [type10, setType10] = useState("")
  const [pokemonUrl10, setPokemonUrl10] = useState("")

  


  

  useEffect (()=>{
    if(searchPokemon){
      ;(async()=>{        
        let url = `https://pokeapi.co/api/v2/type/${encodeURI(searchPokemon)}`
        const response = await fetch(url).then(res => res.json())      
        setData(response)
        
      })()
    }
  },[searchPokemon])

  useEffect (()=>{
    if(data){      

      for(let i = 0; i <=9; i++){        
        const getPokemon = data.pokemon[i]        
        tenPokemons.push(getPokemon)        
      }       

      
      
      setPokemonUrl(tenPokemons[0].pokemon.url)
      setTitle(tenPokemons[0].pokemon.name)

      setPokemonUrl2(tenPokemons[1].pokemon.url)
      setTitle2(tenPokemons[1].pokemon.name)

      setPokemonUrl3(tenPokemons[2].pokemon.url)
      setTitle3(tenPokemons[2].pokemon.name)

      setPokemonUrl4(tenPokemons[3].pokemon.url)
      setTitle4(tenPokemons[3].pokemon.name)

      setPokemonUrl5(tenPokemons[4].pokemon.url)
      setTitle5(tenPokemons[4].pokemon.name)

      setPokemonUrl6(tenPokemons[5].pokemon.url)
      setTitle6(tenPokemons[5].pokemon.name)

      setPokemonUrl7(tenPokemons[6].pokemon.url)
      setTitle7(tenPokemons[6].pokemon.name)

      setPokemonUrl8(tenPokemons[7].pokemon.url)
      setTitle8(tenPokemons[7].pokemon.name)

      setPokemonUrl9(tenPokemons[8].pokemon.url)
      setTitle9(tenPokemons[8].pokemon.name)

      setPokemonUrl10(tenPokemons[9].pokemon.url)
      setTitle10(tenPokemons[9].pokemon.name)  
      
      
      
    }
  },[data,tenPokemons])



    useEffect (()=>{
      if(pokemonUrl){
        ;(async()=>{        
          let url = pokemonUrl
          const response2 = await fetch(url).then(res => res.json())                   
          setImgUrl(response2.sprites.front_default)          
          const textType = response2.types[0].type.name
          setType(textType)
        })()
        
      }
    },[pokemonUrl])


    useEffect (()=>{
      if(pokemonUrl2){
        ;(async()=>{        
          let url = pokemonUrl2
          const response3 = await fetch(url).then(res => res.json())         
          setImgUrl2(response3.sprites.front_default)         
          const textType2 = response3.types[0].type.name
          setType2(textType2)
        })()
        
      }
    },[pokemonUrl2])


    useEffect (()=>{
      if(pokemonUrl3){
        ;(async()=>{        
          let url = pokemonUrl3
          const response4 = await fetch(url).then(res => res.json())          
          setImgUrl3(response4.sprites.front_default)          
          const textType3 = response4.types[0].type.name
          setType3(textType3)
        })()
        
      }
    },[pokemonUrl3])

    useEffect (()=>{
      if(pokemonUrl4){
        ;(async()=>{        
          let url = pokemonUrl4
          const response5 = await fetch(url).then(res => res.json())         
          setImgUrl4(response5.sprites.front_default)          
          const textType4 = response5.types[0].type.name
          setType4(textType4)
        })()
        
      }
    },[pokemonUrl4])

    useEffect (()=>{
      if(pokemonUrl5){
        ;(async()=>{        
          let url = pokemonUrl5
          const response6 = await fetch(url).then(res => res.json())         
          setImgUrl5(response6.sprites.front_default)          
          const textType5 = response6.types[0].type.name
          setType5(textType5)
        })()
        
      }
    },[pokemonUrl5])

    useEffect (()=>{
      if(pokemonUrl6){
        ;(async()=>{        
          let url = pokemonUrl6
          const response7 = await fetch(url).then(res => res.json())          
          setImgUrl6(response7.sprites.front_default)          
          const textType6 = response7.types[0].type.name
          setType6(textType6)
        })()
        
      }
    },[pokemonUrl6])

    useEffect (()=>{
      if(pokemonUrl7){
        ;(async()=>{        
          let url = pokemonUrl7
          const response8 = await fetch(url).then(res => res.json())          
          setImgUrl7(response8.sprites.front_default)          
          const textType7 = response8.types[0].type.name
          setType7(textType7)
        })()
        
      }
    },[pokemonUrl7])

    useEffect (()=>{
      if(pokemonUrl8){
        ;(async()=>{        
          let url = pokemonUrl8
          const response9 = await fetch(url).then(res => res.json())          
          setImgUrl8(response9.sprites.front_default)          
          const textType8 = response9.types[0].type.name
          setType8(textType8)
        })()
        
      }
    },[pokemonUrl8])

    useEffect (()=>{
      if(pokemonUrl9){
        ;(async()=>{        
          let url = pokemonUrl9
          const response10 = await fetch(url).then(res => res.json())          
          setImgUrl9(response10.sprites.front_default)          
          const textType9 = response10.types[0].type.name
          setType9(textType9)
        })()
        
      }
    },[pokemonUrl9])

    useEffect (()=>{
      if(pokemonUrl10){
        ;(async()=>{        
          let url = pokemonUrl10
          const response11 = await fetch(url).then(res => res.json())          
          setImgUrl10(response11.sprites.front_default)          
          const textType10 = response11.types[0].type.name
          setType10(textType10)
        })()
        
      }
    },[pokemonUrl10])

    

    

  return (
    <div className="App">
      <header className="App-header">
        <SearchPokemon onSearch={setSearchPokemon} />
        <button onClick={() => setTenPokemons([])} >Clean</button>
        <PokemonItem
                      imgUrl = {imgUrl} title={title} type={type} 
                      imgUrl2 = {imgUrl2} title2={title2} type2={type2}  
                      imgUrl3 = {imgUrl3} title3={title3} type3={type3} 
                      imgUrl4 = {imgUrl4} title4={title4} type4={type4}
                      imgUrl5 = {imgUrl5} title5={title5} type5={type5}
                      imgUrl6 = {imgUrl6} title6={title6} type6={type6}
                      imgUrl7 = {imgUrl7} title7={title7} type7={type7}
                      imgUrl8 = {imgUrl8} title8={title8} type8={type8}
                      imgUrl9 = {imgUrl9} title9={title9} type9={type9}
                      imgUrl10 = {imgUrl10} title10={title10} type10={type10}
                      
                                                                        />
                                                                                
      </header>
    </div>
  );
}

export default App;
