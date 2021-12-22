export class TrackAudioAnalysisTO {
    track:{
        tempo: number
    }
    constructor(json?: any) {
        this.track = json.track;
    }
}
