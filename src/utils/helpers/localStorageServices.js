export const save = (key, value)=>{
    let data = JSON.stringify(value);
    localStorage.setItem(key, data)
    return value;
}

export const getData = (key)=>{
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
}