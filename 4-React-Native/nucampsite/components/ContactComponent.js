import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text, View } from 'react-native-elements';

function RenderItem(item) {
    if(item) {
        return (
            <Card  
            title={item.name}
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
            info: {
                address: "1 Nucamp Way\nSeattle, WA 98001\nU.S.A.",
                phone: "1-206-555-1234",
                email: "campsites@nucamp.co"
            }

        }
    }


    static navigationOptions = {
        title: "Contact"
    }

    render() {
        return(
            <ScrollView>
                <Card title="Contact Information" wrapperStyle={{margin:20}} >
                    <Text style={{margin:10}}>
                        {this.state.info.address}
                    </Text>
                    <Text style={{margin:10}}>
                        Phone: {this.state.info.phone}
                        {'\n'}
                        Email: {this.state.info.email}
                    </Text>
                </Card>

            </ScrollView>
        )
    }
}

export default Contact;