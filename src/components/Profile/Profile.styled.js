import styled from 'styled-components';

export const ProfileCard = styled.div`
margin: auto;
margin-top: 50px;

width: 350px;
height: 450px;

border: 1px solid black;
border-radius: 12px;
background-color: lightcyan;
`;

export const Avatar = styled.img`
margin-top: 20px;
margin-left: 100px;
margin-right: 100px;

width: 150px;
height: 150px;

border: 1px solid black;
border-radius: 50%;
background-color: white;
`;

export const UserName = styled.p`
display: flex;
justify-content: center;

font-size: 32px;
font-weight: 700;

margin-bottom: 10px;
`;

export const Tag = styled.p`
display: flex;
justify-content: center;

margin-top: 10px;
margin-bottom: 10px;

font-size: 22px;
font-weight: 400;

color: grey;
`;

export const Stats = styled.div`
display: flex;
width: 100%;

margin-left: 0;
margin-top: 10px;

border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;

background-color: rgb(237, 241, 244);
`;

export const StatsUl = styled.ul`
display: flex;
justify-content: center;
align-items: center;

width: 100%;
margin: 0;
padding-left: 0;
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

export const Quantity = styled.span`
font-weight: 600;
`;

