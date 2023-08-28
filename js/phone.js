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
                <p>${phone.slug}</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>
         `
         phn.appendChild(phoneCard)
    });
    lodinngSpenner(false)

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
