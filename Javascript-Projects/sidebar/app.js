const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sideBar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', function() {
    sideBar.classList.toggle('show-sidebar')
    
    // or
    // if(sideBar.classList.contains('show-sidebar')) {
    //     sideBar.classList.remove('show-sidebar')
    // } else {
    //     sideBar.classList.add('show-sidebar')
    // }
})

closeBtn.addEventListener('click', function() {
    sideBar.classList.remove('show-sidebar')
})