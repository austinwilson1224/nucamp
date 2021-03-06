import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';




function RenderCampsite({campsite}) {

    return (
        <div className="col-md-5 m-1">
            <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments ({comments}) {
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

    




function CampsiteInfo (props) {
    // console.log(this.props);
    if(props.campsite) {
        return (

            <div className="container">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.campsite.name}</h2>
                    <hr />
                </div>
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>

        )
    }
    return (
        <div></div>
    )

}


export default CampsiteInfo;



