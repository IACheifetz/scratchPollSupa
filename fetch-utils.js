const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYWF4anR6c3h1YnNlZW9xb3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5ODgwOTMsImV4cCI6MTk2MzU2NDA5M30.-JF8rp3uujkLpMpiJj70fwmuyamVh64NHTUYK5UFA04'

const SUPABASE_URL = "https://piaaxjtzsxubseeoqown.supabase.co"

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function createPoll() {

}

async function getPolls() {
    const response = await client
        .from('past_polls')
        .select('*');

    return response.body;
}