import { useEffect, useState } from "react";
import {
  IGroupedMission,
  IItem,
  IMissionListProp,
} from "./modals/mission-modal";

import UseScrollLoader from "../../shared-components/scroll-loader";
import { useLangContext } from "../../shared-components/lang-context";
import { Utilis } from "../../shared-services/utilis";
import Mission from "./mission";

const MissionList = ({
  items,
  hasNext,
  onNextPageChange,
}: IMissionListProp) => {
  const translateObj = useLangContext();
  const [feed, setFeed] = useState<Array<IGroupedMission>>([]);
  const lastElementRef = UseScrollLoader({ hasNext, onNextPageChange });

  useEffect(() => {
    if (!!items && items.length > 0) {
      setFeed((prevFeed) => [
        ...prevFeed,
        ...Utilis.groupItemsByDate([...items]),
      ]);
    }
    Utilis.updateMissionMetaTags(items[items.length - 1]);
  }, [items]);

  return (
    <div className="mx-card">
      {!!feed.length &&
        feed.map((gMission: IGroupedMission, indx) => (
          <div key={indx} className="mt-4">
            <h4 className="mt-5 mb-4 mission-date">
              {translateObj.translate(gMission.date, [1])}
            </h4>
            {gMission.items.map((mission: IItem, i) => (
              <Mission
                lastElementRef={lastElementRef}
                mission={mission}
                key={i}
              />
            ))}
          </div>
        ))}

      {!hasNext && !!items.length && (
        <p className="text-center alert alert-light text-center w-100">
          {translateObj["NDM"]}
        </p>
      )}
    </div>
  );
};

export default MissionList;
