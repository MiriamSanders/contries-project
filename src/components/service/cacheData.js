import fetchData from "./service";

export default async function persistToLocalStoragePixa(catagory,url)
{
 if(localStorage.getItem(catagory))
    return JSON.parse(localStorage.getItem(catagory));
else{
    let res= await fetchData(url);
    localStorage.setItem(catagory,JSON.stringify(res));
}
}