var ul = document.getElementById('list');
let li;

let addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

let removeButton2 = document.getElementById('remove2');
removeButton2.addEventListener('click', removeItem1);

function addItem() {

    let input = document.getElementById('input');
    let item = input.value;
    const ul = document.getElementById('list');
    let textnode = document.createTextNode(item)

    if (item === '') {
        alert("You must write something!")
        
        
    } else {
        //Create li
        li = document.createElement('li')

        //Create checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        // create label
        let label = document.createElement('label')
        // lable.setAttribute('for','item')// optional

        //add this alement on web page
   
        console.log(label)
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        li.className = 'visual';
 

        input.value = ''
    }

}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function removeItem1() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0]) {
            ul.removeChild(li[index])
        }
    }
}
