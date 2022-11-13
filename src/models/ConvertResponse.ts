export interface Query {
  from: string;
  to: string;
  amount: number;
}

export interface ConvertResponse {
  date: string;
  result: number;
  success: boolean;
  query: Query;
}
