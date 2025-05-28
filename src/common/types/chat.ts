import { SafeMessageRole } from '../enums';

export type Message = {
  role: SafeMessageRole;
  content: string;
};

export type ChatPayload = {
  messages: Message[];
};

export type ChatResponse = {
  message: Message;
  chatId?: string;
};

export type PromptPayload = {
  prompt: string;
};

export type Chat = {
  id: string;
  title: string;
  is_followup_enabled: boolean;
  followup_email: string;
  created_at: Date | string;
  updated_at: Date | string;
};
