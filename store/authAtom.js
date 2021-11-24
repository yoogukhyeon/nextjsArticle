import {atom} from 'jotai';


const authAtom = atom({
    loaded: false,
    token: null,
    user: null
});


export default authAtom;