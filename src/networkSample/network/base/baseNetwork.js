import { axiosInstance } from "../axiosInstance/axiosInstance"



export const baseNetwork = {



    getAll: async (url) => {

        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                if (res.status == 200) {
                    responseData = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })


        return responseData;



    },
    getById: () => {

    },
    add: async (url,obj) => {
        let responseData = {};
        await axiosInstance.post(url,obj)
        .then(res => {
            if (res.status == 200) {
                responseData = res.data;
            }
            else {
                throw "custom error"
            }
        })
        .catch(err => {
            throw err
        })
         console.log(responseData);
    },
    update: (id) => {

    },
    delete: async (url,id)=>{
        await axiosInstance.delete(url.concat("/").concat(id) )
        .then(res => {
            if (res.status == 200) {
            }
            else {
                throw "custom error"
            }
        })
    }

}