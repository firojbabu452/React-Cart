import '../App.css';

function Header(props) {
    const divStyle = {
        color: 'white',
         backgroundColor: "black",
    }
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} style={divStyle}  >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)} style={divStyle}> Cart
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;