import {} from 'i18n-js';
import { exp } from 'react-native/Libraries/Animated/src/Easing';



const de= {
        Home : "Ev"
};
const tr= {
        Home : "Ev"
};
const en= de;

i18n.fallbacks = true;
i18n.translations = {de , tr , en}

export{
    i18n
}