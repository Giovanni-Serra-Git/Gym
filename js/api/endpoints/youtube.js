import { youtubeVideos } from "./youtube-search-video.js";

const {
    items,
} = youtubeVideos;

let obj = {
    "type": "video",
    "title": "10 Minute Abs Home Workout  | This is Intense 🔥🔥🔥 | So trainiere ich effektiv meinen Bauch | DAY 3",
    "id": "7P4-W0D21fg",
    "url": "https://www.youtube.com/watch?v=7P4-W0D21fg",
    "bestThumbnail": {
      "url": "https://i.ytimg.com/vi/7P4-W0D21fg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC9X8R_40JfxPDa2A-2cJC-4TNChw",
      "width": 720,
      "height": 404
    },
    "thumbnails": [
      {
        "url": "https://i.ytimg.com/vi/7P4-W0D21fg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC9X8R_40JfxPDa2A-2cJC-4TNChw",
        "width": 720,
        "height": 404
      },
      {
        "url": "https://i.ytimg.com/vi/7P4-W0D21fg/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCt6DEaSWC_8WX4IlWv4RED5iOuvA",
        "width": 360,
        "height": 202
      }
    ],
    "isUpcoming": false,
    "upcoming": null,
    "isLive": false,
    "badges": [],
    "author": {
      "name": "Mady Morrison",
      "channelID": "UCHJBoCDxaCTRrwCHXEBA-BA",
      "url": "https://www.youtube.com/@madymorrison",
      "bestAvatar": {
        "url": "https://yt3.ggpht.com/ytc/AL5GRJUWjr3Lj10eluxYypxuAVsRmJ1pk4iKnwCgJNU-Lw=s68-c-k-c0x00ffffff-no-rj",
        "width": 68,
        "height": 68
      },
      "avatars": [
        {
          "url": "https://yt3.ggpht.com/ytc/AL5GRJUWjr3Lj10eluxYypxuAVsRmJ1pk4iKnwCgJNU-Lw=s68-c-k-c0x00ffffff-no-rj",
          "width": 68,
          "height": 68
        }
      ],
      "ownerBadges": [],
      "verified": false
    },
    "description": null,
    "views": 4181803,
    "duration": "10:47",
    "uploadedAt": "2 years ago"
  }


const {
    type,
    title,
    author : { bestAvatar : { url  } },
    bestThumbnail : { url : urlName },
} = obj;

console.log(obj)


