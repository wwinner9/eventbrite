import eventApi from "./eventbrite";

const evtApi = new eventApi();


export default class UI{

    constructor(){
        this.init()
    }

    init(){
        this.loadCat()
    }

    loadCat(){
        const categories=evtApi.getCategories()
        .then(data=>{
            console.log(data)
        })
    }

}
