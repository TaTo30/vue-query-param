

function removeKey(key:string) {
  const urlsearch = new URLSearchParams(location.search)
  urlsearch.delete(key)

  let npathname
  if (location.pathname.includes('?')) {
    npathname = location.pathname.replace(/\?(.)*/, `?${urlsearch.toString()}`)
  } else {
    npathname = `?${urlsearch.toString()}`
  }
  history.replaceState(null, '', npathname)
}

function setValueToURL(key:string, value:string){
  const urlsearch = new URLSearchParams(location.search)

  if (!value)
    return removeKey(key)
  
  if (urlsearch.has(key)) 
    urlsearch.set(key, value)
  else 
    urlsearch.append(key, value)
  
  let npathname
  if (location.pathname.includes("?")) {
    npathname = location.pathname.replace(/\?(.)*/, `?${urlsearch.toString()}`)
  } else {
    npathname = `?${urlsearch.toString()}`
  }
  history.replaceState(null, '', npathname)
}

function getValueFromURL(key: string) {
  const urlsearch = new URLSearchParams(location.search)
  return urlsearch.get(key)
}

export {
  setValueToURL,
  getValueFromURL
}