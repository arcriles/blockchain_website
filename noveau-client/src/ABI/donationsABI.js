export const contractAddress = "0xE14fCdffEEF36814Cc6Ff8c68D1bac981F6A7117"

export const jsonABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pictureRef",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_content",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "_hidden",
				"type": "bool"
			}
		],
		"name": "addNewComment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_downloadURL",
				"type": "string"
			}
		],
		"name": "addNewPicture",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_commentRef",
				"type": "uint256"
			}
		],
		"name": "boostComment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pictureRef",
				"type": "uint256"
			}
		],
		"name": "redeemPictureValue",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_commentRef",
				"type": "uint256"
			}
		],
		"name": "toggleCommentState",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pictureRef",
				"type": "uint256"
			}
		],
		"name": "getAllCommentFromPicture",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "pictureRef",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "wallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "hidden",
						"type": "bool"
					}
				],
				"internalType": "struct Donations.Comment[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pictureRef",
				"type": "uint256"
			}
		],
		"name": "getCommentCountFromPicture",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_commentRef",
				"type": "uint256"
			}
		],
		"name": "getCommentData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "pictureRef",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "wallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "value",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "content",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "hidden",
						"type": "bool"
					}
				],
				"internalType": "struct Donations.Comment",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_pictureRef",
				"type": "uint256"
			}
		],
		"name": "getPictureData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "downloadURL",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "publisherWallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "totalValue",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "redeemedValue",
						"type": "uint256"
					}
				],
				"internalType": "struct Donations.Picture",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]