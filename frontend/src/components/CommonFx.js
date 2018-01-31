export const formatDate = epoch => new Date(epoch * 1000).toDateString();
export const sortByDateAsc = arr => arr.sort((a, b) => b.timestamp - a.timestamp);
export const sortByDateDsc = arr => arr.sort((a, b) => a.timestamp - b.timestamp);
export const sortByVoteAsc = arr => arr.sort((a, b) => b.voteScore - a.voteScore);
export const sortByVoteDsc = arr => arr.sort((a, b) => a.voteScore - b.voteScore);
