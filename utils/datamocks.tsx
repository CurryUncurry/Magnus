import TezosIcon from "@components/Icons/tokens/tezosIcon";
import { ValueCardProps } from "@components/ValueCard";
import { ChangeDirections, DuarionValues } from "./enums";

export const valueCards: ValueCardProps[] = [
  {
    title: "Market cap",
    value: 7560344,
    delimiter: "$",
    changePercentage: {
      value: 1.4,
      direction: ChangeDirections.UP,
    },
    duration: DuarionValues.all,
  },
  {
    title: "APY%",
    value: 12154.34,
    delimiter: "%",
    changePercentage: {
      value: 1.4,
      direction: ChangeDirections.DOWN,
    },
    duration: DuarionValues.all,
  },
  {
    title: "TVL",
    value: 12154.34,
    delimiter: "%",
    changePercentage: {
      value: 1.4,
      direction: ChangeDirections.DOWN,
    },
    duration: DuarionValues.all,
  },
  {
    title: "Treasury balance",
    value: 12154.34,
    delimiter: "%",
    changePercentage: {
      value: 1.4,
      direction: ChangeDirections.DOWN,
    },
    duration: DuarionValues.all,
  },
  {
    title: "Backing per Token",
    value: 12154.34,
    delimiter: "%",
    changePercentage: {
      value: 1.4,
      direction: ChangeDirections.DOWN,
    },
    duration: DuarionValues.all,
  },
];

export const stakePage = [
  {
    title: "Total value deposited",
    value: 3450341,
    delimiter: "$",
  },
  {
    title: "APY",
    value: 12000,
    delimiter: "%",
  },
  {
    title: "Current index",
    value: 560,
    delimiter: "MGS",
  },
];

export const bondsPage = [
  {
    title: "MGS price",
    value: 14.55,
    delimiter: "$",
  },
  {
    title: "Treasury balance",
    value: 5133534,
    delimiter: "$",
  },
  {
    title: "Vesting term",
    value: 5,
    delimiter: "days",
  },
];

export const bondsTable = [ {
  icon: <TezosIcon />,
  bond: "Tezos",
  price: "3.26$",
  roi: "2.64%",
  duration: "14 days"
}
]