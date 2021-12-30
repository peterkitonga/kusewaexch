export interface InputValidationRule {
  required: boolean;
  email?: boolean;
  min?: number;
  max?: number;
}

export interface RandomUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  gender: string;
  location: {
    city: string;
    country: string;
  };
  dob: {
    age: number;
  };
  registered: {
    age: number;
  };
  phone: string;
  picture: {
    large: string;
  };
}

export interface TableHeadItem {
  name: string;
  field: string;
}

export interface RandomUserParams {
  format: string;
  page: number;
  results: number;
  seed: string;
  gender: string;
  inc: string;
  dl: unknown;
}

export interface RandomUserInfo {
  page: number;
  results: number;
}
