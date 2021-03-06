import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, Button, Modal, StyleSheet } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
// import { CAMPSITES } from '../shared/campsites';
// import { COMMENTS } from '../shared/comments';

import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = {
    postFavorite: campsiteId => (postFavorite(campsiteId)),
    postComment: (campsiteId, rating, author, text) => (postComment(campsiteId, rating,author, text))
};



function RenderComments({comments}) {
    const renderCommentItem = ({item}) => {
        return (
            <View style={{margin:10}}>
                <Text style={{fontSize:14}}>{item.text}</Text>
                <Rating 
                    startingValue={item.rating}
                    imageSize='10'
                    style={{alignItems:'flex-start', paddingRight: '5%'}}
                    readonly
                ></Rating>
                <Text style={{fontSize:12}}>{item.rating} stars</Text>
                <Text style={{fontSize:12}}>[`-- ${item.author}, ${item.date}`</Text>
            </View>
        );
    };
    return (
        <Card title="Comments">
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()} 
            />
        </Card>
    )
}

function RenderCampsite(props) {

    const { campsite } = props;

    if (campsite) {
        return (
            <Card
                featuredTitle={campsite.name}
                image={{uri: baseUrl + campsite.image}}
            >
                <Text style={{margin: 10}}>
                    {campsite.description}
                </Text>
                <View style={styles.cardRow}>
                    <Icon
                        name={props.favorite? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        raised
                        reverse
                        onPress={() => {props.favorite? console.log('already set as favorite') : props.markFavorite()}}
                    />
                    <Icon
                        name="pencil"
                        type="font-awesome"
                        color="#5637DD"
                        raised
                        reverse
                        onPress={() => props.onShowModal()}
                    />
                </View>
            </Card>
        );
    }
    return <View />;
}

class CampsiteInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            rating: 5,
            author: "",
            text: ""
        };
    }

    static navigationOptions = {
        title: 'Campsite Information'
    }

    markFavorite(campsiteId) {
        this.props.postFavorite(campsiteId)
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal})
    }

    handleComment(campsiteId) {
        // console.log(JSON.stringify(this.state));
        postComment(...state, campsiteId);
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            showModal: false,
            rating: 5,
            author: "",
            text: ""
        })
    }



    render() {
        const campsiteId = this.props.navigation.getParam('campsiteId');
        const campsite = this.props.campsites.campsites.filter(campsite => campsite.id === campsiteId)[0];
        const comments = this.props.comments.comments.filter(comment => comment.campsiteId === campsiteId);
        return (
            <ScrollView>
                <RenderCampsite 
                    campsite={campsite} 
                    favorite = {this.props.favorites.includes(campsiteId)} 
                    markFavorite = {() => this.markFavorite(campsiteId)}
                    onShowModal = {() => this.toggleModal()}
                />
                <RenderComments comments={comments}/>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => {
                        this.toggleModal();
                    }}
                >
                    <View style={styles.modal}>
                        <Rating
                            showRating
                            startingValue={this.state.rating}
                            imageSize='40'
                            onFinishRating={rating => this.setState({rating: rating})}
                            style={{paddingVertical: 10}}
                        >

                        </Rating>
                        <Input
                            placeholder="Comment"
                            leftIcon={{ type: "font-awesome", name: "comment-o"}}
                            leftIconContainerStyle={{paddingRight: 10}}
                        ></Input>
                        <Input
                            placeholder="Author"
                            leftIcon={{ type:'font-awesome', name: 'user-o'}}
                            leftIconContainerStyle={{paddingRight: 10}}
                        ></Input>
                        <View style={{margin: 10}}>
                            <Button
                                title='Submit'
                                color='#5637DD'
                                onPress={() => {
                                    this.handleComment();
                                    this.resetForm();
                                }}
                            ></Button>

                        </View>
                        <View style={{margin: 10}}>
                            <Button
                                title='cancel'
                                color='#808080'
                                onPress={() => {
                                    this.toggleModal();
                                    this.resetForm();
                                }}
                            ></Button>
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cardRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CampsiteInfo);