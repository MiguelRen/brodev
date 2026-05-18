export interface UserProfile {
  id: string;
  fullName: string;
  avatarUrl?: string | null;
  phone?: string | null;
  bio?: string | null;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  roles: string[];
  profile?: UserProfile;
  isActive: boolean;
  createdAt: string;
}
