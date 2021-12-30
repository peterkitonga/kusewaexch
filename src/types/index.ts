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
