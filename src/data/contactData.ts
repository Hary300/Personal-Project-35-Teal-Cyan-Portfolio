import { type IconType } from 'react-icons';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';

export interface FormField {
  label: string;
  placeholder: string;
  type: string;
}

export interface ContactForm {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  fields: {
    name: FormField;
    email: FormField;
    message: FormField;
  };
  buttonText: string;
}

export interface SocialMediaItem {
  id: number;
  platform: string;
  icon: IconType;
  url: string;
}

export interface ContactInfo {
  address: {
    label: string;
    value: string;
  };
  contact: {
    label: string;
    value: string;
  };
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
    title: "Let's ",
    highlightedTitle: 'Build Something Great',
    subtitle:
      "Got an idea, a project, or just want to connect? I'm always open to new conversations.",
    fields: {
      name: {
        label: 'Name',
        placeholder: 'Enter your name',
        type: 'text',
      },
      email: {
        label: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
      },
      message: {
        label: 'Message',
        placeholder: 'Enter your message',
        type: 'textarea',
      },
    },
    buttonText: 'Send Message',
  },
  info: {
    address: {
      label: 'Address',
      value: 'Jakarta, Indonesia',
    },
    contact: {
      label: 'Contact',
      value: '(+62) 1234567890',
    },
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
