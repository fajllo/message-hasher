
const input = document.querySelector('#encrypt');
const text = document.querySelector('#code');
const link = document.querySelector("#link");
const copy = document.querySelector('.copy');
const massage =document.querySelector("#massage");
const encode = document.querySelector(".encode");
const show = document.querySelector(".show");
document.querySelector("form").addEventListener('submit',(event)=>{
    event.preventDefault()
    const share = document.querySelector('.share');
    link.value = `${window.location}#${btoa(input.value)}`
    copier.innerText = 'COPY!'
    share.classList.remove('hide')
    
})

input.addEventListener('input',(event) => {
    text.value = btoa(event.target.value);
    massage.classList.remove("hide")
    
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
const hash = window.location.hash.split("#");
console.log(hash[hash.length -1])
if(hash[hash.length -1]){
    encode.classList.remove("hide")
    show.value = atob(hash[hash.length -1])

}