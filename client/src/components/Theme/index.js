import { fireTheme } from './Fire';
import { waterTheme} from './Water';
import { plantTheme } from './Plant';
import { earthTheme } from './Earth';
import { dittoTheme } from './Ditto';


//function to return the theme based on the label of the img
export const getTheme = (label) => {
    switch (label) {
        case 'fire':
            return fireTheme;
        case 'water':
            return waterTheme;
        case 'plant':
            return plantTheme;
        case 'earth':
            return earthTheme;
        default:
            return dittoTheme;
    }
};
