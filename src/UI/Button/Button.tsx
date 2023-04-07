import './Button.css'

export interface ButtonProps {
    btnClasses?: Array<string>,
    clickHandler: () => void,
    children: string,
}

export function Button(props: ButtonProps) {
    const staticBtnClasses = ['rounded-md'];
    const btnClasses = props.btnClasses ? [...staticBtnClasses, ...props.btnClasses] : [...staticBtnClasses]

    return(
        <>
            <button onClick={props.clickHandler} className={btnClasses.join(' ')}>{props.children}</button>
        </>
    )
}