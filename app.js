document.querySelector("form").addEventListener('submit',(event)=>{
    event.preventDefault()

    const input = document.querySelector('#encrypt')
    console.log(input.value)
})
const input = document.querySelector('#encrypt');
const text = document.querySelector('#code');
const link = document.querySelector("#link");

input.addEventListener('input',(event) => {
    text.value =btoa(event.target.value);
    
});