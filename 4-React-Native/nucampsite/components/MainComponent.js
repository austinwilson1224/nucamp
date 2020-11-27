import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { CAMPSITES } from '../shared/campsites';
import CampsiteInfo from './CampsiteInfoComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { fetchCampsites, fetchComments, fetchPartners, fetchPromotions } from '../redux/ActionCreators';


const mapDispatchToProps = {
    fetchCampsites,
    fetchComments,
    fetchPartners,
    fetchPromotions
}

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color:"#fff"
            }
        }
    }
)

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#5637DD"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                color: "#FFF"
            }
        }
    }
)

const DirectoryNavigator = createStackNavigator(
    {
        Directory: { screen: Directory },
        CampsiteInfo: { screen: CampsiteInfo }
    },
    {
        initialRouteName: 'Directory',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: { screen: AboutNavigator },
        Contact: { screen: ContactNavigator }
    },
    {
        drawerBackgroundColor: "#CEC8FF"
    }

)

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         campsites: CAMPSITES,
    //         selectedCampsite: null
    //     };
    // }

    componentDidMount() {
        this.props.fetchCampsites();
        this.props.fetchComments();
        this.props.fetchPartners();
        this.props.fetchPromotions();
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId });
    }

    render() {
        return (
            <View 
            style={{
                flex:1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}
            >
                <AppNavigator />
                {/* <Directory
                    campsites={this.state.campsites}
                    onPress={campsiteId => this.onCampsiteSelect(campsiteId)}
                />
            <CampsiteInfo
                campsite={this.state.campsites.filter(
                    campsite => campsite.id === this.state.selectedCampsite)[0]}
            /> */}
            </View>
        );
        // <Directory campsites={this.state.campsites} />;
    }
}



export default connect(null, mapDispatchToProps)(Main);