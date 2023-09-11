import { User } from "../interfaces/user";

export const validUsers : User = {
    displayName: "park",
    credential: {
        login: "park",
        password: "123456",
    },
    errorMessage: "",
}

export const invalidUsers : User[] = [
    {
      displayName: "badguy",
      credential: {
        login: "badguy",
        password: "123456",
      },
      errorMessage: "ล็อกอินหรือรหัสผ่านไม่ถูกต้อง",
    },
    {
      displayName: "jomyut",
      credential: {
        login: "jomyut",
        password: "123456",
      },
      errorMessage: "ล็อกอินถูกระงับ",
    },
  ];