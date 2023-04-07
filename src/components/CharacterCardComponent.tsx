import './CharactersComponent/CharactersComponent.css'
import {ICharacter} from "../models";

interface CharacterCardComponentProps {
    character: ICharacter
}

export function CharacterCardComponent( {character}: CharacterCardComponentProps) {
    return(
        <div className="pr-10 last:pr-0 last:mr-0">
            <div className="w-[400px] h-[400px] relative">
                <img src={require(`../assets/images/${character.urlName}.png`)} alt={`${character.name}`}/>
                <p className="text-[24px] max-w-[30%] text-white absolute top-[5%] left-[7%]">{character.name}</p>
            </div>
            <div className="flex flex-col justify-center bg-black w-[400px] h-[150px] px-4">
                <div className="flex justify-between border-b py-2">
                    <span className="text-white text-[24px]">Gender</span>
                    <span className="text-white text-[24px]">{character.gender}</span>
                </div>
                <div className="flex justify-between border-b py-2">
                    <span className="text-white text-[24px]">Race</span>
                    <span className="text-white text-[24px]">{character.race}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-white text-[24px]">Side</span>
                    <span className="text-white text-[24px]">{character.side}</span>
                </div>
            </div>
        </div>
    )
}