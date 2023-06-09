let form = document.getElementById('form')
form.addEventListener('submit',onSubmit)

// select and applay listener for del button
let items = document.getElementById('items')
items.addEventListener('click',delItem)
items.addEventListener('click',editItem)

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
    li.appendChild(document.createTextNode(`${name} :- ${email} :- ${phone}`))
      // craete delete button 
  let delBtn = document.createElement('button')
  delBtn.appendChild(document.createTextNode('x'))
  delBtn.setAttribute('class','delbtn float-right mb-1')
    li.appendChild(delBtn)
    ul.appendChild(li)

    // create  edit button 
       let editBtn = document.createElement('button')
       editBtn.appendChild(document.createTextNode('edit'))
       editBtn.setAttribute('class','edit float-right mr-1')
       li.appendChild(editBtn)
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

// get element from local storage if refresh page
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
    let delBtn = document.createElement('button')
  delBtn.appendChild(document.createTextNode('x'))
  delBtn.setAttribute('class','delbtn float-right mb-1')
    li.appendChild(delBtn)
    li.appendChild(document.createTextNode(`${name} :- ${email} :- ${phone}`))
    ul.appendChild(li) 

    // add edit button
     let editBtn = document.createElement('button')
       editBtn.appendChild(document.createTextNode('edit'))
       editBtn.setAttribute('class','edit float-right mr-1')
       li.appendChild(editBtn)
  }
}

// delete item
function delItem(e){
  e.preventDefault();
  if(e.target.getAttribute('class') == 'delbtn float-right mb-1')
  {
    let curNode = e.target.parentElement;
    // remove from local storage
    let emailKey = curNode.textContent.split(':-')[1].trim()
    localStorage.removeItem(emailKey)
     // remove from page 
     curNode.remove()
  }
}

 // edit item 
function editItem(e){
  e.preventDefault();
  if(e.target.getAttribute('class') == 'edit float-right mr-1')
  {
      
    let curNode = e.target.parentElement;
    // get key 
    let emailKey = curNode.textContent.split(':-')[1].trim()
    // get data from local storage
     let data = JSON.parse(localStorage.getItem(emailKey))
     let name = data.name;
     let email = data.email;
     let phone = data.phone;
     console.log(name,email,phone)

     // set data to input field
     document.getElementById('name').value=name;
     document.getElementById('email').value=email;
     document.getElementById('phone').value=phone;

     // remove from local storage
    localStorage.removeItem(emailKey)
     // remove from page 
     curNode.remove()
  
  }
}
