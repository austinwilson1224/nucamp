import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


export default class  CampsiteInfoComponent extends React.Component {



    // in class  based components don't use let or const keyword 
    renderCampsite = (campsite) =>{
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments (comments) {
        // check if comments are not null
        // comments != null || comments === undefined
        if(comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    
                    <div>
                        {comments.map(comment =>{
                            return (
                                <div id={comment.id}>


                                    {/* should we use span or p here */}
                                    <p>{comment.text}
                                    <br/>
                                    {`--${comment.author}, 
                                        ${new Intl.DateTimeFormat('en-US', 
                                        { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`}
                                    </p>


                                    {/* <span>{comment.author}{new Intl.DateTimeFormat('en-US', 
                                        { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                    </span> */}
                                </div>
                            )
                            //`${comment.text}`+ `\n\n${comment.author}, ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}`
                        })}
                    </div>
                
                </div>
            )
        }
        return (<div />)
    }

    




    render() {
        console.log(this.props);
        if(this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>

            )
        }
        return (
            <div></div>
        )

    }
}



