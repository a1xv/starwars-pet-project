import './PreviewPage.css'
import React from "react";
import {SearchAddCharacterComponent} from "../../components/SearchAddCharacterComponent";
import {CharactersComponent} from "../../components/CharactersComponent/CharactersComponent";

export function PreviewPage() {
    return(
        <div className="preview-bg border-t">
            <div className="container mx-auto max-w-[70%] pt-5">
                <h1 className="text-[48px] text-center text-white mb-16">Who's Your Favorite Star Wars Character</h1>
                <SearchAddCharacterComponent/>
                <CharactersComponent/>
            </div>
        </div>
    )
}