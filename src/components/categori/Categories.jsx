import React from 'react';
import ITEM1 from '../../assets/item1.jpg'
import ITEM2 from '../../assets/item2.jpg'
import ITEM3 from '../../assets/item3.jpg'
import ITEM4 from '../../assets/item4.jpg'
import './categories.css'
import {Link} from 'react-router-dom' 

const Categories = () => {
    return (
        <section id='categories'>
            <div className="category">
                <h3>Category</h3>
                <div className="category-items">
                    <div className="category-item">
                        <img src={ITEM1} alt="action" />
                        <h4>Action</h4>
                    </div>
                    <div className="category-item">
                        <img src={ITEM2} alt="Open World" />
                        <h4>Open World</h4>
                    </div>
                    <div className="category-item">
                        <img src={ITEM3} alt="Racing" />
                        <h4>Racing</h4>
                    </div>
                    <div className="category-item">
                        <img src={ITEM4} alt="Sport" />
                        <h4>Sport</h4>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Categories;
