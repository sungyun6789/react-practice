import React, { useState, useEffect } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import axios from 'axios';

const Contents = () => {
  const [confirmdData, setConfirmdData] = useState({}); // 누적 확진자
  const [quarantinedData, setQuarantinedData] = useState({}); // 격리자
  const [comparedData, setComparedData] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://api.covid19api.com/total/dayone/country/kr');
      makeData(res.data);
    };

    const makeData = (items) => {
      const arr = items.reduce((acc, cur) => {
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();

        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Death;
        const recovered = cur.Recoverd;

        const findItem = acc.find((a) => a.year === year && a.month === month);

        if (!findItem) {
          acc.push({
            year,
            month,
            date,
            confirmed,
            active,
            death,
            recovered,
          });
        }

        if (findItem && findItem.date < date) {
          findItem.active = active;
          findItem.death = death;
          findItem.date = date;
          findItem.month = month;
          findItem.recovered = recovered;
          findItem.confirmed = confirmed;
        }

        return acc;
      }, []);

      const labels = arr.map((e) => `${e.month + 1}월`);
      setConfirmdData({
        labels,
        datasets: [
          {
            label: '국내 누적 확진자',
            backgroundColor: 'salmon',
            fill: true,
            data: arr.map((e) => e.confirmed),
          },
        ],
      });

      setQuarantinedData({
        labels,
        datasets: [
          {
            label: '월별 격리자 현황',
            borderColor: 'salmon',
            fill: false,
            data: arr.map((e) => e.active),
          },
        ],
      });

      const last = arr[arr.length - 1];

      setComparedData({
        labels: ['확진자', '격리해제', '사망'],
        datasets: [
          {
            label: '누적 확진, 해제, 사망 비율',
            backgroundColor: ['#ff3d67', '#059bff', '#ffc233'],
            borderColor: ['#ff3d67', '#059bff', '#ffc233'],
            fill: false,
            data: [last.confirmed, last.recovered, last.death],
          },
        ],
      });
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <section>
        <h2>국내 코로나 현황</h2>
        <div className="contents">
          <div>
            <Bar
              data={confirmdData}
              options={
                ({
                  title: {
                    display: true,
                    text: '누적 확진자 추이',
                    fontSize: '16px',
                  },
                },
                { legend: { display: true, position: 'bottom' } })
              }
            />
          </div>
          <div>
            <Line
              data={quarantinedData}
              options={
                ({
                  title: {
                    display: true,
                    text: '월별 격리차 현황',
                    fontSize: '16px',
                  },
                },
                { legend: { display: true, position: 'bottom' } })
              }
            />
          </div>
          <div>
            <Doughnut
              data={comparedData}
              options={
                ({
                  title: {
                    display: true,
                    text: `누적 확진, 해제, 사망 (${new Date().getMonth() + 1})`,
                    fontSize: '16px',
                  },
                },
                { legend: { display: true, position: 'bottom' } })
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contents;
