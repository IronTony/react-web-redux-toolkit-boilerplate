import { createAction } from '@reduxjs/toolkit';
import type { messageHandlerPayload } from './types';

export const messageHandlerSet = createAction<messageHandlerPayload>('ACTION/MESSAGE_HANDLER_SET');
export const messageHandlerReset = createAction('ACTION/MESSAGE_HANDLER_RESET');
