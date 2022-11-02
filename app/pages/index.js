import React from "react";
import {useState, useEffect} from "react";
import CandyMachine from "../components/CandyMachine";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

// Constants
const TWITTER_HANDLE = "_buildspace";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Home = () => {
    // const [wallet, setWallet] = useState(false)

    const wallet = useWallet()
    // useEffect(() => {
    //     const newWallet = useWallet()
    //     setWallet(newWallet)
    // }, [])

    console.log("wallet")
    console.log(wallet)
    console.log(wallet ? "Not connected" : wallet.publicKey.toString())

    // Actions
    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {/* Render your connect to wallet button right here */}
                    {/*{connected ? "Connected!" : renderNotConnectedContainer()}*/}
                    {/*{wallet.publicKey ? renderNotConnectedContainer() : "Connected!"}*/}
                    {/*{renderNotConnectedContainer()}*/}
                    {/*<renderNotConnectedContainer />*/}
                    {/*<WalletMultiButton className="cta-button connect-wallet-button" />*/}
                    {wallet.publicKey ? <CandyMachine walletAddress={wallet} /> : renderNotConnectedContainer()}

                </div>

                {/*<CandyMachine />*/}

                <div className="footer-container">
                    <img alt="Twitter Logo" className="twitter-logo" src="twitter-logo.svg" />
                    <a className="footer-text" href={TWITTER_LINK} target="_blank" rel="noreferrer">{`built on @${TWITTER_HANDLE}`}</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
