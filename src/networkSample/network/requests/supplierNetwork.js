import { baseNetwork } from "../base/baseNetwork"


export const supplierNetwork = {
    getAllSuppliers : () => {

        return baseNetwork.getAll("suppliers")
  

    },
    postSupplier : (obj)=>{
        return baseNetwork.add("suppliers",obj)
    },
    deleteSupplier : (id)=>{
        return baseNetwork.delete("suppliers",id)
    }
}