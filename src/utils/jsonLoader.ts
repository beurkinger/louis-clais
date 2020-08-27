export const loadJson = <T>(
  url: string,
  method: 'GET' | 'POST' = 'GET',
  body: Record<string, unknown> = {}
): Promise<T | null | undefined> =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = () => {
      if (request.status === 200) {
        try {
          const response = JSON.parse(request.responseText);
          resolve(response);
        } catch (e) {
          reject(`Error parsing JSON: ${e.message}`);
        }
      } else {
        reject(`Error ${request.status}: ${request.statusText}`);
      }
    };
    request.onerror = () => {
      reject(`Error: network issue`);
    };
    request.ontimeout = () => {
      reject(`Error: timeout`);
    };
    request.send(JSON.stringify(body));
  });
