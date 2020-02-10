export function getData() {
    return fetch(`/api/todos`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.error(error));
}

export function postData(url = '', data = {}) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json());
}
