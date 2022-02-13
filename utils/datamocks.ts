import { ValueCardProps } from "@components/ValueCard";
import { ChangeDirections, DuarionValues } from "./enums";

export const valueCards: ValueCardProps[] = [
    {
        title: 'Market cap',
        value: 7560344,
        delimiter: '$',
        changePercentage: {
            value: 1.4,
            direction: ChangeDirections.UP
        },
        duration: DuarionValues.all
    },
    {
        title: 'APY%',
        value: 12154.34,
        delimiter: '%',
        changePercentage: {
            value: 1.4,
            direction: ChangeDirections.DOWN
        },
        duration: DuarionValues.all
    },
    {
        title: 'TVL',
        value: 12154.34,
        delimiter: '%',
        changePercentage: {
            value: 1.4,
            direction: ChangeDirections.DOWN
        },
        duration: DuarionValues.all
    },
    {
        title: 'Treasury balance',
        value: 12154.34,
        delimiter: '%',
        changePercentage: {
            value: 1.4,
            direction: ChangeDirections.DOWN
        },
        duration: DuarionValues.all
    },
    {
        title: 'Backing per Token',
        value: 12154.34,
        delimiter: '%',
        changePercentage: {
            value: 1.4,
            direction: ChangeDirections.DOWN
        },
        duration: DuarionValues.all
    }
]