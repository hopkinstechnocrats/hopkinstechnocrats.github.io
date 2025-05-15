import React from 'react'

function FormToSheet() {
    const handleSubmit =(e)=>{
        e.preventDefault()
        const url = "https://script.google.com/macros/library/d/1YdArv73uzwUk80aAux287mac1jnzFhU9Jpda2aQkmP5oei9l4jzz8Nou/1"
        fetch(url,{
        method:"POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: (`Name= ${e.terget.name.value}&Email=${e.terget.email.value}`)
   }).then(res=>res.text()).then(data=>{
    alert(data)
   }).catch(error=>console.log(error))
}

return(
<div>
        <h1>React to sheet</h1>
        <form onSubmit={handleSubmit}>
        <input name='name' placeholder='Name 1' /><br/>
        <input name='email' placeholder='Email 1'/><br/>
        <button>Add</button>
    </form>
</div>
    )
}
export default FormToSheet