import js from "@eslint/js";

const getStoredBook =() =>{
 const storedBookSTR=localStorage.getItem("readList");
 if(storedBookSTR)
    { const storedBookData =JSON.parse (storedBookSTR);
          return storedBookData;
 }
 else{
    return[]
 }
}
const addToStoredDB =(id) =>{
  const storedBookData =getStoredBook();
  console.log(storedBookData);
  if(storedBookData.includes(id)){
    alert("Bhai ei id already exits")
  }
  else{
    storedBookData.push(id);
    const data =JSON.stringify(storedBookData)
    localStorage.setItem("readlist",data)
  }
}
export {addToStoredDB,getStoredBook}