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
          full_name: string
          email: string
          phone: string
          property_address: string
          property_type: string
          message: string | null
          status: 'pending' | 'contacted' | 'resolved'
          created_at: string
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          phone: string
          property_address: string
          property_type: string
          message?: string | null
          status?: 'pending' | 'contacted' | 'resolved'
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string
          email?: string
          phone?: string
          property_address?: string
          property_type?: string
          message?: string | null
          status?: 'pending' | 'contacted' | 'resolved'
          created_at?: string
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
