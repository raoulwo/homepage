export type Resume = {
  title: string;
  subtitle: string;
  items: ResumeItem[];
};

export type ResumeItem = {
  title: string;
  duration: string;
  link: Link;
};

export type Link = {
  text: string;
  href: string;
};
