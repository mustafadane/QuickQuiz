import React, { Component } from 'react'
import { Card, ListItem, Avatar, RadioButton } from 'react-native-material-ui'
import { View, Text, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types';


const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

// const propTypes = {
//     navigation: PropTypes.shape({
//         goBack: PropTypes.func.isRequired,
//     }).isRequired,
// };

export class QuestionCard extends Component {
    constructor(){
        super()
        this.state = {
            choice: 0
        }
    }
    render() {
        return (
            <View>
                <Card>
                    <ListItem
                        leftElement={<Avatar text="1" size={24} />}
                        centerElement={{
                            primaryText: 'What is this question?'
                        }}
                    />
                    <View style={styles.textContainer}>

                        <RadioButton
                        label="Option 1"
                        checked={this.state.choice === 1 ? true : false}
                        value={1}
                        onSelect={()=>this.setState({choice: 1})}
                        />
                        <RadioButton
                        label="Option 2"
                        checked={this.state.choice === 2 ? true : false}
                        value={2}
                        onSelect={()=>this.setState({choice: 2})}
                        />
                        <RadioButton
                        label="Option 3"
                        checked={this.state.choice === 3 ? true : false}
                        value={3}
                        onSelect={()=>this.setState({choice: 3})}
                        />
                        <RadioButton
                        label="Option 4 this line is actually longer than it should be as you can see too. Let's see "
                        checked={this.state.choice === 4 ? true : false}
                        value={4}
                        onSelect={()=>this.setState({choice: 4})}
                        />

                    </View>
                </Card>
            </View>
        )
    }
}

// QuestionCard.propTypes = propTypes;

export default QuestionCard


/*
import { View, StyleSheet, Text } from 'react-native';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { Avatar, Card, ListItem, Toolbar } from 'react-native-material-ui';


const styles = StyleSheet.create({
    textContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
    },
});

const propTypes = {
    navigation: PropTypes.shape({
        goBack: PropTypes.func.isRequired,
    }).isRequired,
};

class CardSpec extends Component {
    render() {
        return (
            <View>
                <Toolbar
                    leftElement="arrow-back"
                    onLeftElementPress={() => this.props.navigation.goBack()}
                    centerElement="Card"
                />
                <Card>
                    <ListItem
                        leftElement={<Avatar text="JM" />}
                        centerElement={{
                            primaryText: 'John Mitri',
                            secondaryText: '3 weeks ago',
                        }}
                    />
                    <View style={styles.textContainer}>
                        <Text>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                        </Text>
                    </View>
                </Card>
                <Card>
                    <ListItem
                        leftElement={<Avatar text="MW" />}
                        centerElement={{
                            primaryText: 'Mike Wiliams',
                            secondaryText: '4 weeks ago',
                        }}
                    />
                    <View style={styles.textContainer}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat.
                        </Text>
                    </View>
                </Card>
            </View>
        );
    }
}

CardSpec.propTypes = propTypes;

export default CardSpec;


*/
