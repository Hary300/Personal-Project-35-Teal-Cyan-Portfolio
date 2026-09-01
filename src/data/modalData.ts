import type { IconType } from 'react-icons';
import { FiCheck } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';

export interface ModalItem {
  status: 'success' | 'error';
  title: string;
  description: string;
  buttonText: string;
  icon: IconType;
}

export interface ModalData {
  success: ModalItem;
  error: ModalItem;
}

export const modalData: ModalData = {
  success: {
    status: 'success',
    icon: FiCheck,
    title: 'Thanks for Reaching Out!',
    description: "I've received your message and will get back to you shortly.",
    buttonText: 'Back to Home',
  },
  error: {
    status: 'error',
    icon: RxCross2,
    title: 'Message Not Sent',
    description: "Something broke along the way. Let's try resending it.",
    buttonText: 'Try Again',
  },
};
