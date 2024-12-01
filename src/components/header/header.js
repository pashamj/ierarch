import {CurrentUser} from "./components";

export const Header = ({ name }) => {
    return(
        <div>
           <div>Информация о шапке приложения</div>
            <CurrentUser currentUser={name} />
        </div>
    )
}