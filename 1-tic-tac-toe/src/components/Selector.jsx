import { Character } from "./Character";
import { EMOJIS } from "../logic/constants";
import './Menu.css'

export function Selector({ player, updateCharacter }) {
    
    const hideMenuClass = player === 3 ? 'hide-menu' : ''

    return(
        <section className={`selector-menu ${hideMenuClass}`}>
            <h1>Selecciona el personaje del jugador {player}</h1>
            <section className="characters">
               {
                    EMOJIS.map((emoji , index) => (
                        <Character 
                        key={index}
                        updateCharacter={updateCharacter}>
                            {emoji}
                        </Character>
                    ))
                } 
            </section>
        </section>
    )
}