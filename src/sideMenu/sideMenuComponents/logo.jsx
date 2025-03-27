import logo from '../../assets/logos/logo-cesvi.png';

export default function MAINLOGO() {
    return(
        <div id='section-logo' className='flex justify-center items-center'>
            <img className='h-[65px] w-auto' src={logo} alt="" />
        </div>
    )
}