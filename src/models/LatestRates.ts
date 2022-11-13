export interface LatestRates {
  base: string;
  date: string;
  rates: Record<string, number>;
  success: boolean;
}
