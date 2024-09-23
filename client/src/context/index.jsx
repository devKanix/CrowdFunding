import React, {useContext, createContext} from 'react';
import {useAddress, useContract, useMetamask, useContractWrite} from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({children})=> {
    const {contract} = useContract('0xF03dbdB83Ff7cf5f7575009666b0cb1556BFE4CF');
    const {mutateAsync: createCampaign} = useContract(contract, 'createCampaign');
    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address,
                form.title,
                form.description,
                form.image,
                new Date(form.deadline).getTime(),
                form.target,

            ])
            console.log("contract call success", data);
        } catch (error) {
            console.log("contract call failed", error);
        }
    }
    return  (
        <StateContext.Provider 
            value={{address,
                contract,
                createCampaign: publishCampaign }}>
                {children}
        </StateContext.Provider>
    )
}

export  const useStateContext = ()=> useContext(StateContext);
