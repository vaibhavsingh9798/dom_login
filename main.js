let form = document.getElementById('form')

form.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault()
    let name =  document.getElementById('name').value
    let email = document.getElementById('email').value
    // create error msg 
    let p = document.createElement('p')
    p.appendChild(document.createTextNode('please enter value'))

    // create users itemlist
    let ul = document.getElementById('items')
    ul.style.listStyle = 'none'
    if(name == '' || email == ''){
        console.log(p)
       let parent =  document.getElementById('second-title');
       parent.appendChild(p);
       setTimeout(()=>{
        p.remove()
       },2000)
    }
    else
   {
    // add current user in page
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${name} : ${email}`))
    ul.appendChild(li)

    // add curent user as object in local storege
   
     let objName = {name,email}
    // convert object to string then store
     localStorage.setItem(`${name}`,JSON.stringify(objName))
     // convert string to object then print
     console.log( JSON.parse(localStorage.getItem(name)))

   }
   

   document.getElementById('name').value=''
     document.getElementById('email').value=''
   
}