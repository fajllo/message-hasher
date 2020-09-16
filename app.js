
const input = document.querySelector('#encrypt');
const text = document.querySelector('#code');
const link = document.querySelector("#link");
const copy = document.querySelector('.copy');
document.querySelector("form").addEventListener('submit',(event)=>{
    event.preventDefault()
    const share = document.querySelector('.share');
    link.value = `${window.location}#${btoa(input.value)}`
    copier.innerText = 'COPY!'
    share.classList.remove('hide')
    
})

input.addEventListener('input',(event) => {
    text.value =btoa(event.target.value);
    
});

function copyMe(){
    copy.select()
    copy.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
const copier = document.querySelector(".copier")
copier.addEventListener('click',(event) =>{
    copyMe();
    event.target.innerText = "Copied!"
    
})