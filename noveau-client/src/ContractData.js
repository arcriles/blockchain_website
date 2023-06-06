import { useContractRead, useContractWrite } from 'wagmi'
import { contractAddress, jsonABI } from './ABI/donationsABI'
function ContractData() {
    const { data, isError, isLoading } = useContractRead({
        address: contractAddress,
        abi: jsonABI,
        functionName: 'getPictureData',
        args: ['0'],
    });

    if(isLoading){
        return (
            <p>Error!</p>
        )
    }
    if(isError){
        return (
            <p>Error!</p>
        )
    }
    return (
        <div>
            <p>Title: {data.title}</p>
            <p>Download URL: {data.downloadURL}</p>
            <p>Publisher Wallet: {data.publisherWallet}</p>
            <p>Total Value: {data.totalValue}</p>
        </div>
    )
}

export default ContractData