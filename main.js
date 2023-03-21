let form = document.getElementById('form')

form.addEventListener('submit',onSubmit)

let count = 0;
function onSubmit(e){
    e.preventDefault()
    let name =  document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
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
    li.appendChild(document.createTextNode(`${name} : ${email} - ${phone}`))
    ul.appendChild(li)

    // add curent user as object in local storege
   
     let objName = {name,email,phone}
    // convert object to string then store
     localStorage.setItem(`${email}`,JSON.stringify(objName))
     // convert string to object then print
     console.log( JSON.parse(localStorage.getItem(email)))
     console.log(localStorage.key(3))
     count++
   }
     document.getElementById('name').value=''
     document.getElementById('email').value=''
     document.getElementById('phone').value=''
 
}
if(count == 0){
  for(let i=1;i<10;i++){
    let key = localStorage.key(i)
    if(!key)
    break;
    let data = JSON.parse(localStorage.getItem(key))
    let name = data.name;
    let email = data.email;
    let phone = data.phone;
    let ul = document.getElementById('items')
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(`${name} : ${email} - ${phone}`))
    ul.appendChild(li) 
  }
}