export type FearAndGreed = {
  name: string;
  now: Now;
  yesterday: Yesterday;
  lastWeek: LastWeek;
};

export type Now = {
  value: string;
  value_classification: string;
  timestamp: string;
  time_until_update: string;
};

export type Yesterday = {
  value: string;
  value_classification: string;
  timestamp: string;
};

export type LastWeek = {
  value: string;
  value_classification: string;
  timestamp: string;
};
