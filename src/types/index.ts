export interface InputValidationRule {
  required: boolean;
  email?: boolean;
  min?: number;
  max?: number;
}
