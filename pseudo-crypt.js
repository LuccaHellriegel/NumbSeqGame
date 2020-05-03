const pseudoDecrypt = (secret) => {
  return atob(secret).replace('Salt!CryptoGoesBrr', '');
}