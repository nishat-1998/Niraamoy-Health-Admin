import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const Manage = () => {

    const [manage, setManage] = useState([])

    useEffect(() =>{
        fetch('https://agile-refuge-26610.herokuapp.com/')
        .then(res => res.json())
        .then(data => setManage(data))
    }, [manage])

    return (
        <div className="row">
            
            <div className="col-md-10 p-4 pr-5">
                {/* {
                    manage.map(product => <ManageProduct product={product} />)
                } */}
                <ManageProduct manage={manage} /> 
            </div>
        </div>
    );
};

export default Manage;