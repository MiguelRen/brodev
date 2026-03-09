export interface Lead {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  propertyAddress: string;
  propertyType: string;
  message?: string;
  status: 'pending' | 'contacted' | 'resolved';
  createdAt?: string;
}
