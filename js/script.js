document.querySelector('.menu-btn').addEventListener('click',() => {
    document.querySelector('.menu-btn').classList.toggle('active')
    document.querySelector('.header-menu').classList.toggle('active')
})
document.querySelectorAll('.header-menu-item').forEach((onelink) =>{
    onelink.addEventListener('click',() => {
    document.querySelector('.menu-btn').classList.toggle('active')
    document.querySelector('.header-menu').classList.toggle('active')
})
})