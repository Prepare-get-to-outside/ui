import { makeAutoObservable } from 'mobx';

class Store { 
    activeStep: number = 0;
    foodTypeId: number = 0;
    resName: string = "";
    mainAddr: string = "";
    detailAddr: string = "";
    shareList: string[] = [];
    price: number = 0;
    tagList: Tag[] = [];
    memo: string = "";

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

    setShareId = (list: string[]) => {
        this.shareList = list;
    }

    setPrice = (price: number) => {
        this.price = price;
    }

    setTagList = (tagList: Tag[]) => {
        this.tagList = tagList;
    }

    setMemo = (memo: string) => {
        this.memo = memo;
    }
}

const store = new Store();
export default store;