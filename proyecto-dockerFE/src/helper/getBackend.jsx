const getBackends = async()=>{
    const url = "http://localhost:8080/api/users";
    const resp = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
    });
    const backends = await resp.json();
    return backends;
};

export default getBackends;