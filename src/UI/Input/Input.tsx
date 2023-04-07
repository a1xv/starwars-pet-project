import React, {useState} from "react";

export interface InputProps {
    inputClasses?: Array<string>,
    placeholder: string,
    changeHandler: (value: string) => void
}


export function Input(props: InputProps) {
    const staticInputClasses = ['bg-transparent', 'outline-0', 'border', 'text-white'];
    const inputClasses = props.inputClasses ? [...staticInputClasses, ...props.inputClasses] : [...staticInputClasses]
    const [value, setValue] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        props.changeHandler(event.target.value)
    }

    return(
        <>
            <input
                type="text"
                className={inputClasses.join(' ')}
                value={value}
                placeholder={props.placeholder}
                onChange={changeHandler}
            />
        </>
    )
}