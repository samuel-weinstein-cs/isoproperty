import React, {Component} from 'react';
import {getListings} from '../services/api_helper';

class Listings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listings: []
        }
    }

    componentDidMount = async () => {
        const listings = await getListings();
        this.setState({
          listings
        })
    }

    render() {
        return(
            <div>
                {this.state.listings.map((listing, index) => (
                    <div key={index}>
                        <p>{listing.address}</p>
                        <p>{listing.address2}</p>
                        <p>{listing.state}</p>
                        <p>{listing.city}</p>
                        <p>{listing.zip}</p>
                        <p>{listing.price}</p>
                        <p>{listing.rental}</p>
                        <p>{listing.size}</p>
                        <p>{listing.bedrooms}</p>
                        <p>{listing.neighborhood}</p>
                        <p>{listing.description}</p>
                    </div>
                ))}
            </div>
        )
    }

}

export default Listings
