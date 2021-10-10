import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { cryptoNewsApi } from './../services/cryptoNewsApi';
import moment from 'moment';

const { Text, Title } = Typography;
const { option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'cryptocurrency',
    count: simplified ? 6 : 12,
  });
  if (!cryptoNews) return ' ruk bsdk de raha news';
  console.log(cryptoNews);
  return (
    <div>
      <Row gutter={[24, 24]}>
        {cryptoNews.value.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={news?.image?.thumbnail?.contentUrl}
                    alt="news"
                  />
                </div>

                <p>
                  {news.description.length > 100
                    ? `${news.description.substring(0, 100)}...`
                    : news.description}
                </p>

                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl
                      }
                      alt=""
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished)
                      .startOf('ss')
                      .fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;
