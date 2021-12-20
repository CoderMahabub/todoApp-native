import styled from "styled-components";
import {
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    safeAreaView,
    TextInput,
} from "react-native";

// Colors
export const colors = {
    primary: "#332424",
    secondary: "#4D3636",
    tertiary: "#E6E6E6",
    alternative: "#999999"
}

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
    background-color: ${colors.primary};
    padding: 20px;
    padding-bottom: 0px;
    flex: 1;
    padding-top: ${statusBarHeight}px;
`;

// Header
export const HeaderView = styled.View`
    padding-vertical: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: ${colors.tertiary};
    letter-spacing: 2px;
    font-style: italic;
`;

export const HeaderButton = styled.Touch
