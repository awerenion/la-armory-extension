import axios from "axios";
import * as API from "../constants/ApiRef";
import fetchAdapter from "@vespaiach/axios-fetch-adapter";
import { CLASS_TABLE } from "../constants/ClassTable";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === 'load-for-class') {
        axios.request({
            method: 'post',
            url: API.LOST_ARK_URL,
            adapter: fetchAdapter,
            data: {
                id: 1,
                jsonrpc: "2.0",
                method: "avatarRating_getRatingByClass",
                params: {
                    class: CLASS_TABLE[request.message].toString()
                }
            }
        }).
            then(response => {
                const findCharacter = response.data.result.find((item) => item.nickname === request.nickname);
                sendResponse({ placement: findCharacter ? findCharacter.place : null});
            })
            .catch(error => console.error(error))
    }
    if (request.type === 'load-character-info') {
        axios.request({
            method: 'get',
            url: API.ARMORY_URL + request.name,
            adapter: fetchAdapter
        })
            .then(response => {
                let gscore = response.data
                    .split('<span>Максимальный рейтинг</span><span><small>Ур.</small>')[1]
                    .split('</small></span></div>')[0]
                    .replace('<small>', '')
                    .replace(',', '')
                    .replace('.00', '');
                
                sendResponse({
                    name: request.name,
                    gs: gscore,
                });
            })
            .catch(error => console.error(error))
    }
    return true;
});
