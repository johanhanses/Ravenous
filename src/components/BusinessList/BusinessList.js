import React, { Component } from 'react';

import Business from '../Business/Business';
import "./BusinessList.css";

class BusinessList extends Component {
    state = {  }
    render() { 
        return (
            <div className="BusinessList">
                {this.props.businesses.map((business) => {
                    return <Business key={business.id} business={business} />
                })}
            </div>
        );
    }
}

export default BusinessList;
