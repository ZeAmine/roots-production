export type IArtist = {
  id: number;
  artistId: string;
  artistName: string;
  artistImageUrl: string;
  artistFollowers: number;
  artistPopularity: number;
  artistVotes: number;
};

export type IArtists = IArtist[];
