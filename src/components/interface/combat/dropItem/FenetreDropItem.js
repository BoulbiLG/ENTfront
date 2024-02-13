
import Item from '../../../sprite/Item';
import { recuperationItem } from './recuperationItem';

import './fenetreDropItem.css';

const FenetreDropItem = () => {

    const itemGagne = JSON.parse(sessionStorage.getItem('itemGagne'));
    
    return (
        <div
            className='fenetreDropItemConteneur'
            style={{
                position: 'absolute',
                left: `20%`,
                top: '8%',
            }}
        >
            <div className="coffreSection">
                <p>Objet gagné(s)</p>
                <div className='coffreSection2'>
                    {itemGagne.item.map(({ action, cible, important, id, nom, quantite, img, description, valeur, type }) => (
                        <Item
                            img={id}
                            quantite={quantite}
                            onClick={() => {recuperationItem(action, cible, important, id, nom, img, description, valeur, type)}}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FenetreDropItem