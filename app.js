document.addEventListener('DOMContentLoaded',() =>{

    const $firstTenant = document.getElementById('first-tenant')
    const $secondTenant = document.getElementById('second-tenant')
    const $thirdTenant = document.getElementById('third-tenant')




    let fetchData1 = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            $firstTenant.innerHTML = `
                <img src="${data.results[0].picture.medium}" class="tenant-img">
                <p class="tenant-name">${data.results[0].name.first} ${data.results[0].name.last}</p>`
        })
    }
    fetchData1('https://randomuser.me/api/')

    let fetchData2 = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            $secondTenant.innerHTML = `
                <img src="${data.results[0].picture.medium}" class="tenant-img">
                <p class="tenant-name">${data.results[0].name.first} ${data.results[0].name.last}</p>`
        })
    }
    fetchData2('https://randomuser.me/api/')

    let fetchData3 = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            $thirdTenant.innerHTML = `
                <img src="${data.results[0].picture.medium}" class="tenant-img">
                <p class="tenant-name">${data.results[0].name.first} ${data.results[0].name.last}</p>`
        })
    }
    fetchData3('https://randomuser.me/api/')

})
// <img src="" class="acommodation-img">