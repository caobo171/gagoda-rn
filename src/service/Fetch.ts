import axios, { AxiosPromise } from 'axios'


class Fetch {

    __mainUrl = 'http://35.187.240.92:8089/'
  
    async get<ResponseType>(url: string): Promise<AxiosPromise<ResponseType>>{
        const res = await axios.get(url);

        //@ts-ignore
        return res;
    }
}

export default new Fetch();