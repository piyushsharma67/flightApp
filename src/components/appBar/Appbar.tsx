import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, TextStyle, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Feather';

export interface IAppBarProps {
    children?: React.ReactNode,
    style?: StyleProp<ViewStyle>
}

export interface IAppBarActionProps extends Omit<IconProps, "name"> {
    icon: string,
    onPress?: () => void
}

export interface IAppBarContentProps {
    title: string,
    subtitle?: string,
    style?: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>,
    subtitleStyle?: StyleProp<TextStyle>
}

const AppBarAction = React.memo((props: IAppBarActionProps) => (
    <IconButton
        style={[props.style, { marginLeft: 12, marginRight: 0 }]}
        icon={({ size, color }) => (
            <Icon name="arrow-left" size={20} color="black" />
        )}
        onPress={props.onPress} />
));

const AppBarBackAction = React.memo((props: Omit<IAppBarActionProps, "icon">) => (
    <AppBarAction
        icon="arrow-back"
        {...props} />
));

const AppBarContent = React.memo((props: IAppBarContentProps) => (
    <View style={[styles.content, props.style]}>
        <Text
            style={styles.titletext}
            numberOfLines={1}>
            {props.title}
        </Text>
    </View>
));

class AppBar extends React.PureComponent<IAppBarProps> {

    /* constructor(props: IAppBarProps) {
        super(props);
    } */

    public static Action = AppBarAction;

    public static BackAction = AppBarBackAction;

    public static Content = AppBarContent;

    render() {
        return (
            <View style={[styles.appbar, this.props.style]}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    appbar: {
        width: "100%",
        height: 56,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingRight: 8,
        elevation: 4
    },
    content: {
        flexShrink: 1,
        flexGrow: 1,
        paddingHorizontal: 18
    },
    titletext: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    }
});

export default AppBar;