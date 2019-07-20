import React from 'react';

import SHOP_DATA from './data';
import CollectionPreview from "../../components/collectionPreview/CollectionPreview";

class Shop extends React.Component {

    state = {
        collections: SHOP_DATA
    };

    render() {

        const {collections} = this.state;

        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }

}

export default Shop;
