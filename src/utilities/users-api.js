const BASE_URL = '/api/users';
const BASE_HEADERS = {'Content-Type': 'application/json'}

export async function signUp(userData){
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: BASE_HEADERS,
    body: JSON.stringify(userData)
  })

  if(res.ok){
    const data = await res.json()
    // res.json() ===> be the jwt coming form the backend
    return data
  }else{
    throw new Error('Invalid Sign Up')
  }
}

