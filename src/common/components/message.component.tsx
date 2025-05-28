import React from 'react';
import { Message as MessageType } from '@/common/types/chat';
import { SafeMessageRole } from '@/common/enums';
import Image from 'next/image';
import Logo from '../../../public/assets/images/letzfair-logo.png';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface MessageProps {
  message: MessageType;
}

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const Message: React.FC<MessageProps> = ({ message }) => {
  if (message.role === SafeMessageRole.USER) {
    return (
      <motion.div
        initial='initial'
        animate='animate'
        transition={fadeInUp.transition}
        variants={fadeInUp}
        className='flex justify-end items-start gap-3 '
      >
        {/* user prompt */}
        <div className='w-auto p-2 bg-white rounded-s-3xl rounded-br-3xl'>
          <p className='w-auto text-base text-dark font-medium'>
            {message.content}
          </p>
        </div>
        {/* <div className="flex grow-0 shrink-0 w-8 h-8">
          <div className="w-full h-full flex justify-center items-center text-xl font-semibold rounded-full bg-grey-50">
            U
          </div>
        </div> */}
      </motion.div>
    );
  } else if (message.role === SafeMessageRole.ASSISTANT) {
    return (
      <motion.div
        initial='initial'
        animate='animate'
        transition={fadeInUp.transition}
        variants={fadeInUp}
        className='flex justify-start items-start gap-3 rounded-3xl p-2'
      >
        <div className='flex grow-0 shrink-0 w-8 h-8'>
          <Image
            src={Logo}
            alt='logo'
            className='w-8 h-8 rounded-full'
          />
        </div>
        {/* assistant response in markdown */}
        <div className='prose prose-sm max-w-none text-dark prose-li:marker:text-dark'>
          <ReactMarkdown
            components={{
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              a: ({ node, ...props }) => (
                <a
                  {...props}
                  target='_blank'
                  rel='noopener noreferrer'
                />
              ),
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </motion.div>
    );
  } else {
    return null;
  }
};

export default Message;
