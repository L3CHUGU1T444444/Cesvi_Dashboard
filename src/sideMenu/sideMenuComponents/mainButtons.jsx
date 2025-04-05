import Button from '../sideMenuComponents/buttons.jsx';

export default function MAINBTNS ( {setActive} ) {
    return (
        <div id='section-btn' className='h-full flex justify-center items-center border-t-[1px] border-[white]'>
            <Button setActive={setActive} />
        </div>
    );
}