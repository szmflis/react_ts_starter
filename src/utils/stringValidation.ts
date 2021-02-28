export const validateString = (
  strToValidate: string,
  minLength?: number,
  maxLength?: number,
  pattern?: RegExp
): boolean => {
  if (maxLength && strToValidate.length > maxLength) return false
  if (minLength && strToValidate.length < minLength) return false
  if (strToValidate.length !== strToValidate.replace(/\s/g, '').length) return false
  if (pattern && !pattern.test(strToValidate)) return false
  return true
}

export const regExList = {
  email: /^[^\s@]+@[^\s@]+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
  username: /^[a-zA-Z0-9]+$/,
}
