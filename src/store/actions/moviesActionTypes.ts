interface MovieStats {
  viewCount: number;
  likeCount: number;
}

interface MovieInfo {
  snippet: {
    title: string;
  };
}
interface MovieThumbnails {
  snippet: {
    thumbnails: {
      medium: {
        url: string;
      };
      high: {
        url: string;
      };
      standard: {
        url: string;
      };
    };
  };
}
export type MovieType = {
  statistics: MovieStats;
  thumbnails: MovieThumbnails;
  info: MovieInfo;
};
