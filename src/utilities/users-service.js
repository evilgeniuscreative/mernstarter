import * as usersAPI from './users-api'

export async function signUp(formData){
  // delegate the network req code to the API module
  // the api module will process and return JWT token
  const token = await usersAPI.signUp(formData)

  return token
}

