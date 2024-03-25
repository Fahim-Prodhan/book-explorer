// Read Store
const getStoredRead = ()=>{
    const storeReadString = localStorage.getItem('read');
    if(storeReadString) {
        return JSON.parse(storeReadString)
    }
    return []
}


const addReadToLS = id =>{
    const existingRead = getStoredRead();
    existingRead.push(id);
    saveReadToLS(existingRead)
}

const saveReadToLS = existingRead =>{
    const readStringified = JSON.stringify(existingRead)
    localStorage.setItem('read', readStringified)
}

// Wish Store
const getStoredWish = ()=>{
    const storeWishString = localStorage.getItem('wish');
    if(storeWishString) {
        return JSON.parse(storeWishString)
    }
    return []
}


const addWishToLS = id =>{
    const existingWish = getStoredWish();
    existingWish.push(id);
    saveWishToLS(existingWish)
}

const saveWishToLS = existingWish =>{
    const wishStringified = JSON.stringify(existingWish)
    localStorage.setItem('wish', wishStringified)
}

export {getStoredRead,addReadToLS,saveReadToLS,getStoredWish,addWishToLS,saveWishToLS}