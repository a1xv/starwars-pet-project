import {CharacterCardComponent} from "../CharacterCardComponent";
import {useEffect, useState} from "react";
import {ICharacter} from "../../models";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import "swiper/css/navigation";
import {useDispatch, useSelector} from "react-redux";


export function CharactersComponent () {
    const dispatch = useDispatch();
    const filteredCharacters = useSelector((filteredCharacters: any) => filteredCharacters.characters).filteredCharacters;

    const getCharacters = () => {
        fetch('http://localhost:3000/characters')
            .then(response => response.json())
            .then((response) => {
                dispatch({type: 'INIT_CHARACTERS', payload: response});
                dispatch({type: 'SET_FILTERED_CHARACTERS', payload: response});
            })
    }

    useEffect(() => {
        getCharacters();
    }, [])

    return (
        <div className="relative mt-16">
            <Swiper
                className="flex justify-between"
                slidesPerView={3}
                cssMode={true}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                pagination={{
                    dynamicBullets: true,
                    el: '.swiper-custom-pagination'
                }}
                mousewheel={true}
                keyboard={true}
                modules={[Pagination, Navigation]}
            >
                {filteredCharacters && filteredCharacters.map((character: ICharacter) => {
                    return <SwiperSlide key={character.id}>
                        <CharacterCardComponent character={character}/>
                    </SwiperSlide>
                })}
            </Swiper>
            <div className="w-[50%] flex mx-auto justify-center mt-6">
                <div className="text-[24px] text-white swiper-button image-swiper-button-prev mr-12 cursor-pointer">
                    <IoIosArrowBack/>
                </div>
                <div className="text-[24px] text-white swiper-button image-swiper-button-next cursor-pointer">
                    <IoIosArrowForward/>
                </div>
            </div>
        </div>
    )
}