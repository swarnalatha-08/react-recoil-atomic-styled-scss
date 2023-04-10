import React from "react";
import { Heading } from '@chakra-ui/react';

export default function HeadingAtom({heading,style}){
    return (
        <Heading style={style}>{heading}</Heading>
    )
}