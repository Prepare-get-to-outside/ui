class Calculator2{
    value;

    constructor(){
        this.value = 0;
    }

    get(): number{
        return this.value;
    }

    set(num: number){
        this.value = num;
    }

    add(num: number){
        this.value = this.value + num;
    }

    divide(num:number){
        this.value = this.value / num;
    }
}

export default Calculator2;
// export {};