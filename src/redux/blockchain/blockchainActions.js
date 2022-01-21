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
            //"0x65896BECFbfBD149122a948E91e535294E122C57"
            //"0x8370c3954d608A5e1C71c61909E5c4C2bEb9c439" --
            "0x076fb71a63dcf62606956df4393f5287c25a5250"
            //"0xe4478966f04f732c4abdf38b185235b7b8ea003b"
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
