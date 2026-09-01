import { type IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

export type Label = 'Name' | 'Email' | 'Subject' | 'Message';
export type FieldType = 'text' | 'email' | 'textarea';

interface Field {
  name: 'name' | 'email' | 'subject' | 'message';
  label: Label;
  placeholder: string;
  type: FieldType;
}

export interface ContactForm {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  fields: Field[];
  buttonText: string;
}

export interface SocialMediaItem {
  id: number;
  platform: string;
  icon: IconType;
  url: string;
}

interface Detail {
  label: string;
  value: string;
}

export interface ContactInfo {
  details: Detail[];
  socialMedia: {
    label: string;
    items: SocialMediaItem[];
  };
}

export interface ContactData {
  form: ContactForm;
  info: ContactInfo;
  watermarkText: string;
}

export const contactData: ContactData = {
  form: {
    title: "Let's Build Something Great",
    highlightedTitle: 'Build Something',
    subtitle:
      "Got an idea, a project, or just want to connect? I'm always open to new conversations.",
    fields: [
      {
        name: 'name',
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text',
      },
      {
        name: 'email',
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
      },
      {
        name: 'subject',
        label: 'Subject',
        placeholder: 'Enter your Subject',
        type: 'text',
      },
      {
        name: 'message',
        label: 'Message',
        placeholder: 'Enter your message',
        type: 'textarea',
      },
    ],
    buttonText: 'Send Message',
  },
  info: {
    details: [
      {
        label: 'Address',
        value: 'Jakarta, Indonesia',
      },
      {
        label: 'Contact',
        value: '(+62) 1234567890',
      },
    ],
    socialMedia: {
      label: 'Social Media',
      items: [
        {
          id: 1,
          platform: 'Facebook',
          url: 'https://facebook.com',
          icon: FaFacebookF,
        },
        {
          id: 2,
          platform: 'Instagram',
          url: 'https://instagram.com',
          icon: FaInstagram,
        },
        {
          id: 3,
          platform: 'LinkedIn',
          url: 'https://linkedin.com',
          icon: FaLinkedinIn,
        },
        {
          id: 4,
          platform: 'TikTok',
          url: 'https://tiktok.com',
          icon: FaTiktok,
        },
      ],
    },
  },
  watermarkText: 'GET IN TOUCH',
};
