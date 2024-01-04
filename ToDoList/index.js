const container = document.querySelector('#content');
const button = document.querySelector('btn');
const item = document.querySelector('items');


button.addEventListener('click',(e)=>{
    item.innertext = container.value;
});
