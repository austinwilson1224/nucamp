import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';


function Mission({item}) {
    return (
        <Card style={{margin:10}} title="Our mission">
            <Text>
                {item.mission}
            </Text>
        </Card>
    )
}


class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mission: "We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.",
            partners: PARTNERS
        }
    }

    static navigationOptions = {
        title: "About"
    }

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/react-lake.jpg')}}
                />
            )
        }


        return (
            <ScrollView>
                <Mission item={this.state}/>
                <Card title="Community partners">
                    <FlatList
                        data={this.state.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default About;