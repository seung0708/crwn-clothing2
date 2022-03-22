import React from 'react'
import './category-item.styles.scss'

const Category = (props) => (
    <div className='category-container'>
        <div className='background-image'
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }}
        />
        <div className='category-body-container'>
            <h2 className='title'>{props.title.toUpperCase()}</h2>
            <p className='subtitle'>SHOP NOW</p>
        </div>
    </div>
    
)

export default Category