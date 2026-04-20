import { serverSupabaseClient } from '#supabase/server';
import type { H3Event } from 'h3';
import type { Property, CronJobLog } from '../types/database';

/**
 * SupabaseRepository Adapter
 * Encapsulates Supabase logic to allow easier testing and scalability.
 */
export class SupabaseRepository {
  private client;

  private constructor(client: any) {
    this.client = client;
  }

  static async getInstance(event: H3Event) {
    const client = await serverSupabaseClient(event);
    return new SupabaseRepository(client);
  }

  async getActiveProperties(): Promise<Property[]> {
    const { data, error } = await this.client
      .from('properties')
      .select('*')
      .eq('status', 'active');

    if (error) throw new Error(`Supabase Error: ${error.message}`);
    return data as Property[];
  }

  async logCronJob(log: CronJobLog): Promise<void> {
    const { error } = await this.client
      .from('cron_job_logs')
      .insert(log);

    if (error) {
      console.error(`Failed to log cron job [${log.job_name}]:`, error.message);
    }
  }

  // Example: update price logic
  async updatePropertyPrice(id: string, newPrice: number): Promise<void> {
    const { error } = await this.client
      .from('properties')
      .update({ price: newPrice, last_valuation_update: new Date().toISOString() })
      .eq('id', id);

    if (error) throw new Error(`Failed to update property ${id}: ${error.message}`);
  }
}
