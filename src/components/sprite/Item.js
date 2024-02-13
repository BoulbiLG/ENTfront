import React from 'react';

import './item.css';

import { pommeURL, epeeURL, bouclierURL, casqueURL, plastronURL, jambiereURL, epauliereURL, nikeURL } from '../interface/inventaire/ItemURL';

const Item = ({ img, onClick, x, y, quantite, equipe, typeItem }) => {
    
    let style = {};

    if (x) {
        if (y) {
            if(typeItem === 'inventaire' && quantite === equipe) {
                style = {
                    cursor: 'pointer',
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    border: '1px solid black',
                    filter: 'brightness(80%)',
                    left: x,
                    top: y,
                };
            } else {
                style = {
                    cursor: 'pointer',
                    width: '50px',
                    height: '50px',
                    position: 'absolute',
                    left: x,
                    top: y,
                };
            }
        }
    } else {
        if(typeItem === 'inventaire' && quantite === equipe) {
            style = {
                cursor: 'pointer',
                width: '50px',
                height: '50px',
                border: '1px solid black',
                filter: 'brightness(80%)',
            };
        } else {
            style = {
                cursor: 'pointer',
                width: '50px',
                height: '50px',
            };
        }
    }

    const styleConteneur = {
        margin: '1vh',
    }

    let URL = '';

    if (img === 'pomme') {URL = pommeURL}
    if (img === 'epee') {URL = epeeURL}
    if (img === 'bouclier') {URL = bouclierURL}
    if (img === 'casque') {URL = casqueURL}
    if (img === 'plastron') {URL = plastronURL}
    if (img === 'jambiere') {URL = jambiereURL}
    if (img === 'epauliere') {URL = epauliereURL}
    if (img === 'nike') {URL = nikeURL}

    return (
        <div className='itemConteneur' style={styleConteneur}>
            { URL !== '' ? (
            <div className="case" onClick={onClick} style={{
                position: 'relative',
            }}>

                {/* ========== INVENTAIRE ========== */}

                {typeItem === 'inventaire' ? (
                    <>
                        <img src={URL} alt={img} style={style} />
                        {quantite > 1 ? (
                            <div className="quantite" style={{
                                position: 'absolute',
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '0.3vh 0.8vh',
                                bottom: '-1vh',
                                right: '-1vh',
                                borderRadius: '5vh',
                                border: '1px solid black',
                            }}>
                                <p>{quantite}</p>
                            </div>
                        ) : null }
                    </>
                ) :
                    <>

                        {/* ========== NORMAL ========== */}

                        <img src={URL} alt={img} style={style} />
                        {quantite > 1 ? (
                            <div className="quantite" style={{
                                position: 'absolute',
                                backgroundColor: 'white',
                                color: 'black',
                                padding: '0.3vh 0.8vh',
                                bottom: '-1vh',
                                right: '-1vh',
                                borderRadius: '5vh',
                                border: '1px solid black',
                            }}>
                                <p>{quantite}</p>
                            </div>
                            
                        ) : null }
                    </>
                }
            
            </div>
            ) : null }
        </div>
    );
};

export default Item;
