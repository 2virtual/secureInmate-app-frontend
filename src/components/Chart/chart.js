import React, { useEffect, useRef } from 'react';
import DonutChart from './donutStat';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';


const ChartComponent = () => {
    const {user} = useSelector(
        (state) => state.auth
      );
    const data = [
        ['Offense', 'Percentage'],
        ['Robbery', 70],
        ['Domestic violence', 20],
        ['Cyber crime', 50],
        ['Homicide', 35],
      ];

      const currentDate = moment().format('YYYY-MM-DD');
  return (
    <div
   
    >
      <div
        id="container"
        style={{
          backgroundColor: '#ffff',
          boxShadow: '0 0 25px 2px rgba(0,0,0,.3)',
          borderRadius: '5px',
          flexGrow: '.2',
          padding: '1.5em'
        }}
      >
           <div
          id="info"
          style={{
            display: 'flex'
          }}
        >
          <div
            id="legend"
            style={{
              flexGrow: 1
            }}
          >
            <h4>Available statictics @{currentDate}</h4>
            <p
              className="sub-title"
              style={{
                fontWeight: 'bold',
                fontSize: 'smaller',
                color: '#7F878F'
              }}
            >
              Last 7 days
            </p>
            <ul
              className="responses"
              style={{
                listStyleType: 'none',
                padding: 0,
                color: '#7F878F'
              }}
            >
              <li
                className="not-exist"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 0'
                }}
              >
                Total number of inmates
                <span
                  className="num"
                  style={{
                    float: 'right'
                  }}
                >
                  380
                </span>
              </li>
              <li
                className="not-provided"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 0'
                }}
              >
               Inmates awaiting trial
                <span
                  className="num"
                  style={{
                    float: 'right'
                  }}
                >
                  39
                </span>
              </li>
              <li
                className="info-provided"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 0'
                }}
              >
               Total female
                <span
                  className="num"
                  style={{
                    float: 'right'
                  }}
                >
                  100
                </span>
              </li>
              <li
                className="notice-provided"
                style={{
                  borderTop: '2px solid #eee',
                  padding: '.5em 0',
                  borderBottom: '2px solid #eee'
                }}
              >
                Total male
                <span
                  className="num"
                  style={{
                    float: 'right'
                  }}
                >
                  280
                </span>
              </li>
            </ul>
           
          </div>
          <div
            id="chart"
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h4
              style={{
                alignSelf: 'centre'
              }}
            >
           {user.data.Penitentiary} Correctional Centre
            </h4>
        <DonutChart data={data}  />
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default ChartComponent;
