import React, { useState, useEffect } from 'react';
import { millify } from 'millify';
import { Card, Col, Row, Input } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptoQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({ simplified }) => {
  //simplified coming through props
  const count = simplified ? 10 : 100;

  //console.log(count);
  const { data: cryptoList, isFetching } = useGetCryptoQuery(count);
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);
  const [SearchTerm, setSearchTerm] = useState(' ');
  useEffect(() => {
    const filterData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(SearchTerm.toLowerCase()),
    );
    setCryptos(filterData);
  }, [cryptoList, SearchTerm]);
  // console.log(cryptos) [for check data n console]
  if (isFetching) return 'ruk ja bsdk load ho raha';

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.id}
          >
            <Link to={`/crypto/${currency}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt="crypto"
                  />
                }
                hoverable
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap:{millify(currency.marketCap)}</p>
                <p>Daily Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
