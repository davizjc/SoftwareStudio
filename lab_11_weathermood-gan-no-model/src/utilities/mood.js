export function getMoodIcon(group) {
    switch (group) {
        case 'Happy':
            return 'fas fa-smile';
        case 'Sad':
            return 'fa fa-sad-tear';
        case 'Fear':
            return 'fas fa-grimace'
        default:
            return 'fa fa-question-circle';
    }
}

export function getMoodUrl(group) {
    switch (group) {
       // TODO: Set preset pictures. [Ex:./images/faces/(PictureName).(png/.jpg)]
      case 'Happy':
        return './images/faces/happy.jpg';
      case 'Sad':
        return './images/faces/sad.jpg';
      case 'Fear':
        return './images/faces/fear.jpg';
      default:
        return './images/faces/ronaldo.jpg';
    }
}
