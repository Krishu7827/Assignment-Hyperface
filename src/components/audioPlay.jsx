import React from "react";
import { HStack, Box } from "@chakra-ui/react";
import { ChevronDownIcon, LinkIcon } from '@chakra-ui/icons';
import './audioPlay.css'
const AudioPlay = () => {
    return (
        <Box>
            <HStack className="Top">
                <ChevronDownIcon />
                <LinkIcon />
            </HStack>
        </Box>
    );
}

export default AudioPlay;
