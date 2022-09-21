import React, { useEffect, useState } from 'react'
import { supplierNetwork } from '../network/requests/supplierNetwork';

function SupplierTable() {

    const [suppliers, setsuppliers] = useState([]);


    useEffect(() => {

        supplierNetwork.getAllSuppliers()
            .then(data => {
               
                setsuppliers(data);
            })

    }, [])



    return (<>
    <button onClick={()=>{supplierNetwork.postSupplier({name:"emil",surname:"Hajizade"})}}>Post obj</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th> Option</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map((item, key) => {
                        return <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td onClick={()=>{supplierNetwork.deleteSupplier(item.id)}}>DELETE</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
    )
}

export default SupplierTable