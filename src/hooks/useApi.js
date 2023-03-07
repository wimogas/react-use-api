const useApi = async (url, method, body) => {
  const options = {
    method
  }
  
  if (method === 'POST'|| method === 'DELETE' || method === 'PUT') {
    options['headers'] = {
      'Content-Type': 'application/json'
    }
  }

  if (method === 'POST' || method === 'PUT') {
    options['body'] = JSON.stringify(body)
  }

  try {
    const response = await fetch(url, options)
    const data = await response.json();
    return data
  } catch (err) {
    return err
  }
}

export default useApi;