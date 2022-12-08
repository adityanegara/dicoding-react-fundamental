const isFuture = (date: string): boolean => {
  const CURRENT_DATE_STRING: string = `2022-05-01`;
  const currentDate: Date = new Date(CURRENT_DATE_STRING);
  const targetDate: Date = new Date(date);
  return targetDate > currentDate;
};

export default isFuture;
