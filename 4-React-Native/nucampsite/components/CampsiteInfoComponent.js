import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';

function RenderComments({comment}) {
    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin:10}}>
                <Text style={{fontSize:14}}>{item.text}</Text>
                <Text style={{fontSize:12}}>{item.rating} stars</Text>
                <Text style={{fontSize:12}}>[`-- ${item.author}, ${item.date}`</Text>
            </View>
        );
    }
}

function RenderCampsite({campsite}) {

    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS
        };
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.state.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.state.comments.filter(comment => comment.campsiteId === campsiteId);
        return (
            <ScrollView>
                <RenderCampsite campsite={campsite} />
                <RenderComments comment={comments}/>
            </ScrollView>
        )
    }
}

export default CampsiteInfo;