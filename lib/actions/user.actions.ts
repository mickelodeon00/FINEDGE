'use server';

import { ID } from 'node-appwrite';
import { createAdminClient, createSessionClient } from '../server/appwrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';

export async function signIn(userData: signInProps) {
  const { email, password } = userData;
  try {
    const { account } = await createAdminClient();
    const response = await account.createEmailPasswordSession(email, password);
    // console.log(response, 'RESPONSE');
    (await cookies()).set('appwrite-session', response.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });
    return parseStringify(response);
  } catch (error) {
    console.log(error);
  }
}

export async function signUp(userData: SignUpParams) {
  const { firstName, lastName, email, password } = userData;
  try {
    const { account } = await createAdminClient();
    const newUserAccout = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    // cookies().set("my-custom-session", session.secret, {
    (await cookies()).set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });
    return parseStringify(newUserAccout);
  } catch (error) {
    console.log(error);
  }
}

export async function getLoggedInUser() {
  try {
    // console.log('chaclaks');
    const { account } = await createSessionClient();
    // console.log(account, 'account');
    return parseStringify(await account.get());
  } catch (error) {
    console.log(error, 'errrrr');
    return null;
  }
}

export async function logoutAccount() {
  // const { email, password } = userData;
  try {
    const { account } = await createSessionClient();
    (await cookies()).delete('appwrite-session'); // delete cookies
    await account.deleteSession('current'); // delete account session
  } catch (error) {
    console.log(error);
    return null;
  }
}
