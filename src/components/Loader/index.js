import React from 'react';

import loaderSrc from '../../assets/loader.gif'

const Loader = props => (
    <div>
        <img style={{width: 75}} alt="loader icon" src={loaderSrc}/>
    </div>
)

export default Loader;