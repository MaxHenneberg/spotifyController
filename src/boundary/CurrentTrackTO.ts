export class CurrentTrackTO {
    item:{
        id:string
    }
    constructor(json?: any) {
         this.item = json.item;
    }
}
