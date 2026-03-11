export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          fullName: string
          email: string
          phone: string
          propertyAddress: string
          propertyType: string
          message: string | null
          status: 'pending' | 'contacted' | 'resolved'
          createdAt: string
        }
        Insert: {
          id?: string
          fullName: string
          email: string
          phone: string
          propertyAddress: string
          propertyType: string
          message?: string | null
          status?: 'pending' | 'contacted' | 'resolved'
          createdAt?: string
        }
        Update: {
          id?: string
          fullName?: string
          email?: string
          phone?: string
          propertyAddress?: string
          propertyType?: string
          message?: string | null
          status?: 'pending' | 'contacted' | 'resolved'
          createdAt?: string
        }
      }
    }
    Views: {
      [_ in string]: any
    }
    Functions: {
      [_ in string]: any
    }
    Enums: {
      [_ in string]: any
    }
    CompositeTypes: {
      [_ in string]: any
    }
  }
}
