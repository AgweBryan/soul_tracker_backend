export interface SoulRequestModel {
  firstName: string;
  lastName: string;
  gender: string;
  city: string;
  country: string;
  phoneNumber: number;
  email?: string;
  permitted: boolean;
}

export interface SoulResponseModel extends SoulRequestModel {
  id: number | string;
}
