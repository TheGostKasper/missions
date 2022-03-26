import { useLangContext } from "../../shared-components/lang-context";
import fb from "../../icons/fb.svg";
import ig from "../../icons/ig.svg";
import gift from "../../icons/gift.svg";

const missionType = {
  facebookMission: "FBPostMission",
  igMission: "IGStoryMission",
};
const Mission = ({ mission, lastElementRef }: any) => {
  const translateObj = useLangContext();

  return (
    <div className="mission" ref={lastElementRef}>
      {!!mission.image && (
        <img
          src={mission.image?.src}
          alt={mission.image?.alt || ""}
          className="media"
        />
      )}
      {!!mission.video && (
        <video src={mission.video?.src} className="media" controls />
      )}
      <div className="btn-cash">
        <small>{translateObj["CSH"]}</small>

        {mission.__typename === missionType.facebookMission ? (
          <img src={fb} alt="facebook" className="ml-4" />
        ) : (
          <img src={ig} alt="IG" className="ml-4" />
        )}
      </div>

      <div className="p-2">
        <h4 className="pb-2">{mission.title}</h4>
        <div className="btn btn-reward ">
          <img src={gift} alt="gift" className="mr-4" />
          <div>
            <small className="bold-reward">{translateObj["RWD"]}</small>$
            {mission.cashReward}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
