const owner = 'your_username';
const repo = 'your_repository';
const token = 'your_token';

async = fetchPushData() {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/events`, {
        headers: {
            'Authorization': `token ${token}`
        }
    });
    const events = res.json();
    const pushEvents = events.filter(even => event.type === 'PushEvent');
    return pushEvents;
}

function processFetchData(pushEvents) {
    const pushDates = pushEvents.map(event => new Data(event.created_at).toLocalDateString());
    const pushCount = pushDates.reduce((acc, date) => {
        acc[date] = acc[date] || 0) + 1;
        return acc;
    }, {});
    return pushCount;
}