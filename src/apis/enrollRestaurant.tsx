
const DEFAULT_URL = 'http://localhost:4000';

export async function getAllRestaurants(){
    const url = DEFAULT_URL + "/rest";
    
    try{
        const response = await fetch(url);

        if(response.ok){
            return await response.json();
        }else{
            throw new Error(`HTTP getAllRestaurants Error status : ${response.status}`);
        }
    }catch(e){
        console.log('Error', e);
    }

}

export async function enrollRestaurant(params: RestaurantInfo) {
    const url = DEFAULT_URL + "/rest";

    try{
        const response = await fetch(url, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json;charset=utf-8' }, 
            body: JSON.stringify(params)
        });

        if(response.ok){
            return await response.json();
        }else{
            throw new Error(`HTTP enrollRestaurant Error status : ${response.status}`);
        }
    }catch(e){
        console.log('Error', e);
    }
    
}