function updateHistory(urlsearch: URLSearchParams) {
  const newUrl = new URL(location.href)
  newUrl.search = urlsearch.toString()
  history.replaceState(null, '', newUrl)
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