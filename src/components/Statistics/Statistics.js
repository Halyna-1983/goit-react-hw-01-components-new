import PropTypes from 'prop-types'; 
import { StatisticsCard, Title, Label, StatsUl, StatsItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (

        <StatisticsCard>
            <Title> Upload stats</Title>

            <StatsUl>
                {stats.map(item => {
                    const{id, label, percentage} = item
                    return <StatsItem key={id} >
                    <Label>{label}</Label>
                    <span>{percentage} %</span>
                    </StatsItem>
                })}
            </StatsUl>
        </StatisticsCard>
    );
};

Statistics.propTypes = {
    statistics: PropTypes.exact({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
};