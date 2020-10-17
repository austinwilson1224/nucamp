import React from 'react';


export default class  CampsiteInfoComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {

        if(props.campsite) {
            return (
                <div className="row">

                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }

    }
}



