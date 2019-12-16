//Via window event
// window.hash.onCryptoTransferError = (res) => {
//     console.log('Main :: onCryptoTransferError:::',res);
// }

// window.hash.onCryptoTransferSuccess = (res) => {
//     console.log('Main :: onCryptoTransferSuccess:::',res);
// }

// window.hash.onSmartContractError = (res) => {
//     console.log('Main :: onSmartContractError:::',res);
// }

// window.hash.onSmartContractSuccess = (res) => {
//     console.log('Main :: onSmartContractSuccess:::',res);
// }

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('popup-button').addEventListener('click',(e) => {

        e.preventDefault();
        let data = {
            time:"1",
            memo:"My First Hedera Transaction",
            contentid:'test1',
            redirect:'{"nonPayingAccount": "/nomicropaymentreceived.html"}',
            recipientlist:'[{"tinybars": "444", "to":"0.0.1107"}]',
            type:'article'
        }

        window.hash.triggerCryptoTransfer(data, (err, res) => {
            console.log("Callback::Error:", err)
            console.log("Callback::Response:", res)
        });

    });

    document.getElementById('contract-button').addEventListener('click',(e) => {
        e.preventDefault();

        let data = {
            contractid:"0.0.140062",
            memo:"Depositing Token",
            params:'["FIXED","1"]',
            amount:0,
            abi:`[{"constant":false,"inputs":[{"name":"symbolName","type":"string"},{"name":"amountTokens","type":"uint256"}],"name":"depositToken","payable":false,"stateMutability":"nonpayable","type":"function"}]`
        }


        window.hash.triggerSmartContract(data)
        .then(res => console.log('Promise:::Resolve::', res))
        .catch(err => console.log("Promise::Error::", err))

    })

    document.getElementById('getBalance-button').addEventListener('click',(e) => {
        e.preventDefault();
        getBalance();
        async function getBalance(){
          let data = {
              contractid:"0.0.140062",
              memo:"Depositing Token",
              params:'["FIXED"]',
              amount:0,
              abi:`[{"constant":false,"inputs":[{"name":"symbolName","type":"string"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]`
          }



          await window.hash.triggerSmartContract(data)
          .then(res => console.log('Promise:::Resolve::', res))
          .catch(err => console.log("Promise::Error::", err))
        }

    })

    document.getElementById('getBuyOrderBook-button').addEventListener('click',(e) => {
        e.preventDefault();
        getBuyOrderBook();
        async function getBuyOrderBook(){
          let data = {
              contractid:"0.0.140062",
              memo:"Getting Buy Order Book",
              params:'["FIXED"]',
              amount:0,
              abi:`[{"constant":false,"inputs":[{"name":"symbolName","type":"string"}],"name":"getBuyOrderBook", "outputs":[{"name":"","type":"uint256[]"},{"name":"","type":"uint256[]"}], "payable":false,"stateMutability":"nonpayable","type":"function"}]`
          }



          var res = await window.hash.triggerSmartContract(data)
          console.log(res);
          document.getElementById("test1").innerHTML = JSON.stringify(res);
        }

    })

    document.getElementById('account-button').addEventListener('click',(e) => {
        e.preventDefault();

        window.hash.triggerCheckBalance()
        .then(res => console.log('Promise:::Resolve::', res))
        .catch(err => console.log("Promise::Error::", err))
    })

});
