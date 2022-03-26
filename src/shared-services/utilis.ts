import {
  IGroupedMission,
  IMission,
} from "../components/missions-components/modals/mission-modal";

export class Utilis {
  static getDateFormate(date: string): string {
    if (!!date) {
      const mappedDate = new Date(date)
        .toLocaleDateString("en-us", {
          month: "long",
          day: "2-digit",
          year: "numeric",
        })
        .split(" ");

      return `${mappedDate[1].replace(",", "")} ${mappedDate[0]} ${
        mappedDate[2]
      }`;
    } else {
      return "";
    }
  }

  static groupItemsByDate = (
    items: Array<IMission>
  ): Array<IGroupedMission> => {
    const groupedItems: Array<IGroupedMission> = [];
    items.forEach((item: IMission) => {
      const { date, ...itemObj } = item;
      const itemGroupedIndx = groupedItems.findIndex(
        (g) => this.getDateFormate(g.date) === this.getDateFormate(date)
      );
      if (itemGroupedIndx >= 0) {
        groupedItems[itemGroupedIndx].items.push(itemObj);
      } else {
        groupedItems.push({
          date: this.getDateFormate(date),
          items: [itemObj],
        });
      }
    });
    return groupedItems;
  };

  static addOrUpdateMetaTag(prop: string, val: string) {
    const metaEle = document.querySelector(`meta[property="${prop}"]`);
    if (!!metaEle) metaEle.setAttribute("content", val);
    else {
      const meta = document.createElement("meta");
      meta.name = prop;
      meta.content = val;
      document.head.appendChild(meta);
    }
  }
  static addSocialMeta = (prop: string, value: string) => {
    this.addOrUpdateMetaTag(`og:${prop}`, value);
    this.addOrUpdateMetaTag(`twitter:${prop}`, value);
  };

  static updateMissionMetaTags(mission: IMission | undefined) {
    if (!!mission) {
      document.title = mission.title;
      this.addSocialMeta("title", mission.title);
      this.addSocialMeta("description", mission.title);
      this.addSocialMeta("image", mission.image?.src || "");
      this.addSocialMeta("video", mission.video?.src || "");
    }
  }
}
