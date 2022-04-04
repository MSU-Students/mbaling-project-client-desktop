export interface RecentLogsRowsInfo {
  number: string,
  time: string,
  user: string,
  activity: string,
}

export interface RecentStateInterface {
  allRecentLog: RecentLogsRowsInfo[];
  activerows?: RecentLogsRowsInfo;
}

function state(): RecentStateInterface {
  return {
    allRecentLog: [
      {
        number: "1",
        time: "1642314638364",
        user: "pirateking_home",
        activity: "Monkey D. Luffy has posted a new post. (URL:https://m.mbaling.com/post/uv0unwnbu0wnrboub0ywu)",
      },
      {
          number: "2",
          time: "1642314869261",
          user: "palawanexpress98",
          activity: "Nahed S. Bashier has changed their password.",
      }
    ]
  }
};

export default state;
