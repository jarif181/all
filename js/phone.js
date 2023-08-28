const loadPhone = async (searchText,isshowAll) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const all = data.data
    displayPhones(all,isshowAll)
}


const displayPhones = (phones,isshowAll) =>{
    const phn = document.getElementById('cointaner')
    phn.textContent = '';
      const phnShowAll = document.getElementById('Show-All');

      console.log("show all", isshowAll)
      if(phones.length > 12 && !isshowAll){
        phnShowAll.classList.remove('hidden')
    }
    else{
        phnShowAll.classList.add('hidden')
    }

   if(!isshowAll){
    phones = phones.slice(0,12)
   }

    

    phones.forEach(phone => {
         const phoneCard = document.createElement('div')
         phoneCard.classList = `card p-2 md/lg:p-10 bg-gray-100 shadow-xl`;
         phoneCard.innerHTML =`
                <figure><img src="${phone.image}" /></figure>
                <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis qui ipsa animi, aperiam vero quos vitae tempora, 
                </p>
                <div class="card-actions justify-center">
                    <button onclick="showDetail('${phone.slug}') ;" class="btn btn-primary">Show Details</button>
                </div>
                </div>
         `
         phn.appendChild(phoneCard)
    });
    lodinngSpenner(false)

}
const showDetail = async (id) =>{
   
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json();
    const allda = data.data
    console.log(allda)
    dataAllPhone(allda)

}
 
const dataAllPhone = (phone) => {
    modalClick.showModal()
    const setName= document.getElementById('allDetailsPhone')
                setName.innerHTML = `
                <img class="mb-2 md/lg:mb-5" src="${phone.image}" alt="">
                <h3 class="text-2xl mb-2">${phone.name}</h3>
                <p><span class="text-xl mb-1">Brand: </span>${phone.brand}</p>
                <p><span class="text-xl mb-1">Storage: </span>${phone.mainFeatures.storage}</p>
                <p><span class="text-xl mb-1">Display Size: </span>${phone.mainFeatures.displaySize}</p>
                <p><span class="text-xl mb-1">Chipset : </span>${phone.mainFeatures.chipSet}</p>
                <p><span class="text-xl mb-1">Memory: </span>${phone.mainFeatures.memory}</p>
                <p><span class="text-xl mb-1">Slug: </span>${phone.slug}}</p>
                <p><span class="text-xl mb-1">Release data: </span>${phone.releaseDate}</p>
                <p><span class="text-xl mb-1">Gps: </span>${phone.others?.GPS || "No Gps Avelible"}</p>

                `
}



const search = (isshowAll) => {
    lodinngSpenner(true)
    const searchFild = document.getElementById('Search');
    const searchText = searchFild.value;
    loadPhone(searchText ,isshowAll)
}


const lodinngSpenner = (isLoading) => {
    const lodinng = document.getElementById('loading');
    if(isLoading){
        lodinng.classList.remove('hidden')
    }
    else{
        lodinng.classList.add('hidden')
    }
}

const showAll = () =>{
    search(true)
}
