/**
 * Return different emojis which represent three types of mood respectively
 * @param  {String} group The mood (Happy/Sad/Fear)
 * @return {String}       The icon
 */
export function getMoodIcon(group) {
    switch (group) {
        // more icons can be found at https://fontawesome.com/icons
        case 'Happy':
            return 'fas fa-smile'; 
        case 'Sad':
            return 'fas fa-frown'; 
        case 'Fear':
            return 'fas fa-grimace'; 
        default:
            return 'fas fa-fish';
    }
}

