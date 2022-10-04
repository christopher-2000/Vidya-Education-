import './css/style.css';
import Logo from './images/play_store_512.png';
function Navbar(){
    return(
        <section className='navbar inline'>
            <img className='logo' src={Logo} alt="" />
            <h1 className='white-text'>Vidya Education App</h1>
            
        </section>
    )
}

export default Navbar;