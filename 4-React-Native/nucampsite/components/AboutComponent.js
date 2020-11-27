import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';
// import { PARTNERS } from '../shared/partners';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';


const mapStateToProps = state => {
    return {
        partners: state.partners
    }
}


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



    static navigationOptions = {
        title: "About"
    }

    render() {
        const renderPartner = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: {uri:baseUrl + item.image}}}
                />
            )
        }


        return (
            <ScrollView>
                <Mission item={this.state}/>
                <Card title="Community partners">
                    <FlatList
                        data={this.props.partners.partners}
                        renderItem={renderPartner}
                        keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps)(About);