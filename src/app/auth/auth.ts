import { Auth } from '@aws-amplify/auth';

export interface User {
  name: string;
  email: string;
  id: string;
}

export const getToken = async (): Promise<string> => {
  const session = await Auth.currentSession();
  return session.getIdToken().getJwtToken();
};

export const getCognitoUser = async (): Promise<User | undefined> => {
  try {
    const data = await Auth.currentAuthenticatedUser();
    return userInfoToUser(data);
  } catch (error) {
    return undefined;
  }
};

const userInfoToUser = (userInfo: {
  attributes: Record<string, string>;
}): User => {
  const user: User = {
    email: userInfo.attributes['email'],
    id: userInfo.attributes['sub'],
    name: userInfo.attributes['given_name'],
  };

  return user;
};

export const signOut = async () => {
  await Auth.signOut();
};
