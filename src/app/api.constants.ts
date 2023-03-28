import { environment } from '../environments/environment';

export default class APIConstants {
  /* Login, signup, forgot and reset password */
  public static LOGIN: string = `${environment.API_BASE}userlogin`;
  public static SIGNUP: string = `${environment.API_BASE}user_registeration`;
}