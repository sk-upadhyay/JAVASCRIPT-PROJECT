const container = document.getElementById('content');
const button = document.querySelector('.btn');
const item = document.querySelector('.items');


button.addEventListener('click',() =>{
    if(container.value!=""){
        let list = document.createElement('li');
        list.appendChild(document.createTextNode(container.value));
        item.appendChild(list);
        container.value="";

        list.onclick = function(){
            this.parentNode.remove;
        }
    }
});
