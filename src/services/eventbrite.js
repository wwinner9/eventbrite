
export default class eventApi {
    constructor(){
        this.token='Y26CFNKLHWAPZ3JMLCMH'
        this.url= 'https://www.eventbriteapi.com/v3'
    }

    async getCategories(){
    
        //const resp = await api.get(`/categories/?token=${this.token}`)

        const evtCategories = await fetch(`${this.url}/events/listed/?token=${this.token}`)
        
        const categories =await evtCategories.json();

        return {
            categories
        }
    }




}