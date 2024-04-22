export async function login(authDetail){
  const requestOptions = {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(authDetail)
  }

  const response = await fetch("http://localhost:8000/login", requestOptions);
  
  if (!response.ok){
    const errorMessage = { message: response.statusText, status: response.status };
    throw errorMessage;
  }

  const data = await response.json();

  if (data.accessToken){
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;
}

export async function register(authDetail){
  
  const requestOptions = {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify(authDetail)
  }

  // fetch request
  const response = await fetch("http://localhost:8000/register", requestOptions);

  if (!response.ok){
    const errorMessage = { message: response.statusText, status: response.status };
    throw errorMessage;
  }

  const data = await response.json();

  if (data.accessToken){
    sessionStorage.setItem("token", JSON.stringify(data.accessToken));
    sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
  }

  return data;

}

export async function logout(){
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('cbid');
}