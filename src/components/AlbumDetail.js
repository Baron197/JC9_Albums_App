import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
    render() {
        const { 
            title, 
            artist, 
            thumbnail_image, 
            image, 
            url 
        } = this.props.album;
        return (
            <Card>
                <CardSection>
                    <View>
                        <Image source={{ uri: thumbnail_image }} />
                    </View>
                    <View>
                        <Text>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
            </Card>
        )
    }
}

export default AlbumDetail;
