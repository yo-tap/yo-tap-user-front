const get = async (): Promise<string | null> => {
  const redirectUrl: string | null =
    await localStorage.getItem('btstrp:redirectUrl')
  return redirectUrl ? redirectUrl : null
}

const save = async (redirectUrl: string) => {
  try {
    localStorage.setItem('btstrp:redirectUrl', redirectUrl)
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    throw e
  }
}

const remove = async () => {
  try {
    await localStorage.removeItem('btstrp:redirectUrl')
    window.dispatchEvent(new Event('storage'))
  } catch (e) {
    throw e
  }
}

export const RedirectUrlRepository = {
  get,
  save,
  remove,
}
