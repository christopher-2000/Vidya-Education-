import './css/style.css';

function Navbar(props){
    return(
        <section className='navbar'>
            <h1 className='white-text'>Vidya Education App</h1>
            {props.button}
        </section>
    )
}

export default Navbar;