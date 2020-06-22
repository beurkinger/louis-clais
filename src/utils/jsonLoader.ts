export const loadJson = (url: string) => new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
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
    }
    request.send();
});