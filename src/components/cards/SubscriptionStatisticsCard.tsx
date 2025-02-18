import React from 'react';
import { ArrowDown, ArrowUp } from '../../assets/icons';
import { ISubscriptionStatisticsCard } from './types';
import { CustomCard } from '../common/CustomCard';
import { CardBody } from '@heroui/react';

const SubscriptionStatisticsCard: React.FC<ISubscriptionStatisticsCard> = (
  props
) => {
  const renderTrendData = (trend: string, percentage: string) => {
    const isUpTrend = trend === 'positive';
    const bgColor = isUpTrend ? 'bg-light-green' : 'bg-light-red';
    const textColor = isUpTrend ? 'text-green' : 'text-error';
    const IconComponent = isUpTrend ? ArrowUp : ArrowDown;

    return (
      <span
        className={`font-medium text-[10px] md:text-xs ${bgColor} ${textColor} flex items-center gap-1 px-1 md:p-1 rounded-xl w-fit md:justify-center`}
      >
        {/* @ts-expect-error Type error */}
        <IconComponent className="w-[8px] h-[8px] md:w-3 md:h-3" />
        {percentage}%
      </span>
    );
  };

  const renderVariance = (trend: string, variance: string) => {
    const isUpTrend = trend === 'positive';
    const textColor = isUpTrend ? 'text-green' : 'text-error';
    const IconComponent = isUpTrend ? '+' : '-';

    return (
      <span
        className={`font-medium text-xs ${textColor} flex flex-wrap md:flex-nowrap`}
      >
        {IconComponent}
        {variance}
        <p className="text-light-gray ml-1 text-xs">than last month</p>
      </span>
    );
  };

  return (
    <CustomCard aria-labelledby="Dashboard-cards">
      <CardBody className="flex flex-col gap-2">
        <div className="xl:flex gap-3 text-base text-primary-gray block h-fit mb-2">
          <props.Icon />
          <p className="text-sm md:text-base flex flex-wrap">{props.title}</p>
        </div>

        <div className="flex gap-1 md:gap-2 md:items-center flex-wrap">
          <p className="font-bold text-sm md:text-2xl">{props.value}</p>
          {props.trend &&
            props.percentage &&
            renderTrendData(props.trend, props.percentage)}
        </div>

        {props.trend &&
          props.variance &&
          renderVariance(props.trend, props.variance)}
        {props.subText && (
          <p className="text-light-gray text-xs md:text-sm">{props.subText}</p>
        )}
      </CardBody>
    </CustomCard>
  );
};

export default SubscriptionStatisticsCard;
