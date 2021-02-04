import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

import './styles/Searchbox.scss';

const Searchbox = ({history}) => {

    const [searchText, setSearchText] = useState('');

    const handleChangeSearchText = (event) => {
        if (event.key === 'Enter') {
            history.push(`/items?search=${searchText}`);
        }
        setSearchText(event.target.value);
    }

    const handleGetProducts = () => history.push(`/items?search=${searchText}`);

    const handleGoToHome = () => history.push('/');

    return (
        <div className="header">
            <img src="/images/ml.png" className="logo" alt="Mercado Libre logo" onClick={handleGoToHome}/>
            <div className="search">
                <input
                    type="text"
                    placeholder="Nunca dejes de buscar"
                    name="search"
                    value={searchText}
                    onChange={handleChangeSearchText}
                    onKeyDown={handleChangeSearchText}
                />
                <button onClick={handleGetProducts}><img src="/images/buscar.png" alt="search icon"/></button>
            </div>
        </div>
    )
}

export default withRouter(Searchbox);
export {Searchbox};