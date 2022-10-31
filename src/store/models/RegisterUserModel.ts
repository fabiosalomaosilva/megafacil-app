import { Provider } from 'react-redux';

export interface RegisterUserModel {
  id: string;
  email: string;
  photoUrl: string;
  name: string;
  password: string;
  confirmPassword: string;
  provider: "Google" | "Facebook" | "EmailPassword";
}
