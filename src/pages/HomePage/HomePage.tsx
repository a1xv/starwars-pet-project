import {Button} from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import './HomePage.css'
import {RoutesConstants} from "../../constants/routes-constants";

export function HomePage() {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(RoutesConstants.PREVIEW);
    }

    return(
        <div className="home-bg flex items-center">
            <div className="flex flex-col justify-start text-white w-[30%] justify-center ml-72">
                <div className="w-4/5 mb-16">
                    <h1 className="font-bold text-[72px] mb-7 leading-tight">Find all your favourite heroes "Star Wars"</h1>
                    <p className="text-[24px] font-light w-[70%]">You can know the type of heroes, its strengths, disadvantages and abilities</p>
                </div>
                <Button clickHandler={navigateHandler} btnClasses={['self-start', 'py-2', 'px-12', 'text-black', 'blue']}>Start</Button>
            </div>
        </div>
    )
}