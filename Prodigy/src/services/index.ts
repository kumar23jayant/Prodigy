import axios from 'axios'

export function getBanners(success: (response: any) => void, failure: (error: any) => void) { 
    axios.get('http://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true')
    .then(success)
    .catch(failure)
}