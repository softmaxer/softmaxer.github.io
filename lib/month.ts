const monthFromNumber = new Map<number, string>();
monthFromNumber.set(0, "JAN");
monthFromNumber.set(1, "FEB");
monthFromNumber.set(2, "MAR");
monthFromNumber.set(3, "APR");
monthFromNumber.set(4, "MAY");
monthFromNumber.set(5, "JUN");
monthFromNumber.set(6, "JUL");
monthFromNumber.set(7, "AUG");
monthFromNumber.set(8, "SEP");
monthFromNumber.set(9, "OCT");
monthFromNumber.set(10, "NOV");
monthFromNumber.set(11, "DEC");

export function GetMonthFromNumber(month: number) {
  return monthFromNumber.get(month);
}
