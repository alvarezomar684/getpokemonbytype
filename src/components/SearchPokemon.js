import React from 'react'
import { useState } from 'react';

export default function SearchPokemon({onSearch}) {
    const [value, setValue] = useState("")
    return (
        <div>
            <select name="" id="type" onChange={(e) => setValue(e.target.value)} >
                    <option> Seleccione Un Tipo</option>
                    <option value="1"> normal</option>
                    <option value="2"> fighting</option>
                    <option value="3"> flying</option>
                    <option value="4"> poison</option>
                    <option value="5"> ground</option>
                    <option value="6"> rock</option>
                    <option value="7"> bug</option>
                    <option value="8"> ghost</option>
                    <option value="9"> steel</option>
                    <option value="10"> fire</option>
                    <option value="11"> water</option>
                    <option value="12"> grass</option>
                    <option value="13"> electric</option>
                    <option value="14"> psychic</option>
                    <option value="15"> ice</option>
                    <option value="16"> dragon</option>
                    <option value="17"> dark</option>
                    <option value="18"> fairy</option>                    
            </select>
            <button onClick={() => { onSearch(value) }}>Search</button>
            
        </div>
    )
}
