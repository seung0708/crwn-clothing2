import React, { Component } from 'react';
import './categories.scss'
import Category from '../category-item/category-item';
class Categories extends Component {
    constructor(props) {
        super(props)

        this.state = {
          categories: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: 'shop/jackets'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
        }
    }

    render() {
      const {categories} = this.state;
        return(
            <div className='categories-container'>
                {
                    categories.map(category => (
                        <Category key={category.id} title={category.title} imageUrl={category.imageUrl} size={category.size} />
                    ))
                }
            </div>
        )
    }
}

export default Categories