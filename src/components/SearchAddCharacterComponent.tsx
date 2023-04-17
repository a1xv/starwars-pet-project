import React from "react";
import {Input} from "../UI/Input/Input";
import SelectLib from "react-select";
import {components} from "react-select";
import {customSelectStyles} from "../UI/constants";
import {Button} from "../UI/Button/Button";
import {genderSelectOptions, raceSelectOptions, sideSelectOptions} from "../data/selectOptionsData";
import {useDispatch, useSelector} from "react-redux";
import {store} from '../store/index';

const Option = (props: any) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

export function SearchAddCharacterComponent() {

    const characters = useSelector((characters: any) => characters.characters).characters;
    const dispatch = useDispatch();

    const inputChangeHandler = (value: string) => {
        dispatch({
            type: 'SET_FILTERED_CHARACTERS',
            payload: characters.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()))
        })
    }

    const genderSelectChange = (target: any) => {
        console.log('1')
        filterByField(target, 'gender');
    }

    const raceSelectChange = (target: any) => {
        console.log('2')
        filterByField(target, 'race');
    }

    const sideSelectChange = (target: any) => {
        console.log('3')
        filterByField(target, 'side');
    }

    const addBtnClickHandler = () => {
        console.log('add btn clicked')
    }

    const filterByField = (target: any, field: string) => {
        const valuesArr: any = []
        target.forEach((item: any) => {
            valuesArr.push(item.value)
        })
        dispatch({
            type: 'SET_FILTERED_CHARACTERS',
            payload: target.length
                ? characters.filter((item: any) => valuesArr.includes(item[field].toLowerCase()))
                : store.getState().characters.characters
        })
    }

    return(
        <>
            <div>
                <Input
                    inputClasses={['py-3', 'px-4', 'mb-2', 'w-full', 'rounded-md']}
                    placeholder={'Search character'}
                    changeHandler={inputChangeHandler}
                />
            </div>
            <div className="flex justify-between">
                <div className="flex">
                    <SelectLib
                        onChange={genderSelectChange}
                        className="w-[130px] border-main-blue bg-inherit mr-4"
                        placeholder="Gender"
                        components={{
                            Option
                        }}
                        styles={customSelectStyles}
                        isMulti
                        options={genderSelectOptions}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                    />
                    <SelectLib
                        onChange={raceSelectChange}
                        className="w-[130px] border-main-blue bg-inherit mr-4"
                        placeholder="Race"
                        components={{
                            Option
                        }}
                        styles={customSelectStyles}
                        isMulti
                        name="gender"
                        options={raceSelectOptions}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                    />
                    <SelectLib
                        onChange={sideSelectChange}
                        className="w-[130px] border-main-blue bg-inherit"
                        placeholder="Side"
                        components={{
                            Option
                        }}
                        styles={customSelectStyles}
                        isMulti
                        name="gender"
                        options={sideSelectOptions}
                        closeMenuOnSelect={false}
                        hideSelectedOptions={false}
                    />
                </div>

                <Button
                    btnClasses={['bg-transparent', 'border', 'py-2', 'px-12', 'text-white']}
                    clickHandler={addBtnClickHandler}
                >
                    Add
                </Button>
            </div>
        </>
    )
}