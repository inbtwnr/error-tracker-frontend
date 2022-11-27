const TokenKey = "Token";
const IdKey = "Id";

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

export function getId() {
  return localStorage.getItem(IdKey);
}

export function setId(id) {
  return localStorage.setItem(IdKey, id);
}

export function removeId() {
  return localStorage.removeItem(IdKey);
}
