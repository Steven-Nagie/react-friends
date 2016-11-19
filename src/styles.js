import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif"
    },
    "html": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif"
    },
    "h1": {
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif",
        "textAlign": "center",
        "backgroundColor": "#3b5998",
        "color": "white"
    },
    "h2": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif"
    },
    "h3": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif"
    },
    "h4": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif"
    },
    "h5": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif"
    },
    "h6": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif"
    },
    "ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "'lucida grande',tahoma,verdana,arial,sans-serif",
        "listStyleType": "none"
    },
    "h1 strong": {
        "letterSpacing": -1
    },
    "input": {
        "marginTop": 10
    },
    "select": {
        "marginTop": 10
    },
    "form": {
        "marginTop": 10
    },
    "searchForm": {
        "width": 500,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "textAlign": "center"
    },
    "friends": {},
    "friends ul": {
        "width": 500,
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "friends li": {
        "fontSize": 14
    },
    "friends li div": {
        "marginBottom": 7
    },
    "profile-pic": {
        "float": "left",
        "paddingRight": 13,
        "maxHeight": 50
    },
    "friend": {
        "textAlign": "left",
        "border": "1px solid #ccc",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "marginTop": 2,
        "marginRight": 0,
        "marginBottom": 2,
        "marginLeft": 0
    },
    "friend h3": {
        "fontWeight": "500"
    },
    "location": {
        "color": "#999",
        "fontSize": 11,
        "fontWeight": "bold"
    },
    "status": {
        "marginTop": 12,
        "clear": "both"
    },
    "num-friends": {
        "color": "#3b5998",
        "fontSize": 12,
        "fontWeight": "bold"
    },
    "hashtag": {
        "fontWeight": "bold"
    }
});