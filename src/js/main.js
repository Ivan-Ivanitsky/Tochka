window.addEventListener('DOMContentLoaded',()=>{
    console.log('Hello Tochka Tochka')

       const  cargo = document.querySelectorAll ('.list'),
              select = document.querySelectorAll ('.select'),
              dropDown = document.querySelectorAll ('.dropdown'),
              list  = document.querySelectorAll('li');

    function open(selector,link,dropArrow,activeList,activeDrop){
        selector.forEach((item,i)=>{
            item.addEventListener('click',(e)=>{
                const target = e.target
                if(target && !link[i].classList.contains(activeList) && ! dropArrow[i].classList.contains(activeDrop)){
                    close(cargo,'activeList')
                    close(dropDown,'activeDrop')
                    link[i].classList.add(activeList)
                    dropArrow[i].classList.add(activeDrop)
                }
                else if(target && link[i].classList.contains(activeList) &&  dropArrow[i].classList.contains(activeDrop)){
                    close(cargo,'activeList')
                    close(dropDown,'activeDrop')
                }
            })

        })
    }


    function addListItem(listEl,link,selector,activeClass){
        listEl.forEach(elem=>{
            elem.addEventListener('click',()=>{
                link.forEach((item,i)=>{
                    if(item.classList.contains(activeClass)){
                        selector[i].innerHTML = elem.innerText;
                        selector[i].style.color = 'black';
                        close(cargo,'activeList')
                        close(dropDown,'activeDrop')
                    }
                })
            })
        })
    }

 

    function close(selector,active){
        selector.forEach(item =>{
            item.classList.remove(active)
        })
    }


    open(select,cargo,dropDown,'activeList','activeDrop')
    addListItem(list,cargo,select,'activeList')
})
