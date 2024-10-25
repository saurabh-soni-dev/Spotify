// to use svg file in the app, you need to add it as a resource

declare module '*.svg'{
    import React from "react";
    import { SvgProps } from "react-native-svg";
    const content:React.FC<SvgProps> ;
    export default content;  
}