const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpYWF4anR6c3h1YnNlZW9xb3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5ODgwOTMsImV4cCI6MTk2MzU2NDA5M30.-JF8rp3uujkLpMpiJj70fwmuyamVh64NHTUYK5UFA04';

const SUPABASE_URL = 'https://piaaxjtzsxubseeoqown.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(somePastPoll) {
    const response = await client
        .from('past_polls')
        .insert(somePastPoll);

    return response.body;    
}

export async function getPolls() {
    const response = await client
        .from('past_polls')
        .select('*');

    return response.body;
}

export async function signUp(someEmail, somePassword) {
    const response = await client.auth.signUp({
        email: someEmail,
        password: somePassword,
    });

    return response;
}

export async function signIn(someEmail, somePassword) {
    const response = await client.auth.signIn({
        email: someEmail,
        password: somePassword,
    });

    return response; 
}

export function getUser() {
    const user = client.auth.user();

    return user;
}

export async function logOut() {
    await client.auth.signOut();
}

export function redirectIfNotLoggedIn() {
    const user = getUser();
    if (!user) {
        window.location.href = '../';
    }
}