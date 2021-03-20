import React from 'react';
import logo from "../../assets/Images/youtube.png";
import './Searchbar.scss'

const Searchbar = ({onSubmit}) => {

    const [state, setState] = React.useState('')

    return (
        <div className='searchbar'>
            <div className='searchbar-logo d-flex align-items-center justify-content-center pt-4'>
                <img className='searchbar-logo-img' src={logo} alt="Youtube"/>
                <div className='searchbar-logo-text pl-2'>YouTube</div>
            </div>
            <form onSubmit={(e) => onSubmit(e, state)}
                  className='searchbar-form pt-3'
                  action="">
                <input type="text"
                       value={state}
                       onChange={(e) => setState(e.target.value)}
                       className="form-control searchbar-form-input"
                       placeholder=""/>
                <button className='searchbar-form-btn btn btn-danger'>Search</button>
            </form>
        </div>
    );
};

export default Searchbar;