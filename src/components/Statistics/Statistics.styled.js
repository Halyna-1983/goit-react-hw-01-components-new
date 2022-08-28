import styled from 'styled-components';

export const StatisticsCard = styled.div`
margin: auto;
margin-top: 50px;

width: 350px;
height: 180px;

border: 1px solid black;
border-radius: 12px;

background-color: lightcyan;
`;

export const Title = styled.h2`
display: flex;
justify-content: center;

font-size: 28px;
font-weight: 700;

margin-bottom: 10px;
`;

export const Label = styled.span`
display: flex;
justify-content: center;

text-decoration: none;
font-size: 18px;
font-weight: 700;

margin-bottom: 10px;
`;

export const StatsUl = styled.ul`
display: flex;
justify-content: center;
list-style: none;

width: 100%;
margin-top: 20px;
padding-left: 0;
/* gap: 20px; */

border: 1px solid #ddd;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
width: 100%;
height: 95px;

align-items: center;
justify-content: center;

border: 1px solid #ddd;
`;