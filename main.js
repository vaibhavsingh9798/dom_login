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

    // add curent user in local storege
     localStorage.setItem(`${name}`,`${name}:${email}`)
     console.log(localStorage.getItem(name))

   }

   document.getElementById('name').value=''
     document.getElementById('email').value=''
   
}