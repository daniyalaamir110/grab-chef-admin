import { Metadata } from 'next';
import AnalyticsView from './_views/dashboard-view';

export const metadata: Metadata = {
  title: 'Overview',
};

const OverviewPage = async () => {
  return <AnalyticsView />;
};

export default OverviewPage;
