export interface Property {
  id: string;
  title: string;
  description?: string;
  price: number;
  currency: 'USD' | 'ARS';
  location_city: string;
  status: 'active' | 'sold' | 'archived';
  last_valuation_update?: string;
  created_at: string;
}

export interface CronJobLog {
  id?: number;
  job_name: string;
  execution_date: string;
  status: 'success' | 'failed';
  records_processed: number;
  error_details?: string;
}
