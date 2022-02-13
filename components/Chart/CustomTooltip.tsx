import { Box, Text } from '@chakra-ui/react'
import { CSSProperties } from 'react'

interface TooltipPayloadItem {
  value: number;
  payload: {
    timestamp: number;
  };
}
const renderDate = (index: number, payload: TooltipPayloadItem[], item: TooltipPayloadItem) => {
	return index === payload.length - 1 ? (
		<div className="tooltip-date">
			{new Date(item.payload.timestamp * 1000).toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase()}
			{new Date(item.payload.timestamp * 1000).toLocaleString('default', { month: 'long' }).slice(1)}
      &nbsp;
			{new Date(item.payload.timestamp * 1000).getDate()}, {new Date(item.payload.timestamp * 1000).getFullYear()}
		</div>
	) : (
		''
	)
}

const renderItem = (type: string, item: number) => {
	return type === '$' ? (
		<Text variant="body2">{`${type}${Math.round(item).toLocaleString('en-US')}`}</Text>
	) : (
		<Text variant="body2">{`${Math.round(item).toLocaleString('en-US')}${type}`}</Text>
	)
}

const renderTooltipItems = (
	payload: TooltipPayloadItem[],
	bulletpointColors: CSSProperties[],
	itemNames: string[],
	itemType: string,
	isStaked = false,
	isPOL = false
) => {
	return isStaked ? (
		<Box>
			<Box className="item" display="flex" justifyContent="space-between">
				<Text variant="body2">
					<span className="tooltip-bulletpoint" style={bulletpointColors[0]}></span>
          Staked
				</Text>
				<Text>{`${Math.round(payload[0].value)}%`}</Text>
			</Box>
			<Box className="item" display="flex" justifyContent="space-between">
				<Text variant="body2">
					<span className="tooltip-bulletpoint" style={bulletpointColors[1]}></span>
          Not staked
				</Text>
				<Text>{`${Math.round(100 - payload[0].value)}%`}</Text>
			</Box>
			<Box>{renderDate(0, payload, payload[0])}</Box>
		</Box>
	) : isPOL ? (
		<Box>
			<Box className="item" display="flex" justifyContent="space-between">
				<Text variant="body2">
					<span className="tooltip-bulletpoint" style={bulletpointColors[0]}></span>
					{itemNames[0]}
				</Text>
				<Text>{`${Math.round(payload[0].value)}%`}</Text>
			</Box>
			<Box className="item" display="flex" justifyContent="space-between">
				<Text variant="body2">
					<span className="tooltip-bulletpoint" style={bulletpointColors[1]}></span>
					{itemNames[1]}
				</Text>
				<Text>{`${Math.round(100 - payload[0].value)}%`}</Text>
			</Box>
			<Box>{renderDate(0, payload, payload[0])}</Box>
		</Box>
	) : (
		payload.map((item, index) => (
			<Box key={index}>
				<Box className="item" display="flex">
					<Box display="flex" justifyContent="space-between">
						<Text variant="body2">
							<span className="tooltip-bulletpoint" style={bulletpointColors[index]}></span>
							{`${itemNames[index]}`}
						</Text>
					</Box>
					{renderItem(itemType, item.value)}
				</Box>
				<Box>{renderDate(index, payload, item)}</Box>
			</Box>
		))
	)
}
function CustomTooltip ({
	active,
	payload,
	bulletpointColors,
	itemNames,
	itemType,
	isStaked,
	isPOL
}: {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  bulletpointColors: CSSProperties[];
  itemNames: string[];
  itemType: string;
  isStaked?: boolean;
  isPOL?: boolean;
}) {
	if (active && payload && payload.length) {
		return (
			<Box className={`ohm-card tooltip-container`}>
				{renderTooltipItems(payload, bulletpointColors, itemNames, itemType, isStaked, isPOL)}
			</Box>
		)
	}
	return null
}

export default CustomTooltip
