import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';

function RenderItem(item) {
    if(item) {
        return (
            <Card  
            featuredTitle={item.name}
            image={require('./images/react-lake.jpg')}
        >
            <Text stye={{margin: 10}}>
                {item.description}
            </Text>
        </Card>
        )
    }
    return <View />
}



class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            test: {
                name: "test"
            }
        }
    }


    static navigationOptions = {
        title: "Contact"
    }

    render() {
        return(
            <ScrollView>
                <RenderItem item={this.state.test} />
            </ScrollView>
        )
    }
}

export default Contact;