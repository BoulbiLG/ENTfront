import React, { useState } from 'react';

import FenetreCoffre from '../interface/coffre/FenetreCoffre';

const Coffre = ({ img, type, x, y, id }) => {

    const [fenetreCoffre, fenetreCoffreSet] = useState('false');

    const style = {
        position: 'absolute',
        top: y,
        left: x,
        cursor: 'pointer',
    }
        
    return (
        <div className='coffreConteneur'>
            { fenetreCoffre === 'true' ? (
                <>
                    <img style={style} src={img} alt={img} onClick={() => {fenetreCoffreSet('false')}}/>
                    <FenetreCoffre type={type} id={id} />
                </>
            ) : <img style={style} src={img} alt={img} onClick={() => {fenetreCoffreSet('true')}}/> }
        </div>
    )
}

export default Coffre