interface NavLinks {
  id: number;
  label: 'Hary' | 'About' | 'Skill' | 'Projects' | 'FAQ' | 'Contact';
  href: '#home' | '#about' | '#skill' | '#projects' | '#faq' | '#contact';
}

export const navLinks: NavLinks[] = [
  { id: 1, label: 'Hary', href: '#home' },
  { id: 2, label: 'About', href: '#about' },
  { id: 3, label: 'Skill', href: '#skill' },
  { id: 4, label: 'Projects', href: '#projects' },
  { id: 5, label: 'FAQ', href: '#faq' },
  { id: 6, label: 'Contact', href: '#contact' },
];
