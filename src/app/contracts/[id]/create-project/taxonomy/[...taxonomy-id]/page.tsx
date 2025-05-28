'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const TaxonomyChild = () => {
  const params = useParams();
  console.log({ params });
  return <div>TaxonomyChild</div>;
};

export default TaxonomyChild;
