function updateHistory(urlsearch: URLSearchParams) {
  const prefix = urlsearch.size > 0? "?" : ""
  const searchpath = `${prefix}${urlsearch.toString()}`  
  history.replaceState(null, '', `${location.pathname}${searchpath}`)
}

function removeKey(key: string) {
  const urlsearch = new URLSearchParams(location.search)
  urlsearch.delete(key)
  updateHistory(urlsearch)
}

function setValueToURL(key:string, value:string){
  const urlsearch = new URLSearchParams(location.search)
  if (!value)
    return removeKey(key)
  
  if (urlsearch.has(key)) 
    urlsearch.set(key, value)
  else 
    urlsearch.append(key, value)
  
  updateHistory(urlsearch)
}

function getValueFromURL(key: string) {
  const urlsearch = new URLSearchParams(location.search)
  return urlsearch.get(key)
}

export {
  setValueToURL,
  getValueFromURL
}