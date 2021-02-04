import axios from 'axios';
const KEY="AIzaSyA9QsE-fCjdziK9_s310T7xOqOIAdloZDg";
export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    maxResult:5,
    key:KEY
}
})