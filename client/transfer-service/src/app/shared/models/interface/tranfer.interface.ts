export interface TransferView {
  recipientName: string;
  rut: number;
  amount: number;
  accountType: string;
  bankName: string;
}

export interface TransferCreate {
  bank_account_id: number | string
  amount: number
}