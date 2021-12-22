import {CurrentTrackTO} from "./CurrentTrackTO";
import axios, {AxiosResponse} from "axios";
import {TrackAudioAnalysisTO} from "./TrackAudioAnalysisTO";

export class SpotifyService {
    public async fetch() {

    }

    public getBPM(): void {
        this.getCurrentTrackId()
            .then(trackId => this.getTrackInfoById(trackId)
                .then(result => new TrackAudioAnalysisTO(result.data))
                .then(track => axios.post('http://192.168.178.20:3000/bpm', {bpm: track.track.tempo})));
    }

    private getCurrentTrackId(): Promise<string> {
        return axios.get('https://api.spotify.com/v1/me/player', {
            headers: {
                'Authorization':
                    'Bearer '
            }
        }).then(result => new CurrentTrackTO(result.data)).then(track => track.item.id);
    }

    private getTrackInfoById(trackId: string): Promise<AxiosResponse> {
        return axios.get('https://api.spotify.com/v1/audio-analysis/' + trackId, {
            headers: {
                'Authorization':
                    'Bearer '
            }
        });
    }


}
