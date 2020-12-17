import React from 'react';
import { withRouter } from 'react-router-dom';

const Foot = (props) => {
    console.log(props)
    return (
        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3811384584,2071219122&fm=11&gp=0.jpg"
            style={{
                float:'right',
                width: '50px',
                marginTop: '-80px',
                marginRight: '50px',
                borderRadius: '25px',
                zIndex: '1000'
            }}
            onClick={() => {
                props.history.push('/Dengl');
            }}
        />


    )
}

export default withRouter(Foot)