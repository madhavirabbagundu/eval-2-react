import React from "react";
function Details(){
    const [Product,setProduct] = React.useState({
    title : "",
    gender :"",
     price:"",
     category:""
})
const [Todo,setTodos] = React.useState([])
React.useEffect(()=>{
    fetch(`http://localhost:3000/Product`)
    .then((res)=>res.json())
    .then((res)=>setTodos(res))
    .catch((err)=>console.log(err));
    

  },[])

    
    const setProduct1 = (e) =>{
        const {name,value} = e.target;
    //   setProduct(e.target.value)
    setProduct({...Product, [name]:value})

    }

    const handleChange=(e)=>{
        e.preventDefault()
        // console.log(Product)

    

      fetch(`http://localhost:3000/Product`,{
         method:"POST",
         body:JSON.stringify(Product),
         headers:{
             "Content-type":"application/json"
         }
     })
     .then((res)=>res.json())        //data is stored on the page
     .then((res)=>console.log(res));
     }



   
const {title,price,category,gender} = Product;

return(
    <>
    {/* <h1>hello my dear</h1> */}
    <form onSubmit = {handleChange}>
        <input type = "text" 
        placeholder="enter the title" 
        onChange = {setProduct1}
        name = "title"
        value = {title}/>
        <br/>

        <input type = "text" 
        placeholder="enter the price" 
        onChange = {setProduct1}
        name = "price"
        value = {price}/>
        <br/>

        <select gender onChange = {setProduct1} value = {gender} name = "gender">
            <option>male</option>
            <option>female</option>
        </select>

        <input type = "text" 
        placeholder="enter the category" 
        onChange = {setProduct1}
        name = "category"
        value = {category}/>
        <br/>
        <input type = "submit"
        value = "Submit"/>
    </form>
    <div className = "Table"> {Todo.map((item)=>(
      <div className = "title"><h1>{item.title}</h1>
      <h1>{item.price}</h1>
      <h1>{item.gender}</h1>
      <h1>{item.category}</h1>
      </div>
      ))}</div>
    </>
)
}
export {Details}