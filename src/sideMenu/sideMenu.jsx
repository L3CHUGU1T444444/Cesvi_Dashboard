import './sideMenu.css';
import MAINLOGO from './sideMenuComponents/logo.jsx';
import MAINBTNS from './sideMenuComponents/mainButtons.jsx';
import USERBTN from './sideMenuComponents/userButton.jsx';

export function SIDEMENU( {setActive} ) {
    return (
        <div className='h-full grid grid-rows-[100px_1fr_100px] p-[50px]'>
            <MAINLOGO/>

            <MAINBTNS setActive={setActive} />

            <USERBTN/>
        </div>
    )
}