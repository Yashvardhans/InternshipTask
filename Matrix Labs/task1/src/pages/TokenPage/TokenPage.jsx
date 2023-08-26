import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Icon } from '@iconify/react';

import './TokenPage.css';

const TokenPage = () => {

    const Navigate = useNavigate()
    const baseUrl = "https://api.dexscreener.com/latest/dex/tokens/";
    const [tokenAddress, setTokenAddress] = useState('');
    const [data, setData] = useState([]);

    

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}${tokenAddress}`,{
                params :{
                    limit : 10

                }
            });
            setData(response.data.pairs.slice(0, 10).sort((a, b) => parseFloat(a.priceUsd) - parseFloat(b.priceUsd)));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        
        fetchData();
    };

    const truncateAddress = (address) => {
        return address.substring(0, 5) + "...";
    };

    return (
        <div className='token'>
            <div className="overlay"></div>
            <div className="token-content">
            <div className="token-search-bar">
                <form action="" className="search-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Search'
                        value={tokenAddress}
                        onChange={e => setTokenAddress(e.target.value)}
                    />
                    <span className="search-icon">
                            <button type='submit' className="search-button">
                                <Icon icon="fluent:search-24-filled" color="white" width="20" height="20" />
                            </button>
                    </span>
                </form>
                <button className='search-bar-button'>Connect</button>
            </div>
            <div className="token-header">
                Token Search Result
            </div>
            <div className="token-list">
                {data.map((tokenPair, index) => (
                    <div key={index} className="token-pair">
                        <div className="token-section">
                            <div className="section-header">
                                <div className="header-text">Basic Info</div>
                            </div>
                            <div className="section-content">
                                <div className="data-item">
                                    <div className="data-title">Pair Created At</div>
                                    <div className="data-value">{tokenPair.pairCreatedAt}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Symbol</div>
                                    <div className="data-value">{tokenPair.labels?.join(', ')}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Dex ID</div>
                                    <div className="data-value">{tokenPair.dexId}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Pair Address</div>
                                    <div className="data-value">{truncateAddress(tokenPair.pairAddress)}</div>
                                </div>
                            </div>
                            <div className="corner-div">
                            <Icon icon="ic:outline-info" color="white" width="24" height="24" />
                            </div>
                        </div>
                        <div className="token-section">
                            <div className="section-header">
                                <div className="header-text">Base Token</div>
                            </div>
                            <div className="section-content">
                                <div className="data-item">
                                    <div className="data-title">Name:</div>
                                    <div className="data-value">{tokenPair.baseToken.name}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Symbol:</div>
                                    <div className="data-value">{tokenPair.baseToken.symbol}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Address:</div>
                                    <div className="data-value">{truncateAddress(tokenPair.baseToken.address)}</div>
                                </div>
                            </div>
                            <div className="corner-div">
                            <Icon icon="material-symbols:token-outline" color="white" width="24" height="24" />
                            </div>
                        </div>
                        <div className="token-section">
                            <div className="section-header">
                                <div className="header-text">Quote Token</div>
                            </div>
                            <div className="section-content">
                                <div className="data-item">
                                    <div className="data-title">Name:</div>
                                    <div className="data-value">{tokenPair.quoteToken.name}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Symbol:</div>
                                    <div className="data-value">{tokenPair.quoteToken.symbol}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Address:</div>
                                    <div className="data-value">{truncateAddress(tokenPair.quoteToken.address)}</div>
                                </div>
                            </div>
                            <div className="corner-div">
                            <Icon icon="material-symbols:token-outline" color="white" width="24" height="24" />
                            </div>
                        </div>

                        <div className="token-section">
                            <div className="section-header">
                                <div className="header-text">Price</div>
                            </div>
                            <div className="section-content">
                                <div className="data-item">
                                    <div className="data-title">Price Native:</div>
                                    <div className="data-value">{tokenPair.priceNative}</div>
                                </div>
                                <div className="data-item">
                                    <div className="data-title">Price USD:</div>
                                    <div className="data-value">{tokenPair.priceUsd}</div>
                                </div>
                            </div>
                            <div className="corner-div">
                            <Icon icon="pepicons-pop:dollar" color="white" width="24" height="24" />
                            </div>
                        </div>

                        
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default TokenPage;
