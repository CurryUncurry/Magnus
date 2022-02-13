import {
    Box,
    BoxProps,
    Flex,
    Heading,
    HeadingProps,
    Text,
    TextProps,
    useColorModeValue
} from "@chakra-ui/react";
import { DuarionValues } from "@utils/enums";
import { ChangePercentage } from "@utils/types";
import { FC } from "react";
import { FormattedNumber } from "react-intl";
import ChangeBadge from "./ChangeBadge";

export type ValueCardProps = {
    title: string,
    value: number,
    delimiter: string,
    changePercentage: ChangePercentage
    duration: DuarionValues
} & BoxProps

const ValueCard: FC<ValueCardProps> = ({title, value, delimiter, changePercentage, duration, ...rest}) => {
    const color = useColorModeValue('black', 'white')
    return(
        <Box {...rest}>
            <Text color={color} {...textStyle}>{title}</Text>
            <Flex align='center'>
                <Heading color={color} {...h4Style}>
                    <FormattedNumber value={value}/>&nbsp;{delimiter}
                </Heading>

                <ChangeBadge
                    value={changePercentage.value}
                    direction={changePercentage.direction}
                    ml='12px'
                />
            </Flex>
        </Box>
    )
}

const textStyle = {
    fontSize: 'text',
    mb: '8px'
} as TextProps

const h4Style = {
    as: 'h4',
    fontWeight: 600,
    fontSize: '24px'
} as HeadingProps

export default ValueCard