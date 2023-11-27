const postBackends = async(name)=>{

    const requestOptions = {
        method: "POST",
        headers: {"content-type" : "application/json"},
        body: JSON.stringify({name})
    }

    const url = "http://localhost:8080/api/users";
    const resp = await fetch(url, requestOptions);
    const backends = await resp.json();
    return backends;
};

export default postBackends;