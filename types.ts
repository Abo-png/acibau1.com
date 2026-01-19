export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  aciMembershipNumber: string;
  role: 'member' | 'admin';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  description: string;
  imageUrl: string;
  status: 'upcoming' | 'past';
  isOpenForRegistration?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  type: 'article' | 'note' | 'pdf' | 'link';
  url: string;
  description?: string;
}

export enum AcademicCategory {
  CIVIL = 'Civil Engineering',
  ARCH = 'Architectural Engineering',
  SURVEYING = 'Surveying',
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
}

export interface CourseCategory {
  title: string;
  courses: string[];
}