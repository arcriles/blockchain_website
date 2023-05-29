//SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract Donations{
    receive() external payable{}
    fallback() external payable{}

    uint pictureCount;
    uint commentCount;

    constructor(){
        pictureCount = 0;
        commentCount = 0;

        addNewPicture("Sample Picture 0", "https://image.web.id/images/solidity-nedir.png");
        addNewPicture("Sample Picture 1", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTccAUbsX5rEZUPfzQmOHTb_7fptbxzx2Szvi2akXSGKQ&s");
        addNewPicture("Sample Picture 2", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSnfBD8oiQixFsc59ccAI4fSbIBvvTjUEZuw&usqp=CAU");
        
        // addNewComment(0, "Sample Comment", false);
    }

    struct Picture{
        string title;
        string downloadURL;
        address publisherWallet;
        uint totalValue;
        uint redeemedValue;
    }

    struct Comment{
        uint pictureRef;
        address wallet;
        uint value;
        string content;
        bool hidden;
    }

    mapping(uint => Picture) pictures;
    mapping(uint => Comment) comments;

    // modifier onlyPublisher{
    //     require(msg.sender != publisherWallet && state == cStates.HIDDEN, "This comment is hidden!");
    // }


    function getPictureData(uint _pictureRef) public view returns(Picture memory){
        require(_pictureRef < pictureCount, "Picture doesn't exists!");
        return(pictures[_pictureRef]);
    }

    function getCommentData(uint _commentRef) public view returns(Comment memory){
        require(_commentRef < pictureCount, "Comment doesn't exists!");
        return(comments[_commentRef]);
    }

    function addNewPicture(string memory _title, string memory _downloadURL) public {
        pictures[pictureCount].title = _title;
        pictures[pictureCount].downloadURL = _downloadURL;
        pictures[pictureCount].publisherWallet = msg.sender;
        pictures[pictureCount].totalValue = 0;
        pictures[pictureCount].redeemedValue = 0;

        pictureCount += 1;
    }

    function redeemPictureValue(uint _pictureRef) public payable{
        require(_pictureRef < pictureCount, "Picture doesn't exists!");
        require(pictures[_pictureRef].publisherWallet == msg.sender, "Picture not owned!");
        require(pictures[_pictureRef].totalValue > pictures[pictureCount].redeemedValue, "Picture has too little value!");
        payable(
            pictures[_pictureRef].publisherWallet
        ).transfer(
            pictures[_pictureRef].totalValue - pictures[pictureCount].redeemedValue
        );

        pictures[pictureCount].redeemedValue = pictures[pictureCount].totalValue;
    }


    function addNewComment(uint _pictureRef, string memory _content, bool _hidden) public payable{
        require(_pictureRef < pictureCount, "Picture doesn't exists!");
        require(msg.value > 0, "Donation too small!");
        payable(address(this)).transfer(msg.value);
        
        comments[commentCount].wallet = msg.sender;
        comments[commentCount].value = msg.value;

        comments[commentCount].pictureRef = _pictureRef;
        comments[commentCount].content = _content;
        comments[commentCount].hidden = _hidden;

        commentCount += 1;
        pictures[_pictureRef].totalValue += msg.value;
    }

    function toggleCommentState(uint _commentRef) public {
        require(_commentRef < commentCount, "Comment doesn't exists!");
        require(comments[commentCount].wallet == msg.sender, "Comment not owned!");
        comments[_commentRef].hidden = !comments[_commentRef].hidden;
    }

    function boostComment(uint _commentRef) public payable{
        require(_commentRef < commentCount, "Comment doesn't exists!");
        require(comments[commentCount].wallet == msg.sender, "Comment not owned!");
        require(msg.value > 0, "Donation too small!");
        payable(address(this)).transfer(msg.value);

        comments[_commentRef].value += msg.value;
        pictures[comments[_commentRef].pictureRef].totalValue += msg.value;
    }

    function viewCommentsAsPublisher(uint _pictureRef) public view returns(string memory){
        require(_pictureRef < pictureCount, "Picture doesn't exists!");
        require(pictures[_pictureRef].publisherWallet == msg.sender, "Picture not owned!");

        string memory result = "";
        for(uint i = 0; i < commentCount; i++){
            bool condition1 = comments[i].pictureRef == _pictureRef;

            if(condition1){
                result = string.concat(result, "(", uint2str(comments[i].value), ")", comments[i].content, "\n");
            }
        }
        return result;
    }

    function viewComments(uint _pictureRef) public view returns(string memory){
        require(_pictureRef < pictureCount, "Picture doesn't exists!");

        string memory result = "";
        for(uint i = 0; i < commentCount; i++){
            bool condition1 = comments[i].pictureRef == _pictureRef;
            bool condition2 = !comments[i].hidden;

            if(condition1 && condition2){
                result = string.concat(result, "(", uint2str(comments[i].value), ")", comments[i].content, "\n");
            }
        }
        return result;
    }



    // function addBalance() public payable{
    //     payable(address(this)).transfer(msg.value);
    // }

    // function getBalance() public view returns(uint){
    //     return (address(this)).balance;
    // }

    // function buyToken(address EoA) public payable{
    //     payable(EoA).transfer(1 ether);
    // }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k-1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}