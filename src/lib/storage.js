export const isInStorage = key => async () => {
  return (await localStorage.getItem(key)) !== null
}

export const getFromStorage = key => async () => {
  return await localStorage.getItem(key)
}
