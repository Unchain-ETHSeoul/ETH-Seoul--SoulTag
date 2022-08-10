import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

const Test = () => {

    const [fileImg, setFileImg] = useState(null);

    const sendFileToIPFS = async (e) => {

        if (fileImg) {
            try {

                const formData = new FormData();
                formData.append("file", fileImg);
                console.log(formData);
                console.log(fileImg);

                console.log(process.env.REACT_APP_PINATA_API_KEY);
                console.log(process.env.REACT_APP_PINATA_API_SECRET);
                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });

                console.log(resFile);

                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                console.log(ImgHash);
                //Take a look at your Pinata Pinned section, you will see a new file added to you list.   

            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }

    return (
        <form >
            <input type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
            <button type='button' onClick={sendFileToIPFS}>Mint NFT</button>
        </form>
    )
}
export default Test;