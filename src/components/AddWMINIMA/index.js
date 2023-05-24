import React from "react";

export default function AddWMINIMA() {
  const add = () => {
    if (typeof ethereum === 'undefined') {
        return alert('Please install MetaMask');
    }

    ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: "0x669c01CAF0eDcaD7c2b8Dc771474aD937A7CA4AF",
          decimals: 18,
          symbol: "WMINIMA",
        },
      },
    });
  };

  return <button onClick={add}>Add WMINIMA to MetaMask</button>;
}
