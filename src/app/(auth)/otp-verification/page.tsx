import React from 'react';
import OtpVerificationView from './_views/otp-verification.view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OTP Verification',
};

const OtpVerification = async () => {
  return <OtpVerificationView />;
};

export default OtpVerification;
