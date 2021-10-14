import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptoQuery } from './../services/cryptoApi';
import moment from 'moment';
import { SemipolarLoading } from 'react-loadingg';

const { Text, Title } = Typography;
const { option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setnewsCategory] = useState('cryptocurrency');
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  const { data } = useGetCryptoQuery(100);
  if (!cryptoNews) return <SemipolarLoading color="#0071bd" />;
  //console.log(cryptoNews);
  return (
    <div>
      <Row gutter={[24, 24]}>
        {!simplified && (
          <Col span={24}>
            <select
              showSearch
              className="select-news"
              placeholder="select a news category"
              optionFilterProp="children"
              onChange={(value) => setnewsCategory(value)}
              filterOption={(input, option) =>
                option.children.toLowerCase.indexOf(
                  input.toLowerCase(),
                ) >= 0
              }
            >
              <option value="cryptocurrency">cryptocurrency</option>
              {data?.data?.coins.map((coin) => (
                <option value={coin.name}>{coin.name}</option>
              ))}
            </select>
          </Col>
        )}
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
