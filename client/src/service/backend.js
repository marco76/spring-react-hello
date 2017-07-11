const url = 'http://localhost:8080';

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  'Accept': 'application/json',
  'Authorization': token,
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
};

export const getJson = () => {
    return fetch(`${url}/hello-world`, {headers})
        .then(res => {
             return res.json()
        })
        .then(data => {
            console.log(data);
            return data.message;

        });
};
