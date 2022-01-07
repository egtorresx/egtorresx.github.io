import { writable } from "svelte/store";
import Cookies from 'js-cookie';

const consentValue = Cookies.get("cookieConsent");
const cookieStore = writable(consentValue);

cookieStore.subscribe(value => {
    if (value === 'true' || value === 'false'){
        Cookies.set('cookieConsent', value, { expires: 1 });
    }   
});

export default cookieStore;