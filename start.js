// Antideploy DATABASE_URL ko n8n ke variables me convert
if (process.env.DATABASE_URL) {
  try {
    const u = new URL(process.env.DATABASE_URL);
    process.env.DB_TYPE = 'postgresdb';
    process.env.DB_POSTGRESDB_HOST = u.hostname;
    process.env.DB_POSTGRESDB_PORT = u.port || '6543';
    process.env.DB_POSTGRESDB_DATABASE = u.pathname.replace('/', '') || 'postgres';
    process.env.DB_POSTGRESDB_USER = decodeURIComponent(u.username);
    process.env.DB_POSTGRESDB_PASSWORD = decodeURIComponent(u.password);
    process.env.DB_POSTGRESDB_SSL_ENABLED = 'true';
    process.env.DB_POSTGRESDB_SSL_REJECT_UNAUTHORIZED = 'false';
  } catch (e) {
    console.log('DATABASE_URL parse fail', e);
  }
}

// Hardcoded envs taki UI add na bhi karne de to bhi chale
process.env.N8N_PORT = process.env.PORT || '8080';
process.env.N8N_ENCRYPTION_KEY = process.env.N8N_ENCRYPTION_KEY || 'harsh123machine';
process.env.WEBHOOK_URL = process.env.WEBHOOK_URL || 'https://n8n-repo2.antideploy.com';
process.env.TZ = 'Asia/Kolkata';
process.env.GENERIC_TIMEZONE = 'Asia/Kolkata';
process.env.DB_TYPE = process.env.DB_TYPE || 'postgresdb';
process.env.DB_POSTGRESDB_HOST = process.env.DB_POSTGRESDB_HOST || 'aws-0-ap-northeast-1.pooler.supabase.com';
process.env.DB_POSTGRESDB_PORT = process.env.DB_POSTGRESDB_PORT || '6543';
process.env.DB_POSTGRESDB_DATABASE = process.env.DB_POSTGRESDB_DATABASE || 'postgres';
process.env.DB_POSTGRESDB_USER = process.env.DB_POSTGRESDB_USER || 'postgres.tdibomlufxsndzuqwjus';
process.env.DB_POSTGRESDB_PASSWORD = process.env.DB_POSTGRESDB_PASSWORD || 'harshyadav2532';

const { spawn } = require('child_process');
spawn('n8n', ['start'], { stdio: 'inherit' });
