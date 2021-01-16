const setSrc = ( element ,srcItem) => {
    element.setAttribute("src",srcItem)
}

const getShownId = (element,srcArray)=>{
    srcItem = element.getAttribute("src")
    return parseInt(srcArray.indexOf(srcItem))
}

const nextElementToShow = (imageDiv,srcArray)=>{
    let itemId = getShownId(imageDiv,srcArray) +1
    if(itemId==3)
        setSrc(imageDiv,srcArray[0])
    else
        setSrc(imageDiv,srcArray[itemId])
}

const prevElementToShow = (imageDiv,srcArray)=>{
    let itemId = getShownId(imageDiv,srcArray) -1
    if(itemId==-1)
        setSrc(imageDiv,srcArray[2])
    else
        setSrc(imageDiv,srcArray[itemId])
}

const changeArrayNext = (pictureArray) => {
    pictureArray.unshift( pictureArray.pop() )
}

const changeArrayPrev = (pictureArray) => {
    pictureArray.push( pictureArray.shift() )
}

const render = (elementArray, pictureArray) => {
    for( let i=0; i<elementArray.length; i++ ){
        setSrc(elementArray[i],pictureArray[i])
        elementArray[i].setAttribute("src", pictureArray[i])
    }
}

const renderGoodPics = (goodPics) => {    
    goodPics.forEach((element)=>{
        element.addEventListener("mouseover",(event)=>{
            let gooPicChildren = [...event.target.parentElement.children]
            gooPicChildren.forEach((element)=>{
                if(element.tagName=="DIV"){
                    element.display = "none"
                }
            })
        })
    })
}

const changeNavLinksColor = (event)=>{

    if(event.target.tagName=="A"){
        let navLinkChildren = [...event.target.parentElement.children]
        navLinkChildren.forEach(e=>e.style.color="#D2AA4F")
    }

    else if(event.target.tagName=="DIV"){
        let navLinkChildren = [...event.target.children]
        navLinkChildren.forEach(e=>e.style.color="#D2AA4F")
    }
    
    else if(event.target.tagName=="svg"){
        let navLinkChildren = [...event.target.parentElement.children]
        navLinkChildren.forEach(e=>e.style.color="#D2AA4F")
    }
}

const setNavLinksDefaultColor =(event)=>{

    if(event.target.tagName=="A"){
        let navLinkChildren = [...event.target.parentElement.children]
        navLinkChildren.forEach(e=>e.style.color="#fff")
    }

    else if(event.target.tagName=="DIV"){
        let navLinkChildren = [...event.target.children]
        navLinkChildren.forEach(e=>e.style.color="#fff")
    }
    
    else if(event.target.tagName=="svg"){
        let navLinkChildren = [...event.target.parentElement.children]
        navLinkChildren.forEach(e=>e.style.color="#fff")
    }
}

const changeProductItems = (event)=>{
    let productItemsChildren = [...event.target.parentElement.children]
    productItemsChildren.forEach((e)=>{
        if(e.tagName=="H2" || e.tagName=="DIV"){
            e.style.display = "none"
        }
    })

}

const setProductItemsDefault = (event)=>{
    let productItemsChildren = [...event.target.parentElement.children]
    productItemsChildren.forEach((e)=>{
        if(e.tagName=="H2" || e.tagName=="DIV"){
            e.style.display = "block"
        }
    })

}


let secondPictureArray = [ "./image/barbersho-item-2.jpg","./image/barbershop-item-3.jpg"]
let imageContainerDiv = document.querySelectorAll(".second-image")
let secondPrevButton = document.getElementsByClassName("second-prev-icon")[0]
let secondNextButton = document.getElementsByClassName("second-next-icon")[0]
let navLinks = document.querySelectorAll(".main-nav__item")
let productItems = [...document.querySelectorAll(".product-item")]
let socialMediaAccountsIcon = document.querySelector(".social-media__accounts")
const disappearArrowIcon = document.querySelector(".social-media__accounts-arrow-disappear-icon")
const appearArrowIcon = document.querySelector(".social-media__accounts-arrow-appear-icon")
let goodPics = [...document.querySelectorAll(".good-item-pics")]
let planPics = [...document.querySelectorAll(".plan-item__image")]


render(imageContainerDiv,secondPictureArray)
renderGoodPics(goodPics)

secondPrevButton.addEventListener("click",(event)=>{
    changeArrayPrev(secondPictureArray)
    render(imageContainerDiv,secondPictureArray)
})

secondNextButton.addEventListener("click",(event)=>{
    changeArrayNext(secondPictureArray)
    render(imageContainerDiv,secondPictureArray)
})

navLinks.forEach((element)=>{
    element.addEventListener("mouseover",changeNavLinksColor)
})

navLinks.forEach((element)=>{
    element.addEventListener("mouseout",setNavLinksDefaultColor)
})

productItems.forEach((element)=>{
    element.addEventListener("mouseover",changeProductItems)
})

productItems.forEach((element)=>{
    element.addEventListener("mouseout",setProductItemsDefault)
})

disappearArrowIcon.addEventListener("click",(event)=>{
    socialMediaAccountsIcon.style.display = "none"
    appearArrowIcon.style.display = "block"
    disappearArrowIcon.style.display="none"
    appearArrowIcon.parentElement.setAttribute("style", "left:10px;width:30px;height:30px;");    
})

appearArrowIcon.addEventListener("click",(event)=>{
    socialMediaAccountsIcon.style.display = "flex"
    appearArrowIcon.style.display = "none"
    disappearArrowIcon.style.display="block"
    appearArrowIcon.parentElement.setAttribute("style", "top:270px;left:60px;width: 25px;height: 30px;");    
})

goodPics.forEach((element)=>{
    element.addEventListener("mouseover",(event)=>{
        let goodElementChildren = [...event.target.parentElement.children]
        goodElementChildren.forEach((item)=>{
            if(item.tagName == "DIV"){
                item.style.display = "none"
            }
            else if(item.tagName == "H3"){
                item.style.display = "block"
            }
        })
    })
})

goodPics.forEach((element)=>{
    element.addEventListener("mouseout",(event)=>{
        let goodElementChildren = [...event.target.parentElement.children]
        goodElementChildren.forEach((item)=>{
            if(item.tagName == "DIV"){
                item.style.display = "block"
            }
            else if(item.tagName == "H3"){
                item.style.display = "none"
            }
        })
    })
})

planPics.forEach( (element) => {
    element.addEventListener("mouseover",(event)=>{
        let planItemChildren = [...event.target.parentElement.children]
        planItemChildren.forEach((item)=>{
                if(item.tagName=="P"){
                    item.style.display = "block"
                }
        })
    })
})

planPics.forEach( (element) => {
    element.addEventListener("mouseout",(event)=>{
        let planItemChildren = [...event.target.parentElement.children]
        planItemChildren.forEach((item)=>{
                if(item.tagName=="P"){
                    console.log("out")
                    console.log(item.style.display)
                    item.style.display = "none"
                    console.log(item.style.display)

                }
        })
    })
})

