import moment from "moment";

//Time ago Formatter
export const timeAgo = (date) => {
  const now = new Date();
  const nowMoment = moment(now);
  const pastMoment = moment(date);
  const timeAgoString = pastMoment.from(nowMoment); // 2 hours ago
  return timeAgoString;
};

//Numbers to K formatter
export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};
