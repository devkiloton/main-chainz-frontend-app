export type BitcoinWallet = {
  address: string;
  balance: number;
  confirmedBalance: number;
  unconfirmedBalance: number;
  transactionsReference: Array<TransactionsReference>;
};

export type TransactionsReference = {
  transactionId: string;
  confirmations: number;
  value: number;
  blockHeight: number;
};
