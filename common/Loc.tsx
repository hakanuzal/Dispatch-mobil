import i18n from 'i18n-js';
import { exp } from 'react-native/Libraries/Animated/src/Easing';



const de= {
        Home : "Password",
        Accept: "Accept",
        PassPlaceHolder:"Password ",
        PassErr:"Wrong password",
        AllPass:"All Password"
};
const tr= {
        Home : "Sifreler",
        Accept: "Kabul",
        PassPlaceHolder:"Sifrenizi griiniz ",
        PassErr:"Hatalı Sifree",
        AllPass:"Tüm Sifreler"
};
const en = de;

i18n.fallbacks = true;
i18n.translations = {de , tr , en}

export{
    i18n
}