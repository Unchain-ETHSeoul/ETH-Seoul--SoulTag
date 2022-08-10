import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { IpfsImage } from 'react-ipfs-image';

const Test = () => {

    const [fileImg, setFileImg] = useState(null);
    const [imgsrc, setImgsrc] = useState("");
    const [ihash, setIhash]=useState("");

    const sendImageToIPFSPinata = async (e) => {

        if (fileImg) {
            try {

                const formData = new FormData();
                formData.append("file", fileImg);
                console.log(formData);
                console.log(fileImg);

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

                //console.log(resFile);
                setIhash(resFile.data.IpfsHash);

                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
                //console.log(ImgHash);

                setImgsrc(ImgHash);
            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }

    return (
        <form >
            <input type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
            <button type='button' onClick={sendImageToIPFSPinata}>Mint</button>
            <br></br>
            <IpfsImage hash='QmTU6iFCg2KkF5BvSpw446BAP9o7EqtbFsdoRhUVnbQH2D' gatewayUrl='https://gateway.pinata.cloud/ipfs'></IpfsImage>
        </form>
    )
}
export default Test;