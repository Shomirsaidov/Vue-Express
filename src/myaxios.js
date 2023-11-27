export default async (url,method) => {
        try {
          
          const headers = {}
          headers['Access-Control-Allow-Origin'] = '*'
          headers['Access-Control-Allow-Credentials'] = 'true'
          headers['Content-Type'] = 'application/json'
          const response = await fetch(url, {
            method,
            headers
          })
          let v = await response.json();
          return v;
        }
        catch (e) {
          console.warn(e.message);
        }
}

