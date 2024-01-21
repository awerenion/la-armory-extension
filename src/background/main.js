import axios from "axios";
import * as API from "../constants/ApiRef";
import fetchAdapter from "@vespaiach/axios-fetch-adapter";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === 'load-character-info') {
        axios.request({
            method: 'get',
            url: API.ARMORY_URL + request.name,
            adapter: fetchAdapter
        })
            .then(response => {
                let level = response.data
                    .split('<span>Уровень персонажа</span><span><small>Ур.</small>')[1]
                    .split('</span></div>')[0]
                let gscore = response.data
                    .split('<span>Максимальный рейтинг</span><span><small>Ур.</small>')[1]
                    .split('</small></span></div>')[0]
                    .replace('<small>', '')
                    .replace(',', '')
                    .replace('.00', '');
                sendResponse({
                    name: request.name,
                    gs: gscore,
                    level,
                });
            })
            .catch(error => console.error(error))
    }
    return true;
});
