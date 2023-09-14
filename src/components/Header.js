import '../App.css';

function Header(props) {
    const divStyle = {
        color: 'white',
         backgroundColor: "black",
            
    }
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} style={divStyle} className="shop"><b>Shopping Cart App</b></div>
            <div onClick={() => props.handleShow(true)} style={divStyle}> <b>Cart</b>
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;