import { DateTime } from "luxon";

export const getTimeToEnd = (time: any) => time.diff(DateTime.local()).toFormat("hh:mm:ss")