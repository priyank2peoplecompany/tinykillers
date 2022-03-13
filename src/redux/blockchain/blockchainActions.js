// constants
import Web3 from "web3";
import SmartContract from "../../contracts/TinyKiller.json";
// log
import { fetchData } from "../data/dataActions";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    if (window.ethereum) {
      let web3 = new Web3(window.ethereum);
      console.log("web3==========>",web3);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        web3.eth.getBalance(accounts[0], function(err, balance) {
          console.log("balance before------>",balance);  
          balance = web3.utils.fromWei(balance, "ether") + " ETH"
          localStorage.setItem('ETH', balance)
          console.log("balance after------>",balance);  
        });
      

        const networkId = await window.ethereum.request({
          method: "net_version",
        });
        //const NetworkData = await SmartContract.networks[networkId];
        if (networkId == 4) {
          console.log("===>",SmartContract.abi);
          const SmartContractObj = new web3.eth.Contract(
            SmartContract.abi,
            //NetworkData.address,
            "0xa763a34dc55659878a447d639a27d622d3ca83c5"
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          window.ethereum.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed("Change network to ether."));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
