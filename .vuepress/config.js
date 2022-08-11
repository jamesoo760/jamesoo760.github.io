module.exports = {
  title: "首頁",
  description: "個人網誌",
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    head: [
      [
        "meta",
        {
          name: "viewport",
          content:
            "width=device-width, user-scaleble=0, initial-scale=1, maximum-scale=1",
        },
      ],
    ],
    nav: [
      {
        text: "關於我",
        link: "/about_me/",
      },
      {
        text: "遊戲日誌",
        link: "/game_diary/",
      },
      {
        text: "遊戲企劃",
        link: "/game_design/",
      },
      {
        text: "作品集",
        link: "/portfolioS/",
      },
    ],
    sidebar: {
      "/game_diary/": [
        {
          title: "遊戲日誌",
          collapsable: false,
          children: ["", "2022-08-10-ro"],
        },
      ],
    },
  },
};
