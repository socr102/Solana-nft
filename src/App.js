import React, {useEffect} from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
   /*
   * This function holds the logic for deciding if a Phantom Wallet is
   * connected or not
   */
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('phantom wallet found!');
          /*
         * The solana object gives us a function that will allow us to connect
         * directly with the user's wallet!
         */
          const response = await solana.connect({onlyIfTrusted: true});
          console.log(
            'Connected with Public key:',
            response.publicKey.toString()
          );
        } 
      }else {
          alert('solana object not found! Get a Phantom wallet');
        }
    } catch (error) {
      console.error(error);
    }
  };
    /*
   * Let's define this method so our code doesn't break.
   * We will write the logic for this next!
   */
  const connectWallet = async() => {};
    /*
   * We want to render this UI when the user hasn't connected
   * their wallet to our app yet.
   */
  const renderNotConnectedContainer = () => (
    <button>
      Connec