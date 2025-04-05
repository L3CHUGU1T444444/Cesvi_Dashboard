import './sideMenu.css';
import MAINLOGO from './sideMenuComponents/logo.jsx';
import MAINBTNS from './sideMenuComponents/mainButtons.jsx';

export function SIDEMENU ( {setActive} ) {
    return (
        <div className='h-full grid grid-rows-[100px_1fr] p-[50px]'>
            <MAINLOGO/>

            <MAINBTNS setActive = {setActive}/>
        </div>
    )
}