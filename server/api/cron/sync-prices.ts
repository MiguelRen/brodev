import { SupabaseRepository } from '../../utils/supabaseRepository';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const authHeader = getHeader(event, 'Authorization');

  // Security Verification (Fernando Herrera: Safety first)
  if (authHeader !== `Bearer ${config.cronSecret}`) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: Access Denied',
    });
  }

  const repo = await SupabaseRepository.getInstance(event);
  const startTime = new Date().toISOString();

  try {
    // Business Logic (Scalable/Clean)
    const properties = await repo.getActiveProperties();
    
    // Example logic: Just counting/verifying for this "sync" endpoint
    // In a real scenario, this would call an external API or perform calculations
    const processedCount = properties.length;

    // Log Success
    await repo.logCronJob({
      job_name: 'sync-prices',
      execution_date: startTime,
      status: 'success',
      records_processed: processedCount,
    });

    return {
      success: true,
      processed: processedCount,
      timestamp: new Date().toISOString(),
    };
  } catch (error: any) {
    // Log Failure
    await repo.logCronJob({
      job_name: 'sync-prices',
      execution_date: startTime,
      status: 'failed',
      records_processed: 0,
      error_details: error.message,
    });

    throw createError({
      statusCode: 500,
      statusMessage: `Cron Job Failed: ${error.message}`,
    });
  }
});
