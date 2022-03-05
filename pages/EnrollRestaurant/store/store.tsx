import { makeAutoObservable } from 'mobx';

class Store { 
    activeStep: number = 0;
    foodTypeId: number = 0;
    resName: string = "";
    mainAddr: string = "";
    detailAddr: string = "";
    shareId: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setActiveStep = (step: number) => {
        this.activeStep = step;
    }

    setFoodTypeId = (foodTypeId: number) => {
        this.foodTypeId = foodTypeId;
    }

    setResName = (name: string) => {
        this.resName = name;
    }

    setMainAddrName= (name: string) => {
        this.mainAddr = name;
    }
    
    setDetailAddrName = (name: string) => {
        this.detailAddr = name;
    }

    setShareId = (id: number) => {
        this.shareId = id;
    }
}

const store = new Store();
export default store;