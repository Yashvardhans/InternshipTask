import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon } from '@iconify/react';



import './PairPage.css';

const PairPage = () => {
    const baseUrl = "https://api.dexscreener.com/latest/dex/search/?q=";
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${baseUrl}${query}`);
            setData(response.data.pairs.slice(0, 10).sort((a, b) => parseFloat(a.priceUsd) - parseFloat(b.priceUsd)));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        if (query) {
            fetchData();
        }
    }, [query]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchData();
    };

    const truncateAddress = (address) => {
        return address.substring(0, 5) + "...";
    };

    return (
        <div className='pair-page'>
            <div className="overlay"></div>
            <div className="pair-content">
                <div className="pair-search-bar">
                    <form action="" className="search-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder='Search'
                            
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                        <span className="search-icon">
                            <button type='submit' className="search-button">
                                <Icon icon="fluent:search-24-filled" color="white" width="20" height="20" />
                            </button>
                        </span>
                    </form>
                    <button className='search-bar-button'>Connect</button>
                </div>
                <div className="pair-header">
                    Pair Search Result
                </div>
                <div className="pair-list">
                    {data.map((pair, index) => (
                        <div key={index} className="pair-item">
                            <div className="pair-section">
                                <div className="section-title">Basic Info</div>
                                <div className="section-content">
                                    <div className="data-item">
                                        <div className="data-title">Pair Created At</div>
                                        <div className="data-value">{pair.pairCreatedAt || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Symbol</div>
                                        <div className="data-value">{pair.labels?.join(', ') || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Dex ID</div>
                                        <div className="data-value">{pair.dexId.slice(0,10) || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Pair Address</div>
                                        <div className="data-value">{truncateAddress(pair.pairAddress) || 'NA'}</div>
                                    </div>
                                </div>
                                <div className="corner-div">
                                <Icon icon="ic:outline-info" color="white" width="24" height="24" />
                                </div>
                            </div>
                            <div className="pair-section">
                                <div className="section-title">Base Token</div>
                                <div className="section-content">
                                    <div className="data-item">
                                        <div className="data-title">Name:</div>
                                        <div className="data-value">{pair.baseToken.name || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Symbol:</div>
                                        <div className="data-value">{pair.baseToken.symbol || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Address:</div>
                                        <div className="data-value">{truncateAddress(pair.baseToken.address) || 'NA'}</div>
                                    </div>
                                </div>
                                <div className="corner-div">
                                <Icon icon="material-symbols:token-outline" color="white" width="24" height="24" />
                                </div>
                            </div>
                            <div className="pair-section">
                                <div className="section-title">Quote Token</div>
                                <div className="section-content">
                                    <div className="data-item">
                                        <div className="data-title">Name:</div>
                                        <div className="data-value">{pair.quoteToken.name || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Symbol:</div>
                                        <div className="data-value">{pair.quoteToken.symbol || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Address:</div>
                                        <div className="data-value">{truncateAddress(pair.quoteToken.address) || 'NA'}</div>
                                    </div>
                                </div>
                                <div className="corner-div">
                                <Icon icon="material-symbols:token-outline" color="white" width="24" height="24" />
                                </div>
                            </div>
                            <div className="pair-section">
                                <div className="section-title">Price</div>
                                <div className="section-content">
                                    <div className="data-item">
                                        <div className="data-title">Price Native:</div>
                                        <div className="data-value">{pair.priceNative || 'NA'}</div>
                                    </div>
                                    <div className="data-item">
                                        <div className="data-title">Price USD:</div>
                                        <div className="data-value">{pair.priceUsd || 'NA'}</div>
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

export default PairPage;
